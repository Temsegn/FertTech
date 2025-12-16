'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaQrcode, FaWarehouse, FaHistory, FaBarcode } from 'react-icons/fa';
import { useState } from 'react';

export default function DistributorDashboard() {
  const [qrCode, setQrCode] = useState('');

  return (
    <ProtectedRoute path="/dashboard/distributor">
      <DashboardLayout
        title="Distributor Dashboard"
        navItems={[
          { label: 'Scan QR', href: '/dashboard/distributor/scan', icon: <FaBarcode /> },
          { label: 'Inventory', href: '/dashboard/distributor/inventory', icon: <FaWarehouse /> },
          { label: 'History', href: '/dashboard/distributor/history', icon: <FaHistory /> },
        ]}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaWarehouse className="text-3xl text-primary-600" />
              <span className="text-2xl font-bold text-gray-900">2,450</span>
            </div>
            <p className="text-gray-600">Fertilizer (kg)</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaWarehouse className="text-3xl text-green-600" />
              <span className="text-2xl font-bold text-gray-900">980</span>
            </div>
            <p className="text-gray-600">Seed (kg)</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaQrcode className="text-3xl text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">156</span>
            </div>
            <p className="text-gray-600">Today's Distributions</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-2">
              <FaHistory className="text-3xl text-purple-600" />
              <span className="text-2xl font-bold text-gray-900">1,234</span>
            </div>
            <p className="text-gray-600">Total This Season</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Scan QR Code</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Enter QR Code or Scan
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={qrCode}
                    onChange={(e) => setQrCode(e.target.value)}
                    placeholder="Scan or enter QR code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                    <FaBarcode className="text-xl" />
                  </button>
                </div>
              </div>
              <button className="w-full px-4 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors">
                Process Distribution
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Distributions</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Alemayehu Bekele</p>
                  <p className="text-sm text-gray-600">Fertilizer: 50kg, Seed: 20kg</p>
                </div>
                <span className="text-xs text-gray-500">10:30 AM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Tigist Haile</p>
                  <p className="text-sm text-gray-600">Fertilizer: 75kg</p>
                </div>
                <span className="text-xs text-gray-500">09:15 AM</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">Mulugeta Tesfaye</p>
                  <p className="text-sm text-gray-600">Seed: 30kg</p>
                </div>
                <span className="text-xs text-gray-500">08:45 AM</span>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

