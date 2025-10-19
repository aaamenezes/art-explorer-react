'use client';

import { buildArtWorkAltText } from '@/app/lib/buildArtWorkAltText';
import {
  addArtWorkToFavorites,
  isArtWorkAlreadyFavorited,
  removeArtWorkFromFavorites,
} from '@/app/lib/favorites';
import Button from '@/components/base/Button';
import Image from '@/components/base/Image';
import Link from '@/components/base/Link';
import Figure from '@/components/block/Figure';
import { Star } from 'lucide-react';
import { useCallback, useState } from 'react';
import { ArtWorkCardProps } from './types';

export default function ArtWorkCard({ artWorkData }: ArtWorkCardProps) {
  const [currentArtWorkIsFavorited, setCurrentArtWorkIsFavorited] = useState(
    isArtWorkAlreadyFavorited(artWorkData.objectID)
  );

  const handleFavorite = useCallback(() => {
    if (currentArtWorkIsFavorited) {
      removeArtWorkFromFavorites(artWorkData.objectID);
      setCurrentArtWorkIsFavorited(false);
      return;
    }

    addArtWorkToFavorites(artWorkData);
    setCurrentArtWorkIsFavorited(true);
  }, [currentArtWorkIsFavorited, artWorkData]);

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
          <Link href="#" className="hover:underline">
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
