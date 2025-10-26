import Button from '@/components/base/Button';
import { useArtworkStore } from '@/store/artworks';
import { useDepartamentsStore } from '@/store/departments';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Departments() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const { allDepartaments } = useDepartamentsStore();
  const { loadAllArtworksIDsFromApi, loadArtworksByPage } = useArtworkStore();

  const handleFilterDepartment = useCallback(
    (departmentId: number) => {
      const params = new URLSearchParams(searchParams.toString());
      const paramQ = params.get('q');
      if (!paramQ) return;

      params.set('departmentId', departmentId.toString());
      router.push(`?${params.toString()}`);

      loadAllArtworksIDsFromApi({ keywordSearch: paramQ, departmentId }).then(
        () => {
          loadArtworksByPage(1);
        }
      );
    },
    [searchParams, router, loadAllArtworksIDsFromApi, loadArtworksByPage]
  );

  return (
    <>
      <h3 className="text-xl font-bold mb-4">Departamentos:</h3>
      <ul className="flex flex-row gap-2 flex-wrap mb-8">
        {allDepartaments.map(department => (
          <li key={department.departmentId}>
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
