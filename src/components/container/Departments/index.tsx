import Button from '@/components/base/Button';
import { useDepartamentsStore } from '@/store/departments';
import { useEffect } from 'react';

export default function Departments() {
  const { allDepartaments, loadAllDepartamentsFromApi } =
    useDepartamentsStore();

  useEffect(() => {
    loadAllDepartamentsFromApi();
  }, [loadAllDepartamentsFromApi]);

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Principais departamentos</h2>
      <ul className="flex flex-row gap-2 flex-wrap">
        {allDepartaments.map(department => (
          <li key={department.displayName}>
            <Button className="inline-block p-2 border border-neutral-300 dark:border-neutral-700 rounded-md text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors">
              {department.displayName}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
