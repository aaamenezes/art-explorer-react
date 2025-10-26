import { handleRequestError } from '@/lib/handleRequestError';
import {
  MetApiDepartmentsProps,
  metApiDepartmentsSchema,
} from '@/types/metApi';
import { requester } from '.';

export async function getArtworksDepartments() {
  try {
    const response = await requester.get(`/departments`);

    const validation = metApiDepartmentsSchema.safeParse(response.data);

    if (!validation.success) {
      console.error('Met API - Departments schema error:', validation.error);
      return null;
    }

    const data: MetApiDepartmentsProps = validation.data;
    return data;
  } catch (error) {
    return handleRequestError('departments', error);
  }
}
