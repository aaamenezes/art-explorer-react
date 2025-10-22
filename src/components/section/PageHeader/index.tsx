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
    <header className="flex justify-between items-center container mx-auto p-4 border-b-1 border-b-gray-300 dark:border-b-gray-600">
      <Link href="/" onClick={handleClick}>
        <Logo />
      </Link>
      <Search />
      <Link href="/favorites" className="flex items-center gap-2 px-4 py-2">
        <Star />
        Favoritos
      </Link>
    </header>
  );
}
