'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaQrcode, FaWarehouse, FaHistory, FaBarcode, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function ScanQRPage() {
  const [qrCode, setQrCode] = useState('');
  const [farmerData, setFarmerData] = useState<any>(null);
  const [distributionData, setDistributionData] = useState({
    fertilizer: '',
    seed: '',
    chemicals: '',
  });

  const handleScan = () => {
    // Mock QR scan - in real app, this would validate and fetch farmer data
    if (qrCode) {
      setFarmerData({
        id: 'F12345',
        name: 'Alemayehu Bekele',
        landSize: '2.5',
        entitlement: {
          fertilizer: 125,
          seed: 50,
          chemicals: 10,
        },
        remaining: {
          fertilizer: 75,
          seed: 30,
          chemicals: 5,
        },
        collected: {
          fertilizer: 50,
          seed: 20,
          chemicals: 5,
        },
      });
    }
  };

  const handleDistribute = () => {
    if (farmerData) {
      // Mock distribution
      alert('Distribution recorded successfully!');
      setQrCode('');
      setFarmerData(null);
      setDistributionData({ fertilizer: '', seed: '', chemicals: '' });
    }
  };

  return (
    <ProtectedRoute path="/dashboard/distributor">
      <DashboardLayout
        title="Scan QR Code & Distribute"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/distributor', icon: <FaQrcode /> },
          { label: 'Scan QR', href: '/dashboard/distributor/scan', icon: <FaBarcode /> },
          { label: 'Inventory', href: '/dashboard/distributor/inventory', icon: <FaWarehouse /> },
          { label: 'History', href: '/dashboard/distributor/history', icon: <FaHistory /> },
        ]}
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Scan Section */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Scan QR Code</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Enter or Scan QR Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={qrCode}
                      onChange={(e) => setQrCode(e.target.value)}
                      placeholder="Scan QR code or enter manually"
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleScan}
                      className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <FaBarcode className="text-xl" />
                    </button>
                  </div>
                </div>

                {farmerData && (
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="flex items-center space-x-2 mb-2">
                      <FaCheckCircle className="text-green-600" />
                      <span className="font-semibold text-gray-900">Farmer Verified</span>
                    </div>
                    <p className="text-sm text-gray-700">{farmerData.name}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Farmer Info & Distribution */}
            {farmerData && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Farmer Information</h2>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Name:</span>
                        <span className="font-semibold">{farmerData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Land Size:</span>
                        <span className="font-semibold">{farmerData.landSize} hectares</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Remaining Fertilizer:</span>
                        <span className="font-semibold text-primary-600">{farmerData.remaining.fertilizer} kg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Remaining Seed:</span>
                        <span className="font-semibold text-primary-600">{farmerData.remaining.seed} kg</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Fertilizer (kg) - Max: {farmerData.remaining.fertilizer}
                      </label>
                      <input
                        type="number"
                        value={distributionData.fertilizer}
                        onChange={(e) => setDistributionData({ ...distributionData, fertilizer: e.target.value })}
                        max={farmerData.remaining.fertilizer}
                        min="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Seed (kg) - Max: {farmerData.remaining.seed}
                      </label>
                      <input
                        type="number"
                        value={distributionData.seed}
                        onChange={(e) => setDistributionData({ ...distributionData, seed: e.target.value })}
                        max={farmerData.remaining.seed}
                        min="0"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleDistribute}
                    className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Confirm Distribution
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

