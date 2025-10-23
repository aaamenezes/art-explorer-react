import Button from '@/components/base/Button';
import { useArtworkStore } from '@/store/artworks';
import { useDepartamentsStore } from '@/store/departments';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Departments() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { allDepartaments } = useDepartamentsStore();
  const { loadAllArtWorksIDsFromApi, loadArtWorksByPage } = useArtworkStore();

  const handleFilterDepartment = useCallback(
    (departmentId: number) => {
      const params = new URLSearchParams(searchParams.toString());
      const paramQ = params.get('q');
      if (!paramQ) return;

      params.set('departmentId', departmentId.toString());
      router.push(`?${params.toString()}`);

      loadAllArtWorksIDsFromApi({ keywordSearch: paramQ, departmentId }).then(
        () => {
          loadArtWorksByPage(1);
        }
      );
    },
    [searchParams, router, loadAllArtWorksIDsFromApi, loadArtWorksByPage]
  );

  return (
    <>
      <h3 className="text-xl font-bold mb-4">Departamentos:</h3>
      <ul className="flex flex-row gap-2 flex-wrap mb-8">
        {allDepartaments.map(department => (
          <li key={department.displayName}>
            <Button
              variant="secondary"
              onClick={() => handleFilterDepartment(department.departmentId)}
            >
              {department.displayName}
            </Button>
          </li>
        ))}
      </ul>
    </>
  );
}
