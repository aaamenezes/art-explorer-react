import { MetApiAllArtWorksIDsResponse } from '@/types/metApi';
import { requester } from '..';
import { handleRequestError } from '@/lib/handleRequestError';
import { getAllArtWorksIDsProps } from './types';

export async function getAllArtWorksIDs({
  keywordSearch,
  departmentId,
  artistOrCulture,
}: getAllArtWorksIDsProps) {
  try {
    const response = await requester.get<MetApiAllArtWorksIDsResponse>(
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
