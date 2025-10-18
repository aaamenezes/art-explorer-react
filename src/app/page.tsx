import ArtWorkCard from '@/components/block/ArtWorkCard';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';
import { getArtWorksByPage } from './lib/met-api';

export default async function Home() {
  const artworks = await getArtWorksByPage('3');

  return (
    <Wrapper as="main">
      <h1 className="text-2xl font-bold my-8">
        Veja as obras do Metropolitan Museum of Art
      </h1>
      <Grid>
        {artworks.map((id: number) => (
          <p>{id}</p>
        ))}
        <ArtWorkCard objectID={418425} />
      </Grid>
    </Wrapper>
  );
}
