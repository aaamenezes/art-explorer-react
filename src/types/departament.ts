import z from 'zod';

export const departamentSchema = z.object({
  departmentId: z.number(),
  displayName: z.string(),
});

type Departament = z.infer<typeof departamentSchema>;

export interface DepartamentsState {
  allDepartaments: Departament[];
  loading: boolean;
  error: string | null;
  loadAllDepartamentsFromApi: () => Promise<void>;
}
