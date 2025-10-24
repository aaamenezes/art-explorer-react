import { handleRequestError } from '@/lib/handleRequestError';
import { ArtWorkProps } from '@/types/artwork';
import { requester } from '..';

export async function getArtWorkById(objectId: string) {
  try {
    const response = await requester.get<ArtWorkProps>(`/objects/${objectId}`);

    return response.data;
  } catch (error) {
    return handleRequestError(`art work by ID: "${objectId}"`, error);
  }
}
