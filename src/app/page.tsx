'use client';

import Button from '@/components/base/Button';
import ArtWorkCard from '@/components/block/ArtWorkCard';
import Departments from '@/components/container/Departments';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';
import { useArtworkStore } from '@/store/artworks';
import { useSearchParams } from 'next/navigation';
import { useCallback } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const {
    loading,
    error,
    hasMore,
    loadArtWorksByPage,
    artWorksData,
    currentPage,
  } = useArtworkStore();

  const handleNextPage = useCallback(() => {
    loadArtWorksByPage(currentPage + 1);
  }, [loadArtWorksByPage, currentPage]);

  return (
    <Wrapper as="main">
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-4">
          Veja as obras do Metropolitan Museum of Art
        </h1>
        {!params.has('q') && (
          <p>
            Use a caixa de busca no topo da tela para encontrar obras
            específicas.
          </p>
        )}
      </div>

      {params.has('q') && artWorksData.length > 0 && <Departments />}

      <Grid>
        {artWorksData.map(artWork => {
          if (!artWork.primaryImageSmall) return null;
          return <ArtWorkCard key={artWork.objectID} artWorkData={artWork} />;
        })}
      </Grid>

      {error && <p className="text-red-700 dark:text-red-300">{error}</p>}

      {hasMore && params.has('q') && artWorksData.length > 0 && (
        <div className="flex justify-center my-10">
          <Button
            className="bg-neutral-800 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-800 hover:bg-neutral-700 dark:hover:bg-neutral-200 transition-colors"
            onClick={handleNextPage}
          >
            {loading ? 'Carregando...' : 'Carregar mais'}
          </Button>
        </div>
      )}
    </Wrapper>
  );
}
