import z from 'zod';

export const allArtworksIDsSchema = z.object({
  keywordSearch: z.string(),
  departmentId: z.number().optional(),
  artistOrCulture: z.boolean().optional(),
});

export type AllArtworksIDsProps = z.infer<typeof allArtworksIDsSchema>;
