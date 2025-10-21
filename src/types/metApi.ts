import { Departament } from './departament';

export interface MetApiAllArtWorksIDsResponse {
  total: number;
  objectIDs: number[];
}

export interface MetApiDepartmentsResponse {
  departments: Departament[];
}
