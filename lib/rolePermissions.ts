import { UserRole } from '@/types/auth';

export interface RoutePermission {
  path: string;
  roles: UserRole[];
}

export const routePermissions: RoutePermission[] = [
  {
    path: '/dashboard/farmer',
    roles: ['farmer'],
  },
  {
    path: '/dashboard/kebele',
    roles: ['kebele_officer'],
  },
  {
    path: '/dashboard/distributor',
    roles: ['distributor'],
  },
  {
    path: '/dashboard/woreda',
    roles: ['woreda_officer'],
  },
  {
    path: '/dashboard/zonal',
    roles: ['zonal_officer'],
  },
  {
    path: '/dashboard/regional',
    roles: ['regional_officer'],
  },
  {
    path: '/dashboard/admin',
    roles: ['admin'],
  },
];

export const canAccessRoute = (path: string, role: UserRole): boolean => {
  const permission = routePermissions.find((p) => path.startsWith(p.path));
  if (!permission) return false;
  return permission.roles.includes(role);
};

export const getDashboardPath = (role: UserRole): string => {
  const rolePathMap: Record<UserRole, string> = {
    farmer: '/dashboard/farmer',
    kebele_officer: '/dashboard/kebele',
    distributor: '/dashboard/distributor',
    woreda_officer: '/dashboard/woreda',
    zonal_officer: '/dashboard/zonal',
    regional_officer: '/dashboard/regional',
    admin: '/dashboard/admin',
  };
  return rolePathMap[role];
};

