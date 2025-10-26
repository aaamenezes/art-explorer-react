'use client';

import { LOCAL_STORAGE_FAVORITES_KEY } from '@/data/constants';
import { ArtworkProps } from '@/types/artwork';
import { FavoriteArtworkProps } from '@/types/favorite';
import { useCallback } from 'react';

export function useFavorite() {
  const getAll = useCallback(() => {
    if (typeof window === 'undefined') return [];

    const favoritesStringOrNull = window.localStorage.getItem(
      LOCAL_STORAGE_FAVORITES_KEY
    );
    if (!favoritesStringOrNull) return [];

    const favorites: FavoriteArtworkProps[] = JSON.parse(favoritesStringOrNull);

    return favorites;
  }, []);

  const isFavorited = useCallback(
    (objectID: number) => {
      const favorites = getAll();

      const isArtworkExistsInFavorites = favorites.find(
        artwork => artwork.id === objectID
      );

      return Boolean(isArtworkExistsInFavorites);
    },
    [getAll]
  );

  const add = useCallback(
    (artworkToSave: ArtworkProps) => {
      if (isFavorited(artworkToSave.objectID)) return;

      const favorites = getAll();

      favorites.push({
        id: artworkToSave.objectID,
        data: {
          objectID: artworkToSave.objectID,
          title: artworkToSave.title,
          primaryImage: artworkToSave.primaryImage,
          primaryImageSmall: artworkToSave.primaryImageSmall,
          artistDisplayName: artworkToSave.artistDisplayName,
          artistDisplayBio: artworkToSave.artistDisplayBio,
          culture: artworkToSave.culture,
          objectDate: artworkToSave.objectDate,
          medium: artworkToSave.medium,
          department: artworkToSave.department,
          objectURL: artworkToSave.objectURL,
        },
        updatedAt: new Date(),
      });

      window.localStorage.setItem(
        LOCAL_STORAGE_FAVORITES_KEY,
        JSON.stringify(favorites)
      );
    },
    [getAll, isFavorited]
  );

  const remove = useCallback(
    (objectID: number) => {
      const favorites = getAll();

      const updatedFavorites = favorites.filter(
        artwork => artwork.id !== objectID
      );

      window.localStorage.setItem(
        LOCAL_STORAGE_FAVORITES_KEY,
        JSON.stringify(updatedFavorites)
      );
    },
    [getAll]
  );

  return { add, getAll, isFavorited, remove };
}
