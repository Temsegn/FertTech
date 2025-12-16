'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaQrcode, FaWarehouse, FaHistory, FaBarcode, FaFilter, FaDownload } from 'react-icons/fa';
import { useState } from 'react';

export default function DistributorHistoryPage() {
  const [filter, setFilter] = useState('all');
  
  const mockHistory = [
    {
      id: 1,
      date: '2024-01-15',
      time: '10:30 AM',
      farmerName: 'Alemayehu Bekele',
      farmerId: 'F12345',
      inputs: { fertilizer: 50, seed: 20, chemicals: 0 },
      total: 70,
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-01-15',
      time: '09:15 AM',
      farmerName: 'Tigist Haile',
      farmerId: 'F12346',
      inputs: { fertilizer: 75, seed: 0, chemicals: 0 },
      total: 75,
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-01-14',
      time: '02:45 PM',
      farmerName: 'Mulugeta Tesfaye',
      farmerId: 'F12347',
      inputs: { fertilizer: 0, seed: 30, chemicals: 5 },
      total: 35,
      status: 'Completed',
    },
    {
      id: 4,
      date: '2024-01-14',
      time: '11:20 AM',
      farmerName: 'Sara Alemayehu',
      farmerId: 'F12348',
      inputs: { fertilizer: 100, seed: 40, chemicals: 0 },
      total: 140,
      status: 'Completed',
    },
  ];

  const filteredHistory = filter === 'all' 
    ? mockHistory 
    : mockHistory.filter(item => item.date === filter);

  const totalDistributed = mockHistory.reduce((sum, item) => sum + item.total, 0);
  const todayCount = mockHistory.filter(item => item.date === '2024-01-15').length;

  return (
    <ProtectedRoute path="/dashboard/distributor">
      <DashboardLayout
        title="Distribution History"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/distributor', icon: <FaQrcode /> },
          { label: 'Scan QR', href: '/dashboard/distributor/scan', icon: <FaBarcode /> },
          { label: 'Inventory', href: '/dashboard/distributor/inventory', icon: <FaWarehouse /> },
          { label: 'History', href: '/dashboard/distributor/history', icon: <FaHistory /> },
        ]}
      >
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaHistory className="text-3xl text-primary-600" />
                <span className="text-2xl font-bold text-gray-900">{mockHistory.length}</span>
              </div>
              <p className="text-gray-600">Total Distributions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaHistory className="text-3xl text-green-600" />
                <span className="text-2xl font-bold text-gray-900">{todayCount}</span>
              </div>
              <p className="text-gray-600">Today's Distributions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaWarehouse className="text-3xl text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">{totalDistributed} kg</span>
              </div>
              <p className="text-gray-600">Total Distributed</p>
            </div>
          </div>

          {/* Filters and Actions */}
          <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <FaFilter className="text-gray-600" />
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="all">All Time</option>
                <option value="2024-01-15">Today (Jan 15)</option>
                <option value="2024-01-14">Yesterday (Jan 14)</option>
              </select>
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              <FaDownload />
              <span>Export</span>
            </button>
          </div>

          {/* History Table */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date & Time</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fertilizer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Seed</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chemicals</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredHistory.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.date}</div>
                        <div className="text-sm text-gray-500">{item.time}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.farmerName}</div>
                        <div className="text-sm text-gray-500">{item.farmerId}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.inputs.fertilizer > 0 ? `${item.inputs.fertilizer} kg` : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.inputs.seed > 0 ? `${item.inputs.seed} kg` : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {item.inputs.chemicals > 0 ? `${item.inputs.chemicals} kg` : '-'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-900">
                        {item.total} kg
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          {item.status}
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

