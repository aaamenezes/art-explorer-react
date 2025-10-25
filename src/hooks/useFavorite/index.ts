'use client';

import { LOCAL_STORAGE_FAVORITES_KEY } from '@/data/constants';
import { ArtWorkProps } from '@/types/artwork';
import { FavoriteArtWorkProps } from '@/types/favorite';
import { useCallback } from 'react';

export function useFavorite() {
  const getAll = useCallback((): FavoriteArtWorkProps[] => {
    if (typeof window === 'undefined') return [];

    const favoritesStringOrNull = window.localStorage.getItem(
      LOCAL_STORAGE_FAVORITES_KEY
    );
    if (!favoritesStringOrNull) return [];

    return JSON.parse(favoritesStringOrNull);
  }, []);

  const isFavorited = useCallback(
    (objectID: number) => {
      const favorites = getAll();

      const isArtWorkExistsInFavorites = favorites.find(
        artWork => artWork.id === objectID
      );

      return Boolean(isArtWorkExistsInFavorites);
    },
    [getAll]
  );

  const add = useCallback(
    (artWorkToSave: ArtWorkProps) => {
      if (isFavorited(artWorkToSave.objectID)) return;

      const favorites = getAll();

      favorites.push({
        id: artWorkToSave.objectID,
        data: {
          objectID: artWorkToSave.objectID,
          title: artWorkToSave.title,
          primaryImage: artWorkToSave.primaryImage,
          primaryImageSmall: artWorkToSave.primaryImageSmall,
          artistDisplayName: artWorkToSave.artistDisplayName,
          artistDisplayBio: artWorkToSave.artistDisplayBio,
          culture: artWorkToSave.culture,
          objectDate: artWorkToSave.objectDate,
          medium: artWorkToSave.medium,
          department: artWorkToSave.department,
          objectURL: artWorkToSave.objectURL,
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
        artWork => artWork.id !== objectID
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
