'use client';

import ArtWorkCard from '@/components/block/ArtWorkCard';
import Grid from '@/components/container/Grid';
import { useFavorite } from '@/hooks/useFavorite';
import { FavoriteArtWorkProps } from '@/types/favorite';
import { useEffect, useState } from 'react';

export default function FavoritesGrid() {
  const [favorites, setFavorites] = useState<FavoriteArtWorkProps[]>([]);

  const favoritesHook = useFavorite();

  useEffect(() => {
    setFavorites(favoritesHook.getAll());
  }, []);

  return (
    <Grid>
      {favorites.map(favoriteArtWork => {
        if (!favoriteArtWork.data.primaryImageSmall) return null;

        return (
          <ArtWorkCard
            key={favoriteArtWork.data.objectID}
            artWorkData={favoriteArtWork.data}
          />
        );
      })}
    </Grid>
  );
}
