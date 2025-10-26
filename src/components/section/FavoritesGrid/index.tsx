'use client';

import ArtworkCard from '@/components/block/ArtworkCard';
import Grid from '@/components/container/Grid';
import { useFavorite } from '@/hooks/useFavorite';
import { FavoriteArtworkProps } from '@/types/favorite';
import { useEffect, useState } from 'react';

export default function FavoritesGrid() {
  const [favorites, setFavorites] = useState<FavoriteArtworkProps[]>([]);

  const favoritesHook = useFavorite();

  useEffect(() => {
    setFavorites(favoritesHook.getAll());
  }, []);

  return (
    <Grid>
      {favorites.map(favoriteArtwork => {
        if (!favoriteArtwork.data.primaryImageSmall) return null;

        return (
          <ArtworkCard
            key={favoriteArtwork.data.objectID}
            artworkData={favoriteArtwork.data}
          />
        );
      })}
    </Grid>
  );
}
