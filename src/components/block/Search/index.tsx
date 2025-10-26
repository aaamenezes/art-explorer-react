'use client';

import Button from '@/components/base/Button';
import Input from '@/components/base/Input';
import { useArtworkStore } from '@/store/artworks';
import { Search as SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';
import { SearchProps } from './types';

export default function Search({ className }: SearchProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keywordSearch, setKeywordSearch] = useState('');

  const { loadAllArtworksIDsFromApi, loadArtworksByPage } = useArtworkStore();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const params = new URLSearchParams(searchParams.toString());

      if (keywordSearch.trim() === '') {
        params.delete('q');
        params.delete('departmentId');
        params.delete('artistOrCulture');
      } else {
        params.set('q', keywordSearch);
      }
      params.delete('departmentId');
      router.push(`/?${params.toString()}`);

      loadAllArtworksIDsFromApi({ keywordSearch }).then(() => {
        loadArtworksByPage(1);
      });
    },
    [
      keywordSearch,
      router,
      searchParams,
      loadAllArtworksIDsFromApi,
      loadArtworksByPage,
    ]
  );

  const handleChange = useCallback((value: string) => {
    setKeywordSearch(value);
  }, []);

  return (
    <form
      className={`flex justify-between items-center gap-2 p-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus-within:bg-gray-800 pr-4 rounded-md transition focus-within:ring-2 ring-text ${className}`}
      onSubmit={handleSubmit}
    >
      <Input
        value={keywordSearch}
        onChange={handleChange}
        placeholder="Buscar obra de arte"
      />
      <Button
        variant="secondary"
        type="submit"
        aria-label="Realizar busca"
        tabIndex={-1}
        transparent
      >
        <SearchIcon className="text-black dark:text-white" />
      </Button>
    </form>
  );
}
