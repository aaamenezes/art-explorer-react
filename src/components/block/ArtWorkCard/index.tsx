'use client';

import Button from '@/components/base/Button';
import Image from '@/components/base/Image';
import Link from '@/components/base/Link';
import Figure from '@/components/block/Figure';
import { useFavorite } from '@/hooks/useFavorite';
import { buildArtworkAltText } from '@/lib/buildArtworkAltText';
import { useImagesStore } from '@/store/images';
import { Star } from 'lucide-react';
import { useCallback, useState } from 'react';
import { ArtworkCardProps } from './types';

export default function ArtworkCard({ artworkData }: ArtworkCardProps) {
  const favorites = useFavorite();

  const [currentArtworkIsFavorited, setCurrentArtworkIsFavorited] = useState(
    favorites.isFavorited(artworkData.objectID)
  );

  const handleFavorite = useCallback(() => {
    if (currentArtworkIsFavorited) {
      favorites.remove(artworkData.objectID);
      setCurrentArtworkIsFavorited(false);
      return;
    }

    favorites.add(artworkData);
    setCurrentArtworkIsFavorited(true);
  }, [currentArtworkIsFavorited, favorites, artworkData]);

  const artistName = artworkData.artistDisplayName.replace(/ /g, '+');

  const { proportionClass } = useImagesStore();

  return (
    <article className="relative rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <Link href={`/artwork/${artworkData.objectID}`} className="group">
        <Figure figcaption={artworkData.title}>
          <div className="overflow-hidden">
            <Image
              src={artworkData.primaryImageSmall}
              alt={buildArtworkAltText(artworkData)}
              className={`group-hover:scale-120 duration-1000 ${proportionClass} object-cover`}
            />
          </div>
        </Figure>
      </Link>
      <div className="flex justify-between gap-1 px-4 pb-4 text-sm text-gray-400 dark:text-gray-500">
        <p>
          <Link
            href={`https://www.metmuseum.org/art/collection/search?q=${artistName}&searchField=ArtistCulture`}
            className="hover:underline"
            external
          >
            {artworkData.artistDisplayName}
          </Link>
        </p>
        <p>{artworkData.objectDate}</p>
      </div>
      <Button
        onClick={handleFavorite}
        className="absolute top-1 right-1 bg-white/40 hover:bg-white dark:bg-black/40 dark:hover:bg-black transition"
        aria-label={
          currentArtworkIsFavorited
            ? 'Remover dos favoritos'
            : 'Adicionar aos favoritos'
        }
        noAnimate
      >
        <Star className={currentArtworkIsFavorited ? 'fill-current' : ''} />
      </Button>
    </article>
  );
}
