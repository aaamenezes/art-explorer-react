import { MetApiAllArtworksIDsResponse } from '@/types/metApi';
import { requester } from '..';
import { handleRequestError } from '@/lib/handleRequestError';
import { getAllArtworksIDsProps } from './types';

export async function getAllArtworksIDs({
  keywordSearch,
  departmentId,
  artistOrCulture,
}: getAllArtworksIDsProps) {
  try {
    const response = await requester.get<MetApiAllArtworksIDsResponse>(
      '/search',
      {
        params: {
          artistOrCulture,
          hasImages: true,
          q: keywordSearch,
          departmentId,
        },
      }
    );

    return response.data;
  } catch (error) {
    return handleRequestError('art work IDs', error, {
      total: 0,
      objectIDs: [],
    });
  }
}
