'use client';

import Button from '@/components/base/Button';
import Input from '@/components/base/Input';
import { Search as SearchIcon } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

export default function Search() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchKeyWord, setSearchKeyWord] = useState('');

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      /* UPDATE QUERY PARAMS */
      const params = new URLSearchParams(searchParams.toString());

      if (searchKeyWord.trim() === '') {
        params.delete('q');
      } else {
        params.set('q', searchKeyWord);
      }
      router.push(`?${params.toString()}`);

      /* puxar IDs dessa busca da API com o novo termo de busca */

      /* quando terminar usar .then() para disparar a busca dos dados dos primeiros 15 IDs recebidos */
    },
    [searchKeyWord, router, searchParams]
  );

  const handleChange = useCallback((value: string) => {
    setSearchKeyWord(value);
  }, []);

  return (
    <form
      className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus-within:bg-gray-800 pr-4 rounded-md transition focus-within:ring-2 ring-text"
      onSubmit={handleSubmit}
    >
      <Input
        value={searchKeyWord}
        onChange={handleChange}
        placeholder="Buscar obra de arte"
      />
      <Button type="submit">
        <SearchIcon className="text-black dark:text-white" />
      </Button>
    </form>
  );
}
