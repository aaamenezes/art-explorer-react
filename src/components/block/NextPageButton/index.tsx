import Button from '@/components/base/Button';
import { useArtworkStore } from '@/store/artworks';
import { ArrowBigDownDash, LoaderPinwheel } from 'lucide-react';
import { useCallback } from 'react';

export default function NextPageButton() {
  const { loading, loadArtworksByPage, currentPage } = useArtworkStore();

  const handleNextPage = useCallback(() => {
    loadArtworksByPage(currentPage + 1);
  }, [loadArtworksByPage, currentPage]);

  return (
    <div className="flex justify-center my-10">
      <Button variant="primary" onClick={handleNextPage}>
        {loading ? (
          <>
            <LoaderPinwheel className="w-5 h-5 animate-spin" />
            Carregando...
          </>
        ) : (
          <>
            <ArrowBigDownDash className="w-5 h-5 animate-bounce" />
            Carregar mais
          </>
        )}
      </Button>
    </div>
  );
}
