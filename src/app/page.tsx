'use client';

import AnimatedCube from '@/components/block/AnimatedCube';
import ArtworkCard from '@/components/block/ArtworkCard';
import ConicGradientPointer from '@/components/block/ConicGradientPointer';
import NextPageButton from '@/components/block/NextPageButton';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';
import Filters from '@/components/section/Filters';
import ImageResizer from '@/components/section/ImageResizer/inde';
import { useArtworkStore } from '@/store/artworks';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const {
    error,
    hasMore,
    artworksData,
    loading,
    loadAllArtworksIDsFromApi,
    loadArtworksByPage,
  } = useArtworkStore();

  useEffect(() => {
    if (params.has('q')) {
      if (artworksData.length > 0) return;

      const keywordSearch = params.get('q') || '';
      const departmentId = params.get('departmentId') || undefined;
      const artistOrCultureParam = params.get('artistOrCulture');
      const artistOrCulture =
        artistOrCultureParam === 'true'
          ? true
          : artistOrCultureParam === 'false'
          ? false
          : undefined;

      loadAllArtworksIDsFromApi({
        keywordSearch,
        departmentId: departmentId ? parseInt(departmentId, 10) : undefined,
        artistOrCulture,
      }).then(() => {
        loadArtworksByPage(1);
      });
    }
  }, []);

  return (
    <Wrapper as="main">
      <div className="my-8">
        <h1 className="text-3xl font-bold mb-4">
          Veja as obras do Metropolitan Museum of Art
        </h1>
        {!params.has('q') && (
          <>
            <p>
              Use a caixa de busca no topo da tela para encontrar obras
              específicas.
            </p>
            <ConicGradientPointer />
          </>
        )}
        {params.has('q') && loading && (
          <>
            <p>Carregando obras de arte...</p>
            <AnimatedCube />
          </>
        )}
        {params.has('q') && !loading && artworksData.length === 0 && (
          <>
            <p>Nenhuma obra encontrada para essa busca.</p>
          </>
        )}
      </div>

      {params.has('q') && !loading && artworksData.length > 0 && (
        <>
          <ImageResizer />
          <Filters />
        </>
      )}

      {params.has('q') && artworksData.length > 0 && (
        <Grid>
          {artworksData.map(artwork => {
            if (!artwork.primaryImageSmall) return null;
            return <ArtworkCard key={artwork.objectID} artworkData={artwork} />;
          })}
        </Grid>
      )}

      {error && <p className="text-red-700 dark:text-red-300">{error}</p>}

      {hasMore && artworksData.length > 0 && <NextPageButton />}
    </Wrapper>
  );
}
