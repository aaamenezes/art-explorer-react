import { MET_API_BASE_URL } from '@/data/constants';
import { ArtWorkProps } from '@/types/artwork';
import {
  MetApiAllArtWorksIDsResponse,
  MetApiDepartmentsResponse,
} from '@/types/metApi';
import axios from 'axios';
import { handleRequestError } from './handleRequestError';

const requester = axios.create({
  baseURL: MET_API_BASE_URL,
});

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
