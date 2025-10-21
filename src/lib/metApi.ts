import { ArtWorkProps } from '@/types/artwork';
import {
  MetApiAllArtWorksIDsResponse,
  MetApiDepartmentsResponse,
} from '@/types/metApi';
import axios from 'axios';

export const MET_API_BASE_URL =
  'https://collectionapi.metmuseum.org/public/collection/v1';

const requester = axios.create({
  baseURL: MET_API_BASE_URL,
});

function handleRequestError<ReturnValueType = null>(
  context: string,
  error: unknown,
  returnValue: ReturnValueType | null = null
) {
  console.error(`Error fetching ${context}:`, error);
  return returnValue;
}

export async function getAllArtWorksIDs(
  searchKeyword: string,
  departmentId?: number
) {
  try {
    const response = await requester.get<MetApiAllArtWorksIDsResponse>(
      '/search',
      {
        params: {
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

export async function getArtWorkById(objectId: string) {
  try {
    const response = await requester.get<ArtWorkProps>(`/objects/${objectId}`);

    return response.data;
  } catch (error) {
    return handleRequestError(`art work by ID: "${objectId}"`, error);
  }
}

export async function getArtWorksDepartments() {
  try {
    const response = await requester.get<MetApiDepartmentsResponse>(
      `/departments`
    );

    return response.data;
  } catch (error) {
    return handleRequestError('departments', error);
  }
}
