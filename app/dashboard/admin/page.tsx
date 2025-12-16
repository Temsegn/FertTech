'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaUsers, FaChartBar, FaCog, FaShieldAlt, FaDatabase } from 'react-icons/fa';

export default function AdminDashboard() {
  return (
    <ProtectedRoute path="/dashboard/admin">
      <DashboardLayout
        title="Administrator Dashboard"
        navItems={[
          { label: 'Overview', href: '/dashboard/admin', icon: <FaChartBar /> },
          { label: 'Users', href: '/dashboard/admin/users', icon: <FaUsers /> },
          { label: 'Settings', href: '/dashboard/admin/settings', icon: <FaCog /> },
          { label: 'Audit Logs', href: '/dashboard/admin/audit', icon: <FaDatabase /> },
        ]}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaUsers className="text-3xl text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">12,450,000</span>
            </div>
            <p className="text-gray-600">Total Farmers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaChartBar className="text-3xl text-green-600" />
              <span className="text-2xl font-bold text-gray-900">82%</span>
            </div>
            <p className="text-gray-600">National Distribution</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaShieldAlt className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">11</span>
            </div>
            <p className="text-gray-600">Regions</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaDatabase className="text-3xl text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">2.4M</span>
            </div>
            <p className="text-gray-600">Transactions</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Authentication</p>
                  <p className="text-sm text-gray-600">All systems operational</p>
                </div>
                <span className="text-green-600 font-semibold">✓ Online</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Database</p>
                  <p className="text-sm text-gray-600">Synchronized</p>
                </div>
                <span className="text-green-600 font-semibold">✓ Online</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">QR Service</p>
                  <p className="text-sm text-gray-600">Active</p>
                </div>
                <span className="text-green-600 font-semibold">✓ Online</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <button className="w-full text-left p-4 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors">
                <p className="font-semibold text-gray-900">Manage Users</p>
                <p className="text-sm text-gray-600">Add, edit, or remove system users</p>
              </button>
              <button className="w-full text-left p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <p className="font-semibold text-gray-900">Configure Policies</p>
                <p className="text-sm text-gray-600">Set seasonal input entitlements</p>
              </button>
              <button className="w-full text-left p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <p className="font-semibold text-gray-900">View Audit Logs</p>
                <p className="text-sm text-gray-600">Review system activity and transactions</p>
              </button>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

