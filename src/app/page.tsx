import ArtCard from '@/components/block/ArtCard';
import Wrapper from '../components/container/Wrapper';
import Grid from '@/components/container/Grid';

export default function Home() {
  return (
    <Wrapper as="main">
      <h1 className="text-2xl font-bold my-8">
        Veja as obras do Metropolitan Museum of Art
      </h1>
      <Grid>
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
      </Grid>
    </Wrapper>
  );
}
