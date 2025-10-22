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
      <Button variant="primary" onClick={handleNextPage}>
        {loading ? 'Carregando...' : 'Carregar mais'}
      </Button>
    </div>
  );
}
