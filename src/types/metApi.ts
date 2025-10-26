import z from 'zod';
import { departamentSchema } from './departament';

export const metApiAllArtworksIDsSchema = z.object({
  total: z.number(),
  objectIDs: z.array(z.number()),
});

export type MetApiAllArtworksIDsProps = z.infer<
  typeof metApiAllArtworksIDsSchema
>;

export const metApiDepartmentsSchema = z.object({
  departments: z.array(departamentSchema),
});

export type MetApiDepartmentsProps = z.infer<typeof metApiDepartmentsSchema>;
