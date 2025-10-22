import Button from '@/components/base/Button';
import { useArtworkStore } from '@/store/artworks';
import { useDepartamentsStore } from '@/store/departments';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Departments() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [open, setOpen] = useState(false);

  const { loading, allDepartaments, loadAllDepartamentsFromApi } =
    useDepartamentsStore();

  const { loadAllArtWorksIDsFromApi, loadArtWorksByPage } = useArtworkStore();

  const handleFilterDepartment = useCallback(
    (departmentId: number) => {
      const params = new URLSearchParams(searchParams.toString());
      const paramQ = params.get('q');
      if (!paramQ) return;

      params.set('departmentId', departmentId.toString());
      router.push(`?${params.toString()}`);

      loadAllArtWorksIDsFromApi(paramQ, departmentId).then(() => {
        loadArtWorksByPage(1);
      });
    },
    [searchParams, router, loadAllArtWorksIDsFromApi, loadArtWorksByPage]
  );

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
          Filtros
        </Button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
        } bg-gray-50 dark:bg-gray-900 rounded-md`}
      >
        <div className="p-4">
          <ul className="flex flex-row gap-2 flex-wrap">
            {allDepartaments.map(department => (
              <li key={department.displayName}>
                <Button
                  variant="secondary"
                  onClick={() =>
                    handleFilterDepartment(department.departmentId)
                  }
                >
                  {department.displayName}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
