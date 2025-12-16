'use client';

import { useAuth } from '@/lib/authContext';
import { useRouter } from 'next/navigation';
import { FaSeedling, FaSignOutAlt, FaHome, FaUser } from 'react-icons/fa';
import Link from 'next/link';

interface DashboardLayoutProps {
  children: React.ReactNode;
  title: string;
  navItems?: Array<{ label: string; href: string; icon: React.ReactNode }>;
}

export default function DashboardLayout({
  children,
  title,
  navItems = [],
}: DashboardLayoutProps) {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/');
  };

  const getRoleLabel = (role: string) => {
    const labels: Record<string, string> = {
      farmer: 'Farmer',
      kebele_officer: 'Kebele Officer',
      distributor: 'Distributor',
      woreda_officer: 'Woreda Officer',
      zonal_officer: 'Zonal Officer',
      regional_officer: 'Regional Officer',
      admin: 'Administrator',
    };
    return labels[role] || role;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <FaSeedling className="text-2xl text-primary-600" />
              <div>
                <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
                <p className="text-xs text-gray-500">FertTech</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <FaUser className="text-primary-600" />
                <span className="font-medium">{user?.name}</span>
                <span className="text-gray-400">•</span>
                <span>{getRoleLabel(user?.role || '')}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        {navItems.length > 0 && (
          <nav className="mb-6">
            <div className="flex space-x-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow text-gray-700 hover:text-primary-600"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        )}

        {/* Main Content */}
        <main>{children}</main>
      </div>
    </div>
  );
}

