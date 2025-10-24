import { MetApiAllArtWorksIDsResponse } from '@/types/metApi';
import { requester } from '..';
import { handleRequestError } from '@/lib/handleRequestError';

export async function getAllArtWorksIDs(
  searchKeyword: string,
  departmentId?: number,
  artistOrCulture?: boolean
) {
  try {
    const response = await requester.get<MetApiAllArtWorksIDsResponse>(
      '/search',
      {
        params: {
          artistOrCulture,
          hasImages: true,
          q: searchKeyword,
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
