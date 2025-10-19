import ArtWorkCard from '@/components/block/ArtWorkCard';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';
import { getArtWorksByPage } from './lib/metApi';

export default async function Home() {
  const artworks = await getArtWorksByPage('3');

  return (
    <Wrapper as="main">
      <h1 className="text-2xl font-bold my-8">
        Veja as obras do Metropolitan Museum of Art
      </h1>
      <Grid>
        {artworks.map(artWork => {
          if (!artWork.primaryImageSmall) return null;
          return <ArtWorkCard key={artWork.objectID} artWorkData={artWork} />;
        })}
      </Grid>
    </Wrapper>
  );
}
