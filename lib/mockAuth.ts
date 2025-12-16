import { User, UserRole } from '@/types/auth';

// Mock user database
const mockUsers: User[] = [
  {
    id: '1',
    email: 'farmer@test.com',
    name: 'Alemayehu Bekele',
    role: 'farmer',
    kebele: 'Kebele-01',
    woreda: 'Woreda-A',
    zone: 'Zone-1',
    region: 'Oromia',
  },
  {
    id: '2',
    email: 'kebele@test.com',
    name: 'Tigist Haile',
    role: 'kebele_officer',
    kebele: 'Kebele-01',
    woreda: 'Woreda-A',
    zone: 'Zone-1',
    region: 'Oromia',
  },
  {
    id: '3',
    email: 'distributor@test.com',
    name: 'Cooperative Union',
    role: 'distributor',
    cooperativeId: 'COOP-001',
    kebele: 'Kebele-01',
    woreda: 'Woreda-A',
    zone: 'Zone-1',
    region: 'Oromia',
  },
  {
    id: '4',
    email: 'woreda@test.com',
    name: 'Mulugeta Tesfaye',
    role: 'woreda_officer',
    woreda: 'Woreda-A',
    zone: 'Zone-1',
    region: 'Oromia',
  },
  {
    id: '5',
    email: 'zonal@test.com',
    name: 'Yonas Mekonnen',
    role: 'zonal_officer',
    zone: 'Zone-1',
    region: 'Oromia',
  },
  {
    id: '6',
    email: 'regional@test.com',
    name: 'Sara Alemayehu',
    role: 'regional_officer',
    region: 'Oromia',
  },
  {
    id: '7',
    email: 'admin@test.com',
    name: 'System Administrator',
    role: 'admin',
  },
];

// Mock password (in real app, this would be hashed)
const mockPasswords: Record<string, string> = {
  'farmer@test.com': 'password123',
  'kebele@test.com': 'password123',
  'distributor@test.com': 'password123',
  'woreda@test.com': 'password123',
  'zonal@test.com': 'password123',
  'regional@test.com': 'password123',
  'admin@test.com': 'password123',
};

export const authenticateUser = async (
  email: string,
  password: string
): Promise<User | null> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  const user = mockUsers.find((u) => u.email === email);
  if (!user) return null;

  const correctPassword = mockPasswords[email];
  if (password !== correctPassword) return null;

  return user;
};

export const getUserByEmail = (email: string): User | null => {
  return mockUsers.find((u) => u.email === email) || null;
};

