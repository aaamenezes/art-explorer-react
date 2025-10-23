'use client';

import { LOCAL_STORAGE_FAVORITES_KEY } from '@/data/constants';
import { ArtWorkProps } from '@/types/artwork';
import { FavoriteArtWorkProps } from '@/types/favorite';

export function addArtWorkToFavorites(artWorkToSave: ArtWorkProps) {
  if (isArtWorkAlreadyFavorited(artWorkToSave.objectID)) return;

  const favorites = getFavoritesArtWorks();

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
}

export function getFavoritesArtWorks(): FavoriteArtWorkProps[] {
  if (typeof window === 'undefined') return [];

  const favoritesStringOrNull = window.localStorage.getItem(
    LOCAL_STORAGE_FAVORITES_KEY
  );
  if (!favoritesStringOrNull) return [];

  return JSON.parse(favoritesStringOrNull);
}

export function isArtWorkAlreadyFavorited(objectID: number) {
  const favorites = getFavoritesArtWorks();

  const isArtWorkExistsInFavorites = favorites.find(
    artWork => artWork.id === objectID
  );

  return Boolean(isArtWorkExistsInFavorites);
}

export function removeArtWorkFromFavorites(objectID: number) {
  const favorites = getFavoritesArtWorks();

  const updatedFavorites = favorites.filter(artWork => artWork.id !== objectID);

  window.localStorage.setItem(
    LOCAL_STORAGE_FAVORITES_KEY,
    JSON.stringify(updatedFavorites)
  );
}
