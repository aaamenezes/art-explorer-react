'use client';

import Button from '@/components/base/Button';
import Link from '@/components/base/Link';
import ArtWorkCard from '@/components/block/ArtWorkCard';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';
import { useArtworkStore } from '@/store/artworks';
import { useDepartamentsStore } from '@/store/departments';
import { useCallback, useEffect } from 'react';

export default function Home() {
  const { allDepartaments, loadAllDepartamentsFromApi } =
    useDepartamentsStore();

  const {
    loading,
    hasMore,
    error,
    loadAllArtWorksIDsFromApi,
    loadArtWorksByPage,
    allArtWorksIDs,
    artWorksData,
    currentPage,
  } = useArtworkStore();

  const handleNextPage = useCallback(() => {
    loadArtWorksByPage(currentPage + 1);
  }, [loadArtWorksByPage, currentPage]);

  useEffect(() => {
    if (allArtWorksIDs.length === 0)
      loadAllArtWorksIDsFromApi('painting').then(() => {
        loadArtWorksByPage(1);
      });
  }, [allArtWorksIDs.length, loadAllArtWorksIDsFromApi, loadArtWorksByPage]);

  useEffect(() => {
    loadAllDepartamentsFromApi();
  }, [loadAllDepartamentsFromApi]);

  return (
    <Wrapper as="main">
      <div className="my-8">
        <h1 className="text-3xl font-bold">
          Veja as obras do Metropolitan Museum of Art
        </h1>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold mb-4">Principais departamentos</h2>
        <ul className="flex flex-row gap-2 flex-wrap">
          {allDepartaments.map(department => (
            <li key={department.displayName}>
              <Link
                href="#"
                className="inline-block p-2 border border-neutral-300 dark:border-neutral-700 rounded-xl text-sm hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
              >
                {department.displayName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Grid>
        {artWorksData.map(artWork => {
          if (!artWork.primaryImageSmall) return null;
          return <ArtWorkCard key={artWork.objectID} artWorkData={artWork} />;
        })}
      </Grid>

      {error && <p className="text-red-700 dark:text-red-300">{error}</p>}

      {hasMore && (
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
