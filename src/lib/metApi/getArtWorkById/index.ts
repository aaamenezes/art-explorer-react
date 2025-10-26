import { handleRequestError } from '@/lib/handleRequestError';
import { ArtworkProps, artworkSchema } from '@/types/artwork';
import { requester } from '..';

export async function getArtworkByID(objectID: string) {
  try {
    const response = await requester.get(`/objects/${objectID}`);

    const validation = artworkSchema.safeParse(response.data);

    if (!validation.success) {
      console.error('Artwork data validation failed:', validation.error);
      return null;
    }

    const data: ArtworkProps = validation.data;
    return data;
  } catch (error) {
    return handleRequestError(`art work by ID: "${objectID}"`, error);
  }
}
