import { MET_API_BASE_URL } from '@/data/constants';
import axios from 'axios';
import { getArtworkByID } from './getArtworkByID';
import { getAllArtworksIDs } from './getAllArtworksIDs';
import { getArtworksDepartments } from './getArtworksDepartments';

export const requester = axios.create({
  baseURL: MET_API_BASE_URL,
});

export { getArtworkByID, getAllArtworksIDs, getArtworksDepartments };
