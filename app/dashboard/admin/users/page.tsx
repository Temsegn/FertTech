'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaUsers, FaChartBar, FaCog, FaShieldAlt, FaDatabase, FaUserPlus, FaEdit, FaTrash } from 'react-icons/fa';
import { useState } from 'react';

export default function AdminUsersPage() {
  const [users] = useState([
    {
      id: '1',
      name: 'Tigist Haile',
      email: 'kebele@test.com',
      role: 'Kebele Officer',
      region: 'Oromia',
      zone: 'Zone-1',
      woreda: 'Woreda-A',
      kebele: 'Kebele-01',
      status: 'Active',
      lastLogin: '2024-01-15 10:30',
    },
    {
      id: '2',
      name: 'Cooperative Union',
      email: 'distributor@test.com',
      role: 'Distributor',
      region: 'Oromia',
      zone: 'Zone-1',
      woreda: 'Woreda-A',
      kebele: 'Kebele-01',
      status: 'Active',
      lastLogin: '2024-01-15 09:15',
    },
    {
      id: '3',
      name: 'Mulugeta Tesfaye',
      email: 'woreda@test.com',
      role: 'Woreda Officer',
      region: 'Oromia',
      zone: 'Zone-1',
      woreda: 'Woreda-A',
      status: 'Active',
      lastLogin: '2024-01-14 16:45',
    },
  ]);

  return (
    <ProtectedRoute path="/dashboard/admin">
      <DashboardLayout
        title="User Management"
        navItems={[
          { label: 'Overview', href: '/dashboard/admin', icon: <FaChartBar /> },
          { label: 'Users', href: '/dashboard/admin/users', icon: <FaUsers /> },
          { label: 'Settings', href: '/dashboard/admin/settings', icon: <FaCog /> },
          { label: 'Audit Logs', href: '/dashboard/admin/audit', icon: <FaDatabase /> },
        ]}
      >
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">System Users</h2>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              <FaUserPlus />
              <span>Add User</span>
            </button>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{user.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{user.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {user.role}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.region} {user.zone && `• ${user.zone}`} {user.woreda && `• ${user.woreda}`} {user.kebele && `• ${user.kebele}`}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {user.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {user.lastLogin}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button className="text-primary-600 hover:text-primary-900">
                            <FaEdit />
                          </button>
                          <button className="text-red-600 hover:text-red-900">
                            <FaTrash />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

