'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaChartBar, FaMapMarkerAlt, FaUsers, FaCheckCircle } from 'react-icons/fa';

export default function ZonalWoredasPage() {
  const woredas = [
    {
      id: 'W01',
      name: 'Woreda-A',
      farmers: 12450,
      registered: 11081,
      coverage: 89,
      distributionRate: 85,
      kebeles: 24,
      status: 'good',
    },
    {
      id: 'W02',
      name: 'Woreda-B',
      farmers: 10230,
      registered: 8696,
      coverage: 85,
      distributionRate: 78,
      kebeles: 18,
      status: 'review',
    },
    {
      id: 'W03',
      name: 'Woreda-C',
      farmers: 8920,
      registered: 7314,
      coverage: 82,
      distributionRate: 75,
      kebeles: 16,
      status: 'review',
    },
  ];

  return (
    <ProtectedRoute path="/dashboard/zonal">
      <DashboardLayout
        title="Woreda Management"
        navItems={[
          { label: 'Overview', href: '/dashboard/zonal', icon: <FaChartBar /> },
          { label: 'Woredas', href: '/dashboard/zonal/woredas', icon: <FaMapMarkerAlt /> },
          { label: 'Reports', href: '/dashboard/zonal/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">All Woredas</h2>
            <div className="space-y-4">
              {woredas.map((woreda) => (
                <div key={woreda.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{woreda.name}</h3>
                      <p className="text-sm text-gray-600">{woreda.kebeles} Kebeles</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      woreda.status === 'good' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {woreda.status === 'good' ? 'Good' : 'Review'}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Farmers</p>
                      <p className="text-lg font-semibold">{woreda.farmers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Registered</p>
                      <p className="text-lg font-semibold">{woreda.registered.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Coverage</p>
                      <p className="text-lg font-semibold">{woreda.coverage}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${woreda.coverage}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Distribution Rate</p>
                      <p className="text-lg font-semibold">{woreda.distributionRate}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${woreda.distributionRate}%` }}></div>
                      </div>
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

