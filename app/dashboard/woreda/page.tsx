'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaChartBar, FaMapMarkerAlt, FaExclamationTriangle, FaUsers } from 'react-icons/fa';

export default function WoredaDashboard() {
  return (
    <ProtectedRoute path="/dashboard/woreda">
      <DashboardLayout
        title="Woreda Officer Dashboard"
        navItems={[
          { label: 'Overview', href: '/dashboard/woreda', icon: <FaChartBar /> },
          { label: 'Kebeles', href: '/dashboard/woreda/kebeles', icon: <FaMapMarkerAlt /> },
          { label: 'Alerts', href: '/dashboard/woreda/alerts', icon: <FaExclamationTriangle /> },
        ]}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaUsers className="text-3xl text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">12,450</span>
            </div>
            <p className="text-gray-600">Total Farmers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaChartBar className="text-3xl text-green-600" />
              <span className="text-2xl font-bold text-gray-900">89%</span>
            </div>
            <p className="text-gray-600">Distribution Rate</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaExclamationTriangle className="text-3xl text-yellow-600" />
              <span className="text-2xl font-bold text-gray-900">5</span>
            </div>
            <p className="text-gray-600">Active Alerts</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaMapMarkerAlt className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">24</span>
            </div>
            <p className="text-gray-600">Kebeles</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Kebele Performance</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Kebele-01</p>
                  <p className="text-sm text-gray-600">1,245 farmers • 92% coverage</p>
                </div>
                <span className="text-green-600 font-semibold">✓ Good</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Kebele-02</p>
                  <p className="text-sm text-gray-600">980 farmers • 85% coverage</p>
                </div>
                <span className="text-yellow-600 font-semibold">⚠ Review</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Kebele-03</p>
                  <p className="text-sm text-gray-600">1,120 farmers • 78% coverage</p>
                </div>
                <span className="text-red-600 font-semibold">✗ Low</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Alerts & Issues</h3>
            <div className="space-y-3">
              <div className="p-3 bg-yellow-50 border-l-4 border-yellow-500 rounded-lg">
                <p className="font-semibold text-gray-900">Stock Mismatch</p>
                <p className="text-sm text-gray-600">Kebele-05: Inventory discrepancy detected</p>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="p-3 bg-red-50 border-l-4 border-red-500 rounded-lg">
                <p className="font-semibold text-gray-900">High QR Replacements</p>
                <p className="text-sm text-gray-600">Kebele-08: 15 replacements in 24 hours</p>
                <span className="text-xs text-gray-500">5 hours ago</span>
              </div>
              <div className="p-3 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
                <p className="font-semibold text-gray-900">Low Stock Alert</p>
                <p className="text-sm text-gray-600">Kebele-12: Fertilizer stock below 20%</p>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

