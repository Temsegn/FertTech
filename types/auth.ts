export type UserRole = 
  | 'farmer'
  | 'kebele_officer'
  | 'distributor'
  | 'woreda_officer'
  | 'zonal_officer'
  | 'regional_officer'
  | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  region?: string;
  zone?: string;
  woreda?: string;
  kebele?: string;
  cooperativeId?: string;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuthenticated: boolean;
}

