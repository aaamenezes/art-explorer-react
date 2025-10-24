'use client';

import ArtWorkCard from '@/components/block/ArtWorkCard';
import Grid from '@/components/container/Grid';
import { useFavorite } from '@/hooks/useFavorite';

export default function FavoritesGrid() {
  const favorites = useFavorite();

  return (
    <Grid>
      {favorites.getAll().map(favoriteArtWork => {
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
