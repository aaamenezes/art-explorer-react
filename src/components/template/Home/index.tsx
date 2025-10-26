'use client';

import AnimatedCube from '@/components/block/AnimatedCube';
import ArtworkCard from '@/components/block/ArtworkCard';
import ConicGradientPointer from '@/components/block/ConicGradientPointer';
import ErrorIllustration from '@/components/block/ErrorIllustration';
import NextPageButton from '@/components/block/NextPageButton';
import Grid from '@/components/container/Grid';
import Filters from '@/components/section/Filters';
import ImageResizer from '@/components/section/ImageResizer/inde';
import { parseSearchParams } from '@/lib/parseSearchParams';
import { useArtworkStore } from '@/store/artworks';
import { useEffect } from 'react';
import { HomeTemplateProps } from './types';

export default function HomeTemplate({ searchParams }: HomeTemplateProps) {
  const keywordSearch = parseSearchParams(searchParams?.q);
  const hasKeywordSearch = Boolean(keywordSearch);

  const {
    error,
    hasMore,
    artworksData,
    loading,
    loadAllArtworksIDsFromApi,
    loadArtworksByPage,
  } = useArtworkStore();

  useEffect(() => {
    if (hasKeywordSearch) {
      if (artworksData.length > 0) return;

      const departmentId = parseSearchParams(searchParams?.departmentId);
      const artistOrCultureParam = parseSearchParams(
        searchParams?.artistOrCulture
      );
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
    <>
      {!hasKeywordSearch && (
        <>
          <p>
            Use a caixa de busca no topo da tela para encontrar obras
            específicas.
          </p>
          <ConicGradientPointer />
        </>
      )}
      {hasKeywordSearch && loading && (
        <>
          <p>Carregando obras de arte...</p>
          <AnimatedCube />
        </>
      )}
      {hasKeywordSearch && !loading && artworksData.length === 0 && (
        <>
          <p>Nenhuma obra encontrada para essa busca. Tente novamente.</p>
          <div className="flex justify-center">
            <ErrorIllustration />
          </div>
        </>
      )}

      {hasKeywordSearch && !loading && artworksData.length > 0 && (
        <>
          <ImageResizer />
          <Filters />
        </>
      )}

      {hasKeywordSearch && artworksData.length > 0 && (
        <Grid>
          {artworksData.map(artwork => {
            if (!artwork.primaryImageSmall) return null;
            return <ArtworkCard key={artwork.objectID} artworkData={artwork} />;
          })}
        </Grid>
      )}

      {error && <p className="text-red-700 dark:text-red-300">{error}</p>}

      {hasMore && artworksData.length > 0 && <NextPageButton />}
    </>
  );
}
