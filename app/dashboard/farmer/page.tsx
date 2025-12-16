'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaQrcode, FaHistory, FaInfoCircle } from 'react-icons/fa';

export default function FarmerDashboard() {
  return (
    <ProtectedRoute path="/dashboard/farmer">
      <DashboardLayout
        title="Farmer Dashboard"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/farmer', icon: <FaInfoCircle /> },
          { label: 'My QR Code', href: '/dashboard/farmer/qr', icon: <FaQrcode /> },
          { label: 'History', href: '/dashboard/farmer/history', icon: <FaHistory /> },
        ]}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">My Entitlement</h3>
              <FaInfoCircle className="text-primary-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Land Size:</span>
                <span className="font-semibold">2.5 hectares</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Fertilizer:</span>
                <span className="font-semibold">125 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Seed:</span>
                <span className="font-semibold">50 kg</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Remaining Balance</h3>
              <FaInfoCircle className="text-primary-600" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Fertilizer:</span>
                <span className="font-semibold text-primary-600">75 kg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Seed:</span>
                <span className="font-semibold text-primary-600">30 kg</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <FaHistory className="text-primary-600" />
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Last Collection:</span>
                <span className="font-semibold">15 Jan 2024</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Collections:</span>
                <span className="font-semibold">3</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructions</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Present your QR code card at the cooperative for input collection</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>You can collect your entitlement in multiple visits</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>If you lose your QR code, visit your kebele office for replacement</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Keep your QR code safe and do not share it with others</span>
            </li>
          </ul>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

