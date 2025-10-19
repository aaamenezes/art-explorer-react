'use client';

import { getFavoritesArtWorks } from '@/lib/favorites';
import ArtWorkCard from '@/components/block/ArtWorkCard';
import Grid from '@/components/container/Grid';

export default function FavoritesGrid() {
  const favoritesArtworks = getFavoritesArtWorks();

  return (
    <Grid>
      {favoritesArtworks.map(favoriteArtWork => {
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
