'use client';

import Button from '@/components/base/Button';
import Input from '@/components/base/Input';
import { useArtworkStore } from '@/store/artworks';
import { Search as SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchKeyword, setSearchKeyword] = useState('');

  const { loadAllArtWorksIDsFromApi, loadArtWorksByPage } = useArtworkStore();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const params = new URLSearchParams(searchParams.toString());

      if (searchKeyword.trim() === '') {
        params.delete('q');
      } else {
        params.set('q', searchKeyword);
      }
      router.push(`?${params.toString()}`);

      loadAllArtWorksIDsFromApi(searchKeyword).then(() => {
        loadArtWorksByPage(1);
      });
    },
    [
      searchKeyword,
      router,
      searchParams,
      loadAllArtWorksIDsFromApi,
      loadArtWorksByPage,
    ]
  );

  const handleChange = useCallback((value: string) => {
    setSearchKeyword(value);
  }, []);

  return (
    <form
      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus-within:bg-gray-800 pr-4 rounded-md transition focus-within:ring-2 ring-text"
      onSubmit={handleSubmit}
    >
      <Input
        value={searchKeyword}
        onChange={handleChange}
        placeholder="Buscar obra de arte"
      />
      <Button type="submit">
        <SearchIcon className="text-black dark:text-white" />
      </Button>
    </form>
  );
}
