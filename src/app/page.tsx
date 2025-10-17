import ArtCard from '@/components/block/ArtCard';
import Wrapper from '../components/container/Wrapper';
import Grid from '@/components/container/Grid';

export default function Home() {
  return (
    <Wrapper as="main">
      <Grid>
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
        <ArtCard objectID={418425} />
      </Grid>
    </Wrapper>
  );
}
