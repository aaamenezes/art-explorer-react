'use client';

import ArtworkCard from '@/components/block/ArtworkCard';
import Grid from '@/components/container/Grid';
import { useFavorite } from '@/hooks/useFavorite';
import { FavoriteArtworkProps } from '@/types/favorite';
import { p } from 'motion/react-client';
import { useEffect, useState } from 'react';

export default function FavoritesGrid() {
  const [favoritesLoadade, setFavoritesLoaded] = useState(false);
  const [favorites, setFavorites] = useState<FavoriteArtworkProps[]>([]);

  const favoritesHook = useFavorite();

  useEffect(() => {
    setFavorites(favoritesHook.getAll());
    setFavoritesLoaded(true);
  }, []);

  if (favoritesLoadade && favorites.length === 0) {
    return <p>Você ainda não salvou nenhum favorito.</p>;
  }

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
