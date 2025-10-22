import Button from '@/components/base/Button';
import { useArtworkStore } from '@/store/artworks';
import { useCallback } from 'react';

export default function NextPageButton() {
  const { loading, loadArtWorksByPage, currentPage } = useArtworkStore();

  const handleNextPage = useCallback(() => {
    loadArtWorksByPage(currentPage + 1);
  }, [loadArtWorksByPage, currentPage]);

  return (
    <div className="flex justify-center my-10">
      <Button
        className="bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
        onClick={handleNextPage}
      >
        {loading ? 'Carregando...' : 'Carregar mais'}
      </Button>
    </div>
  );
}
