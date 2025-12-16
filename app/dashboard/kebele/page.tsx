'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaUserPlus, FaQrcode, FaSearch, FaUsers, FaChartBar } from 'react-icons/fa';
import Link from 'next/link';

export default function KebeleDashboard() {
  return (
    <ProtectedRoute path="/dashboard/kebele">
      <DashboardLayout
        title="Kebele Officer Dashboard"
        navItems={[
          { label: 'Register Farmer', href: '/dashboard/kebele/register', icon: <FaUserPlus /> },
          { label: 'Replace QR', href: '/dashboard/kebele/replace-qr', icon: <FaQrcode /> },
          { label: 'Search Farmer', href: '/dashboard/kebele/search', icon: <FaSearch /> },
          { label: 'Reports', href: '/dashboard/kebele/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaUsers className="text-3xl text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">1,245</span>
            </div>
            <p className="text-gray-600">Total Registered Farmers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaQrcode className="text-3xl text-green-600" />
              <span className="text-2xl font-bold text-gray-900">1,198</span>
            </div>
            <p className="text-gray-600">Active QR Codes</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaQrcode className="text-3xl text-yellow-600" />
              <span className="text-2xl font-bold text-gray-900">47</span>
            </div>
            <p className="text-gray-600">QR Replacements</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaChartBar className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">92%</span>
            </div>
            <p className="text-gray-600">Registration Coverage</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Link
                href="/dashboard/kebele/register"
                className="flex items-center space-x-3 p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
              >
                <FaUserPlus className="text-primary-600 text-xl" />
                <div>
                  <p className="font-semibold text-gray-900">Register New Farmer</p>
                  <p className="text-sm text-gray-600">Add farmer to the system</p>
                </div>
              </Link>
              <Link
                href="/dashboard/kebele/replace-qr"
                className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
              >
                <FaQrcode className="text-yellow-600 text-xl" />
                <div>
                  <p className="font-semibold text-gray-900">Replace Lost QR Code</p>
                  <p className="text-sm text-gray-600">Issue new QR for lost card</p>
                </div>
              </Link>
              <Link
                href="/dashboard/kebele/search"
                className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <FaSearch className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold text-gray-900">Search Farmer</p>
                  <p className="text-sm text-gray-600">Find farmer by name or ID</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">New Registration</p>
                  <p className="text-sm text-gray-600">Alemayehu Bekele - 2.5 ha</p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">QR Replacement</p>
                  <p className="text-sm text-gray-600">Tigist Haile - ID: F12345</p>
                </div>
                <span className="text-xs text-gray-500">5 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">New Registration</p>
                  <p className="text-sm text-gray-600">Mulugeta Tesfaye - 1.8 ha</p>
                </div>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

