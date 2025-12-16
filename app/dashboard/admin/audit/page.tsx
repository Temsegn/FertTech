'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaUsers, FaChartBar, FaCog, FaShieldAlt, FaDatabase, FaDownload, FaFilter, FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function AdminAuditPage() {
  const [filter, setFilter] = useState('all');
  
  const auditLogs = [
    {
      id: 1,
      timestamp: '2024-01-15 10:30:15',
      user: 'kebele@test.com',
      action: 'Farmer Registration',
      details: 'Registered farmer: Alemayehu Bekele (ID: F12345)',
      ip: '192.168.1.100',
      status: 'Success',
    },
    {
      id: 2,
      timestamp: '2024-01-15 09:15:42',
      user: 'distributor@test.com',
      action: 'Input Distribution',
      details: 'Distributed 50kg fertilizer, 20kg seed to F12345',
      ip: '192.168.1.101',
      status: 'Success',
    },
    {
      id: 3,
      timestamp: '2024-01-15 08:45:23',
      user: 'kebele@test.com',
      action: 'QR Replacement',
      details: 'Replaced QR code for farmer F12346',
      ip: '192.168.1.100',
      status: 'Success',
    },
    {
      id: 4,
      timestamp: '2024-01-14 16:30:10',
      user: 'admin@test.com',
      action: 'Settings Update',
      details: 'Updated season configuration',
      ip: '192.168.1.1',
      status: 'Success',
    },
    {
      id: 5,
      timestamp: '2024-01-14 14:20:55',
      user: 'woreda@test.com',
      action: 'Report Generated',
      details: 'Generated kebele performance report',
      ip: '192.168.1.102',
      status: 'Success',
    },
  ];

  const filteredLogs = filter === 'all' 
    ? auditLogs 
    : auditLogs.filter(log => log.action.toLowerCase().includes(filter.toLowerCase()));

  return (
    <ProtectedRoute path="/dashboard/admin">
      <DashboardLayout
        title="Audit Logs"
        navItems={[
          { label: 'Overview', href: '/dashboard/admin', icon: <FaChartBar /> },
          { label: 'Users', href: '/dashboard/admin/users', icon: <FaUsers /> },
          { label: 'Settings', href: '/dashboard/admin/settings', icon: <FaCog /> },
          { label: 'Audit Logs', href: '/dashboard/admin/audit', icon: <FaDatabase /> },
        ]}
      >
        <div className="space-y-6">
          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaFilter className="text-gray-600" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Actions</option>
                <option value="registration">Registration</option>
                <option value="distribution">Distribution</option>
                <option value="qr">QR Replacement</option>
                <option value="settings">Settings</option>
                <option value="report">Reports</option>
              </select>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              <FaDownload />
              <span>Export Logs</span>
            </button>
          </div>

          {/* Audit Log Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Timestamp</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">IP Address</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredLogs.map((log) => (
                    <tr key={log.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.timestamp}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {log.user}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                          {log.action}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {log.details}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {log.ip}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {log.status}
                        </span>
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

