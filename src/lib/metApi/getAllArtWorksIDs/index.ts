import { handleRequestError } from '@/lib/handleRequestError';
import {
  MetApiAllArtworksIDsProps,
  metApiAllArtworksIDsSchema,
} from '@/types/metApi';
import { requester } from '..';
import { AllArtworksIDsProps } from './types';

export async function getAllArtworksIDs({
  keywordSearch,
  departmentId,
  artistOrCulture,
}: AllArtworksIDsProps) {
  try {
    const response = await requester.get('/search', {
      params: {
        artistOrCulture,
        hasImages: true,
        q: keywordSearch,
        departmentId,
      },
    });

    const validation = metApiAllArtworksIDsSchema.safeParse(response.data);

    if (!validation.success) {
      console.error('Validation error:', validation.error);
      return null;
    }

    const data: MetApiAllArtworksIDsProps = validation.data;
    return data;
  } catch (error) {
    return handleRequestError('art work IDs', error, {
      total: 0,
      objectIDs: [],
    });
  }
}
