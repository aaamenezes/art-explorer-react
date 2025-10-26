import { handleRequestError } from '@/lib/handleRequestError';
import { ArtworkProps } from '@/types/artwork';
import { requester } from '..';

export async function getArtworkByID(objectID: string) {
  try {
    const response = await requester.get<ArtworkProps>(`/objects/${objectID}`);

    return response.data;
  } catch (error) {
    return handleRequestError(`art work by ID: "${objectID}"`, error);
  }
}
