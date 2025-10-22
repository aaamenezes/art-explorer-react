import Button from '@/components/base/Button';
import { useArtworkStore } from '@/store/artworks';
import { useDepartamentsStore } from '@/store/departments';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';

export default function Departments() {
  const router = useRouter();
  const searchParams = useSearchParams();

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
      <h2 className="text-2xl font-bold mb-4">Principais departamentos</h2>
      <ul className="flex flex-row gap-2 flex-wrap">
        {allDepartaments.map(department => (
          <li key={department.displayName}>
            <Button
              className="inline-block p-2 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              onClick={() => handleFilterDepartment(department.departmentId)}
            >
              {department.displayName}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
