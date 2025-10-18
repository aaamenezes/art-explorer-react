async function getAllArtWorks() {
  const response = await fetch(
    'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting'
  );

  const data = await response.json();

  return data;
}

export async function getArtWorksByPage(page: number) {
  const artsPerPage = 15;

  const allArtworks = await getAllArtWorks();
  const startIndex = (page - 1) * artsPerPage;
  const endIndex = startIndex + artsPerPage;
  const artWorksToShow = allArtworks.objectIDs.slice(startIndex, endIndex);

  return artWorksToShow;
}
