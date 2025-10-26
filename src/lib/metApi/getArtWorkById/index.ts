import { handleRequestError } from '@/lib/handleRequestError';
import { ArtWorkProps } from '@/types/artwork';
import { requester } from '..';

export async function getArtWorkByID(objectID: string) {
  try {
    const response = await requester.get<ArtWorkProps>(`/objects/${objectID}`);

    return response.data;
  } catch (error) {
    return handleRequestError(`art work by ID: "${objectID}"`, error);
  }
}
