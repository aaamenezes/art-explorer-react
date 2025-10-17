'use client';

import { useCallback } from 'react';
import Button from '../../base/Button';
import Input from '../../base/Input';
import { Search as SearchIcon } from 'lucide-react';

export default function Search() {
  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    console.log('submit');
  }, []);

  return (
    <form
      className="flex items-center gap-2 hover:bg-gray-200 focus-within:bg-gray-200 dark:hover:bg-gray-800 dark:focus-within:bg-gray-800 pr-4 rounded-md transition focus-within:ring-2 ring-text"
      onSubmit={handleSubmit}
    >
      <Input placeholder="Buscar obra de arte" />
      <Button type="submit">
        <SearchIcon className="text-black dark:text-white" />
      </Button>
    </form>
  );
}
