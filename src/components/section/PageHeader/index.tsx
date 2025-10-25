'use client';

import Link from '@/components/base/Link';
import Logo from '@/components/base/Logo';
import Search from '@/components/block/Search';
import { useArtworkStore } from '@/store/artworks';
import { Star } from 'lucide-react';
import { useCallback } from 'react';

export default function PageHeader() {
  const { reset } = useArtworkStore();

  const handleClick = useCallback(() => {
    reset();
  }, [reset]);

  return (
    <header className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-between container mx-auto p-4 border-b-1 border-b-gray-300 dark:border-b-gray-600">
      <Link href="/" onClick={handleClick} className="order-1">
        <Logo />
      </Link>
      <Link
        href="/favorites"
        className="flex items-center justify-end gap-2 px-4 py-2 order-2 md:order-3"
      >
        <Star />
        Favoritos
      </Link>
      <Search className="col-span-2 order-3 md:order-2" />
    </header>
  );
}
