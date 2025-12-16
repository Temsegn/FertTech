'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaChartBar, FaMapMarkerAlt, FaUsers, FaWarehouse } from 'react-icons/fa';

export default function ZonalDashboard() {
  return (
    <ProtectedRoute path="/dashboard/zonal">
      <DashboardLayout
        title="Zonal Officer Dashboard"
        navItems={[
          { label: 'Overview', href: '/dashboard/zonal', icon: <FaChartBar /> },
          { label: 'Woredas', href: '/dashboard/zonal/woredas', icon: <FaMapMarkerAlt /> },
          { label: 'Reports', href: '/dashboard/zonal/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaUsers className="text-3xl text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">125,450</span>
            </div>
            <p className="text-gray-600">Total Farmers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaChartBar className="text-3xl text-green-600" />
              <span className="text-2xl font-bold text-gray-900">87%</span>
            </div>
            <p className="text-gray-600">Overall Distribution</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaWarehouse className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">18</span>
            </div>
            <p className="text-gray-600">Woredas</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaMapMarkerAlt className="text-3xl text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">432</span>
            </div>
            <p className="text-gray-600">Kebeles</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Woreda Performance</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Woreda-A</p>
                  <p className="text-sm text-gray-600">12,450 farmers • 89% coverage</p>
                </div>
                <span className="text-green-600 font-semibold">✓</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Woreda-B</p>
                  <p className="text-sm text-gray-600">10,230 farmers • 85% coverage</p>
                </div>
                <span className="text-yellow-600 font-semibold">⚠</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Woreda-C</p>
                  <p className="text-sm text-gray-600">8,920 farmers • 82% coverage</p>
                </div>
                <span className="text-yellow-600 font-semibold">⚠</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stock Overview</h3>
            <div className="space-y-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Fertilizer</span>
                  <span className="font-semibold">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Seed</span>
                  <span className="font-semibold">72%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: '72%' }}></div>
                </div>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700">Agro-chemicals</span>
                  <span className="font-semibold">58%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: '58%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

