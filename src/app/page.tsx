'use client';

import ArtWorkCard from '@/components/block/ArtWorkCard';
import NextPageButton from '@/components/block/NextPageButton';
import Filters from '@/components/section/Filters';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';
import { useArtworkStore } from '@/store/artworks';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams.toString());

  const { error, hasMore, artWorksData } = useArtworkStore();

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

      {params.has('q') && artWorksData.length > 0 && <Filters />}

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
