'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaQrcode, FaHistory, FaCheckCircle } from 'react-icons/fa';

export default function FarmerHistoryPage() {
  const mockHistory = [
    {
      id: 1,
      date: '2024-01-15',
      time: '10:30 AM',
      inputs: 'Fertilizer: 50kg, Seed: 20kg',
      location: 'Cooperative Union - Kebele-01',
      status: 'Completed',
    },
    {
      id: 2,
      date: '2024-01-10',
      time: '02:15 PM',
      inputs: 'Fertilizer: 75kg',
      location: 'Cooperative Union - Kebele-01',
      status: 'Completed',
    },
    {
      id: 3,
      date: '2024-01-05',
      time: '09:00 AM',
      inputs: 'Seed: 30kg',
      location: 'Cooperative Union - Kebele-01',
      status: 'Completed',
    },
  ];

  return (
    <ProtectedRoute path="/dashboard/farmer">
      <DashboardLayout
        title="Distribution History"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/farmer', icon: <FaQrcode /> },
          { label: 'My QR Code', href: '/dashboard/farmer/qr', icon: <FaQrcode /> },
          { label: 'History', href: '/dashboard/farmer/history', icon: <FaHistory /> },
        ]}
      >
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Your Collection History</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {mockHistory.map((transaction) => (
              <div key={transaction.id} className="px-6 py-4 hover:bg-gray-50">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="font-semibold text-gray-900">{transaction.date}</span>
                      <span className="text-gray-500">at {transaction.time}</span>
                    </div>
                    <p className="text-gray-700 mb-1">{transaction.inputs}</p>
                    <p className="text-sm text-gray-500">{transaction.location}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                    {transaction.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

