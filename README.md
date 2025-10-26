# Metropolitan Museum of Art

[Link da aplicação em produção](https://art-explorer-react-ashy.vercel.app/)

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de desenvolvedor Front-end na Jaya Tech.

A aplicação é um site que exibe obras de arte do Metropolitan Museum of Art por meio da [API oficial](https://metmuseum.github.io/).

É possível pesquisar obras de arte com imagens, filtrar por departamento, buscar apenas artistas ou culturas e visualizar os detalhes de cada obra, com um link para a página oficial.

Por fim, o usuário pode favoritar as obras que mais gostou e ver todas elas reunidas na página de favoritos.

# Table of Contents

- [Metropolitan Museum of Art](#metropolitan-museum-of-art)
- [Table of Contents](#table-of-contents)
- [Apresentação](#apresentação)
- [Como rodar o projeto](#como-rodar-o-projeto)
  - [Clone do repositório](#clone-do-repositório)
  - [Gerenciador de pacotes](#gerenciador-de-pacotes)
  - [Iniciar projeto](#iniciar-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
  - [Next.JS](#nextjs)
  - [React](#react)
  - [Typescript](#typescript)
  - [Tailwind CSS](#tailwind-css)
  - [ZOD](#zod)
  - [Zustand](#zustand)
  - [Axios](#axios)
  - [Jest / React Testing Library](#jest--react-testing-library)
  - [Framer Motion](#framer-motion)
  - [Lucide React](#lucide-react)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
- [Estrutura de pastas](#estrutura-de-pastas)
  - [Raiz `./`](#raiz-)
  - [Rotas `./src/app`](#rotas-srcapp)
  - [Componentes `./src/components`](#componentes-srccomponents)
  - [Dados `./src/data`](#dados-srcdata)
  - [Hooks `./src/hooks`](#hooks-srchooks)
  - [Utilitários `./src/lib`](#utilitários-srclib)
  - [Estado global`./src/store`](#estado-globalsrcstore)
  - [Tipagem `./src/types`](#tipagem-srctypes)
- [Testes](#testes)
- [Aplicação em ação](#aplicação-em-ação)

# Apresentação

# Como rodar o projeto

## Clone do repositório

Basta executar o comando abaixo no terminal para clonar via HTTP:

```bash
git clone https://github.com/aaamenezes/art-explorer-react.git
```

Ou via SSH:

```bash
git clone git@github.com:aaamenezes/art-explorer-react.git
```

## Gerenciador de pacotes

Esse projeto utiliza o [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) como gerenciador de pacotes.

As versões utilizadas foram:

- NPM `v11.4.2`
- Node `v24.4.1`.

Agora entre na pasta do projeto e instale as dependências:

```bash
cd art-explorer-react

npm install
```

## Iniciar projeto

Assim como consta nos scripts do `package.json`, basta executar o comando abaixo para iniciar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

https://github.com/user-attachments/assets/16415153-25b2-4f61-a7b9-2819773e4301

Acesse seu navegador na seguinte URL:

- [http://localhost:3000](http://localhost:3000)

# Tecnologias utilizadas

## Next.JS

Principal framework para criar as rotas automáticas, renderizar no servidor, lidar com redirect e manipulação de parâmetros de URL, otimizar desempenho e facilitar o deploy.

[Site oficial](https://nextjs.org/)

## React

Biblioteca de front-end para criação dos componente e da interface completa.

[Site oficial](https://react.dev/)

## Typescript

Superset Javascript que adiciona tipagem ao desenvolvimento.

[Site oficial](https://www.typescriptlang.org/)

## Tailwind CSS

Estilização dos componentes.

[Site oficial](https://tailwindcss.com/)

## ZOD

Valida dados recebidos da API em tempo de execução, evitando erros que passariam despercebidos pelo TypeScript, já que ele valida apenas em tempo de desenvolvimento.

[Site oficial](https://zod.dev/)

## Zustand

Gerenciador de estado global da aplicação. Melhor performance com relação à Context API.

[Site oficial](https://zustand-demo.pmnd.rs/)

## Axios

Biblioteca para requisições à API do Metropolitan Museum of Art. Armazenar URL base comum em todos os requests e receber parâmetros facilmente em formato de objeto.

[Site oficial](https://axios-http.com/ptbr/docs/intro)

## Jest / React Testing Library

Criação de testes de unidade e de integração.

[Site oficial](https://jestjs.io/)

## Framer Motion

Biblioteca para fazer animações visuais e melhorar a experiência do usuário.

[Site oficial](https://motion.dev/)

## Lucide React

Biblioteca de ícones para ilustrar respostas e ações na tela. Possui fácil aplicação já que é integrado ao React.

[Site oficial](https://lucide.dev/guide/packages/lucide-react)

## ESLint

Resolver problemas de Lint.

[Site oficial](https://eslint.org/)

## Prettier

Formatar código.

[Site oficial](https://prettier.io/)

# Estrutura de pastas

Aqui vou explicar a função das principais pastas do projeto:

## Raiz `./`

Aqui ficam os principais arquivos de configuração:

- `./.prettierrc`
- `./jest.config.ts`
- `./next.config.ts`
- `./package.json`
- `./tsconfig.json`
- `./src`

A pasta `./src` é a principal pasta do projeto. Veja abaixo mais detalhes sobre ela.

## Rotas `./src/app`

Arquivos das rotas da aplicação:

- `./src/app/page.tsx`: página home
- `./src/app/artwork/[id]/page.tsx`: página de detalhes de uma obra
- `./src/app/favorites/page.tsx`: página de favoritos

## Componentes `./src/components`

Componentes utilizados nas páginas, organizados em pastas com diferentes responsabilidades, semelhante ao [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/):

- `./src/components/base`: semelhante aos átomos do Atomic Design, são componentes primitivos indivisíveis que não são formados pela junção de outros componentes
- `./src/components/block`: um agrupamento de componentes base
- `./src/components/container`: um agrupamento de componentes base e block que ocupam largura total em uma página
- `./src/components/section`: semelhante ao container, porém o componente section é necessariamente uma seção da página, ou seja, é filho direto da tag `<main>`. Pode conter componentes container dentro
- `./src/components/template`: componente que reúne tudo ou quase tudo de uma página. Usado para reuso em mais de uma rota ou conter recursos que não se recomenda que se deixe no arquivo `page.tsx` da pasta `./src/app`.

## Dados `./src/data`

Essa pasta armazena dados fixos usados na aplicação.

No momento, foi utilizado apenas para o `constants.ts`.

## Hooks `./src/hooks`

Foi criado apenas o `useFavorite()` para lidar com os favoritos dentro do `window.localStorage`.

## Utilitários `./src/lib`

Semelhante a uma pasta `utils`, ela contém funções utilitárias importantes usadas em várias partes da aplicação:

- `./src/lib/handleRequestError`: manipular e formatar erro das requisições
- `./src/lib/metApi/*.ts`: busca IDs das obras, detalhes de uma obra e departamentos
- `./src/lib/buildArtworkAltText.ts`: monta o alt text das imagens
- `./src/lib/parseSearchParams.ts`: centraliza instruções de parse dos parâmetros de URL

## Estado global`./src/store`

Estados globais da aplicação. Contém informações e funções (para alterar as informações) de:

- `./src/store/artworks.ts`: obras de arte
- `./src/store/departments.ts`: departamentos
- `./src/store/images`: essa store foi utilizada apenas para armazenar informações de orientação das imagens

## Tipagem `./src/types`

Tipagem de informações globais da aplicação. Quando um tipo se referia apenas a um componente, o arquivo correspondente ficava dentro da pasta desse componente:

- `./src/types/artwork.ts`
- `./src/types/department`
- `./src/types/favorite`
- `./src/types/images`
- `./src/types/metApi`

# Testes

Foram criados dois testes:

- Hook `useFavorite()`. Foi testado todos os métodos do hook para pegar favoritos do `window.localStorage`, adicionar novo favorito, remover favorito e verificar se uma obra já está favoritada
- A função `handleRequestError` que manipula e formata os erros das requisições

https://github.com/user-attachments/assets/378dafdd-8bee-4f42-b6ae-0e802b40840f

# Aplicação em ação

