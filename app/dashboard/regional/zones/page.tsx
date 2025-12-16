'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaChartBar, FaMapMarkerAlt, FaUsers, FaGlobe } from 'react-icons/fa';

export default function RegionalZonesPage() {
  const zones = [
    {
      id: 'Z01',
      name: 'Zone-1',
      farmers: 125450,
      registered: 109142,
      coverage: 87,
      distributionRate: 82,
      woredas: 18,
      status: 'good',
    },
    {
      id: 'Z02',
      name: 'Zone-2',
      farmers: 98230,
      registered: 83496,
      coverage: 85,
      distributionRate: 78,
      woredas: 15,
      status: 'review',
    },
    {
      id: 'Z03',
      name: 'Zone-3',
      farmers: 112450,
      registered: 92209,
      coverage: 82,
      distributionRate: 75,
      woredas: 17,
      status: 'review',
    },
  ];

  return (
    <ProtectedRoute path="/dashboard/regional">
      <DashboardLayout
        title="Zone Management"
        navItems={[
          { label: 'Overview', href: '/dashboard/regional', icon: <FaChartBar /> },
          { label: 'Zones', href: '/dashboard/regional/zones', icon: <FaMapMarkerAlt /> },
          { label: 'Reports', href: '/dashboard/regional/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">All Zones</h2>
            <div className="space-y-4">
              {zones.map((zone) => (
                <div key={zone.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{zone.name}</h3>
                      <p className="text-sm text-gray-600">{zone.woredas} Woredas</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      zone.status === 'good' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {zone.status === 'good' ? 'Good' : 'Review'}
                    </span>
                  </div>
                  <div className="grid md:grid-cols-4 gap-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Total Farmers</p>
                      <p className="text-lg font-semibold">{zone.farmers.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Registered</p>
                      <p className="text-lg font-semibold">{zone.registered.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Coverage</p>
                      <p className="text-lg font-semibold">{zone.coverage}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${zone.coverage}%` }}></div>
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Distribution Rate</p>
                      <p className="text-lg font-semibold">{zone.distributionRate}%</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                        <div className="bg-green-600 h-2 rounded-full" style={{ width: `${zone.distributionRate}%` }}></div>
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

