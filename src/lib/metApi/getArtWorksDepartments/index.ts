import { MetApiDepartmentsResponse } from '@/types/metApi';
import { requester } from '..';
import { handleRequestError } from '@/lib/handleRequestError';

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
