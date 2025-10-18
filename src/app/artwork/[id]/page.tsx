import Wrapper from '@/components/container/Wrapper';

export default function Home() {
  return (
    <Wrapper as="main">
      <h1 className="text-2xl font-bold my-8">Detalhes da obra de ID 123!</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </Wrapper>
  );
}
