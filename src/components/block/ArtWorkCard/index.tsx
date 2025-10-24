'use client';

import Button from '@/components/base/Button';
import Image from '@/components/base/Image';
import Link from '@/components/base/Link';
import Figure from '@/components/block/Figure';
import { useFavorite } from '@/hooks/useFavorite';
import { buildArtWorkAltText } from '@/lib/buildArtWorkAltText';
import { Star } from 'lucide-react';
import { useCallback, useState } from 'react';
import { ArtWorkCardProps } from './types';

export default function ArtWorkCard({ artWorkData }: ArtWorkCardProps) {
  const favorites = useFavorite();

  const [currentArtWorkIsFavorited, setCurrentArtWorkIsFavorited] = useState(
    favorites.isFavorited(artWorkData.objectID)
  );

  const handleFavorite = useCallback(() => {
    if (currentArtWorkIsFavorited) {
      favorites.remove(artWorkData.objectID);
      setCurrentArtWorkIsFavorited(false);
      return;
    }

    favorites.add(artWorkData);
    setCurrentArtWorkIsFavorited(true);
  }, [currentArtWorkIsFavorited, favorites, artWorkData]);

  const artistName = artWorkData.artistDisplayName.replace(/ /g, '+');

  return (
    <article className="relative rounded-md overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <Link href={`/artwork/${artWorkData.objectID}`} className="group">
        <Figure figcaption={artWorkData.title}>
          <div className="overflow-hidden">
            <Image
              src={artWorkData.primaryImageSmall}
              alt={buildArtWorkAltText(artWorkData)}
              className="group-hover:scale-120 duration-2000"
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
            {artWorkData.artistDisplayName}
          </Link>
        </p>
        <p>{artWorkData.objectDate}</p>
      </div>
      <Button
        onClick={handleFavorite}
        className="absolute top-1 right-1 bg-white/40 hover:bg-white dark:bg-black/40 dark:hover:bg-black transition"
      >
        <Star className={currentArtWorkIsFavorited ? 'fill-current' : ''} />
      </Button>
    </article>
  );
}
