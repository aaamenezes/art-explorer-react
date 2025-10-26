import { Departament } from './departament';

export interface MetApiAllArtworksIDsResponse {
  total: number;
  objectIDs: number[];
}

export interface MetApiDepartmentsResponse {
  departments: Departament[];
}
