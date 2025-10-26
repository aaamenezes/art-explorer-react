import { MET_API_BASE_URL } from '@/data/constants';
import axios from 'axios';

export const requester = axios.create({
  baseURL: MET_API_BASE_URL,
});

export { getArtWorkByID } from './getArtWorkByID';
export { getAllArtWorksIDs } from './getAllArtWorksIDs';
export { getArtWorksDepartments } from './getArtWorksDepartments';
