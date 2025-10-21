export interface Departament {
  departmentId: number;
  displayName: string;
}

export interface DepartamentsState {
  allDepartaments: Departament[];
  loading: boolean;
  error: string | null;
  loadAllDepartamentsFromApi: () => Promise<void>;
}
