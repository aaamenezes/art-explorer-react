import { ArtWorkProps } from '@/types/artwork';
import { MetApiAllArtWorksResponse } from '@/types/metApi';

export async function getAllArtWorksIDs(searchKeyword: string) {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${searchKeyword}`
  );

  const allArtWorkIDs: MetApiAllArtWorksResponse = await response.json();

  return allArtWorkIDs;
}

export async function getArtWorkById(objectId: string) {
  const response = await fetch(
    `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
  );

  const artWorkData: ArtWorkProps = await response.json();

  return artWorkData;
}
