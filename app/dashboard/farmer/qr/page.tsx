'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaQrcode, FaHistory, FaInfoCircle } from 'react-icons/fa';
import { QRCodeSVG } from 'qrcode.react';

export default function FarmerQRPage() {
  // Mock farmer ID - in real app, this would come from the authenticated user
  const farmerId = 'FARMER-12345-ABCD-EFGH';

  return (
    <ProtectedRoute path="/dashboard/farmer">
      <DashboardLayout
        title="My QR Code"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/farmer', icon: <FaQrcode /> },
          { label: 'My QR Code', href: '/dashboard/farmer/qr', icon: <FaQrcode /> },
          { label: 'History', href: '/dashboard/farmer/history', icon: <FaHistory /> },
        ]}
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Your Input Entitlement QR Code</h2>
            
            <div className="flex justify-center mb-6">
              <div className="bg-white p-4 rounded-lg border-4 border-primary-600">
                <QRCodeSVG value={farmerId} size={256} />
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6 text-left">
              <div className="flex items-start">
                <FaInfoCircle className="text-yellow-600 mr-2 mt-1" />
                <div>
                  <p className="font-semibold text-gray-900 mb-1">Important Instructions</p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Present this QR code at your cooperative to collect inputs</li>
                    <li>• Keep this card safe and do not share it with others</li>
                    <li>• If lost, visit your kebele office immediately for replacement</li>
                    <li>• This QR code is valid for the current season only</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Farmer ID</p>
                <p className="font-mono font-semibold text-gray-900">{farmerId}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600 mb-1">Status</p>
                <p className="font-semibold text-green-600">Active</p>
              </div>
            </div>

            <button className="mt-6 w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors">
              Print QR Code
            </button>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

