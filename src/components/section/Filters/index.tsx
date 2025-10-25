import Button from '@/components/base/Button';
import { useDepartamentsStore } from '@/store/departments';
import { ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import ArtistOrCulture from './ArtistOrCulture';
import Departments from './Departments';

export default function Filters() {
  const [open, setOpen] = useState(false);

  const { loading, allDepartaments, loadAllDepartamentsFromApi } =
    useDepartamentsStore();

  useEffect(() => {
    loadAllDepartamentsFromApi();
  }, [loadAllDepartamentsFromApi]);

  if (loading) {
    return (
      <h2 className="text-2xl font-bold mb-4">Carregando departamentos...</h2>
    );
  }

  if (allDepartaments.length === 0) {
    return (
      <h2 className="text-2xl font-bold mb-4">
        Nenhum departamento encontrado.
      </h2>
    );
  }

  return (
    <div className="my-8">
      <div className="flex justify-end">
        <Button variant="secondary" onClick={() => setOpen(!open)}>
          Filtros <ChevronDown className="w-4 h-4" />
        </Button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-800 md:max-h-500 opacity-100 mt-2' : 'max-h-0 opacity-0'
        } border-b-1 border-b-gray-300 dark:border-b-gray-600 rounded-md`}
      >
        <div className="p-4">
          <Departments />
          <ArtistOrCulture />
        </div>
      </div>
    </div>
  );
}
