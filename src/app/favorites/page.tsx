import ArtWorkCard from '@/components/block/ArtWorkCard';
import Grid from '@/components/container/Grid';
import Wrapper from '@/components/container/Wrapper';

export default function Home() {
  return (
    <Wrapper as="main">
      <h1 className="text-2xl font-bold my-8">Veja suas obras favoritas!</h1>
      <Grid>
        <ArtWorkCard objectID={418425} />
        <ArtWorkCard objectID={418425} />
        <ArtWorkCard objectID={418425} />
        <ArtWorkCard objectID={418425} />
      </Grid>
    </Wrapper>
  );
}
