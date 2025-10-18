import ArtCard from '@/components/block/ArtCard';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';

export default function Home() {
  return (
    <Wrapper as="main">
      <h1 className="text-2xl font-bold my-8">Veja suas obras favoritas!</h1>
      <Grid>
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
      </Grid>
    </Wrapper>
  );
}
