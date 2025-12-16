'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/authContext';
import { canAccessRoute } from '@/lib/rolePermissions';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: string;
  path?: string;
}

export default function ProtectedRoute({
  children,
  requiredRole,
  path,
}: ProtectedRouteProps) {
  const { isAuthenticated, user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }

    if (user && path && !canAccessRoute(path, user.role)) {
      router.push('/unauthorized');
      return;
    }

    if (user && requiredRole && user.role !== requiredRole) {
      router.push('/unauthorized');
    }
  }, [isAuthenticated, user, router, requiredRole, path]);

  if (!isAuthenticated || !user) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}

