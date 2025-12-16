'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaChartBar, FaMapMarkerAlt, FaUsers, FaWarehouse, FaGlobe } from 'react-icons/fa';

export default function RegionalDashboard() {
  return (
    <ProtectedRoute path="/dashboard/regional">
      <DashboardLayout
        title="Regional Officer Dashboard"
        navItems={[
          { label: 'Overview', href: '/dashboard/regional', icon: <FaChartBar /> },
          { label: 'Zones', href: '/dashboard/regional/zones', icon: <FaMapMarkerAlt /> },
          { label: 'Reports', href: '/dashboard/regional/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaUsers className="text-3xl text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">1,245,000</span>
            </div>
            <p className="text-gray-600">Total Farmers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaChartBar className="text-3xl text-green-600" />
              <span className="text-2xl font-bold text-gray-900">84%</span>
            </div>
            <p className="text-gray-600">Regional Distribution</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">12</span>
            </div>
            <p className="text-gray-600">Zones</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaGlobe className="text-3xl text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">216</span>
            </div>
            <p className="text-gray-600">Woredas</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Zone Performance</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Zone-1</p>
                  <p className="text-sm text-gray-600">125,450 farmers • 87% coverage</p>
                </div>
                <span className="text-green-600 font-semibold">✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Zone-2</p>
                  <p className="text-sm text-gray-600">98,230 farmers • 85% coverage</p>
                </div>
                <span className="text-yellow-600 font-semibold">⚠</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Zone-3</p>
                  <p className="text-sm text-gray-600">112,450 farmers • 82% coverage</p>
                </div>
                <span className="text-yellow-600 font-semibold">⚠</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Regional Stock Status</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Fertilizer</span>
                  <span className="font-semibold">62%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Seed</span>
                  <span className="font-semibold">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Agro-chemicals</span>
                  <span className="font-semibold">55%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

