import { ArtWorkProps } from '@/types/artwork';
import { MetApiAllArtWorksResponse } from '@/types/metApi';

async function getAllArtWorks() {
  const response = await fetch(
    'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting'
  );

  const data: MetApiAllArtWorksResponse = await response.json();

  return data;
}

export async function getArtWorksIdsByPage(page: string) {
  const pageNumber = Number(page);
  if (Number.isNaN(pageNumber)) return [];

  const ARTS_PER_PAGE = 15;

  const allArtworks = await getAllArtWorks();
  const startIndex = (Number(page) - 1) * ARTS_PER_PAGE;
  const endIndex = startIndex + ARTS_PER_PAGE;
  const artWorksIds = allArtworks.objectIDs.slice(startIndex, endIndex);

  return artWorksIds;
}

export async function getArtWorkById(objectId: string) {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
  );

  const data: ArtWorkProps = await response.json();

  return data;
}
