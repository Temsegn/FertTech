'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaChartBar, FaMapMarkerAlt, FaExclamationTriangle, FaUsers, FaCheckCircle } from 'react-icons/fa';

export default function WoredaKebelesPage() {
  const kebeles = [
    {
      id: 'K01',
      name: 'Kebele-01',
      farmers: 1245,
      registered: 1150,
      coverage: 92,
      distributionRate: 89,
      status: 'good',
    },
    {
      id: 'K02',
      name: 'Kebele-02',
      farmers: 980,
      registered: 833,
      coverage: 85,
      distributionRate: 78,
      status: 'review',
    },
    {
      id: 'K03',
      name: 'Kebele-03',
      farmers: 1120,
      registered: 874,
      coverage: 78,
      distributionRate: 72,
      status: 'low',
    },
    {
      id: 'K04',
      name: 'Kebele-04',
      farmers: 890,
      registered: 801,
      coverage: 90,
      distributionRate: 85,
      status: 'good',
    },
  ];

  return (
    <ProtectedRoute path="/dashboard/woreda">
      <DashboardLayout
        title="Kebele Management"
        navItems={[
          { label: 'Overview', href: '/dashboard/woreda', icon: <FaChartBar /> },
          { label: 'Kebeles', href: '/dashboard/woreda/kebeles', icon: <FaMapMarkerAlt /> },
          { label: 'Alerts', href: '/dashboard/woreda/alerts', icon: <FaExclamationTriangle /> },
        ]}
      >
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">All Kebeles</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {kebeles.map((kebele) => (
                <div key={kebele.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">{kebele.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      kebele.status === 'good' ? 'bg-green-100 text-green-800' :
                      kebele.status === 'review' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {kebele.status === 'good' ? 'Good' : kebele.status === 'review' ? 'Review' : 'Low'}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Farmers:</span>
                      <span className="font-semibold">{kebele.farmers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Registered:</span>
                      <span className="font-semibold">{kebele.registered}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Coverage:</span>
                      <span className="font-semibold">{kebele.coverage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${kebele.coverage}%` }}></div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distribution Rate:</span>
                      <span className="font-semibold">{kebele.distributionRate}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: `${kebele.distributionRate}%` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

