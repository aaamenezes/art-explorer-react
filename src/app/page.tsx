'use client';

import AnimatedCube from '@/components/block/AnimatedCube';
import ArtWorkCard from '@/components/block/ArtWorkCard';
import NextPageButton from '@/components/block/NextPageButton';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';
import Filters from '@/components/section/Filters';
import ImageResizer from '@/components/section/ImageResizer/inde';
import { useArtworkStore } from '@/store/artworks';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const { error, hasMore, artWorksData, loading } = useArtworkStore();

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
        {params.has('q') && artWorksData.length === 0 && !loading && (
          <>
            <p>Nenhuma obra encontrada para essa busca.</p>
            <AnimatedCube />
          </>
        )}
      </div>

      {params.has('q') && artWorksData.length > 0 && (
        <>
          <ImageResizer />
          <Filters />
        </>
      )}

      <Grid>
        {artWorksData.map(artWork => {
          if (!artWork.primaryImageSmall) return null;
          return <ArtWorkCard key={artWork.objectID} artWorkData={artWork} />;
        })}
      </Grid>

      {error && <p className="text-red-700 dark:text-red-300">{error}</p>}

      {hasMore && artWorksData.length > 0 && <NextPageButton />}
    </Wrapper>
  );
}
