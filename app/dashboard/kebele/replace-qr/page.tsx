'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaUserPlus, FaQrcode, FaSearch, FaUsers, FaChartBar, FaExclamationTriangle } from 'react-icons/fa';
import { useState } from 'react';

export default function ReplaceQRPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFarmer, setSelectedFarmer] = useState<any>(null);

  const handleSearch = () => {
    // Mock search - in real app, this would query the database
    if (searchQuery) {
      setSelectedFarmer({
        id: 'F12345',
        name: 'Alemayehu Bekele',
        registrationNumber: 'REG-12345',
        landSize: '2.5',
        currentQR: 'FARMER-12345-ABCD-EFGH',
        status: 'Active',
      });
    }
  };

  const handleReplace = () => {
    if (selectedFarmer) {
      // Mock replacement
      alert('Old QR code invalidated. New QR code generated successfully!');
      setSelectedFarmer(null);
      setSearchQuery('');
    }
  };

  return (
    <ProtectedRoute path="/dashboard/kebele">
      <DashboardLayout
        title="Replace Lost QR Code"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/kebele', icon: <FaUsers /> },
          { label: 'Register Farmer', href: '/dashboard/kebele/register', icon: <FaUserPlus /> },
          { label: 'Replace QR', href: '/dashboard/kebele/replace-qr', icon: <FaQrcode /> },
          { label: 'Search Farmer', href: '/dashboard/kebele/search', icon: <FaSearch /> },
          { label: 'Reports', href: '/dashboard/kebele/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Search and Replace QR Code</h2>
            
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Search by Registration Number or Name
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter registration number or farmer name"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                  <button
                    onClick={handleSearch}
                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    <FaSearch />
                  </button>
                </div>
              </div>
            </div>

            {selectedFarmer && (
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-primary-200 mb-6">
                <div className="flex items-center space-x-2 mb-4">
                  <FaExclamationTriangle className="text-yellow-600" />
                  <h3 className="font-semibold text-gray-900">Farmer Found</h3>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Name:</span>
                    <span className="font-semibold">{selectedFarmer.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Registration Number:</span>
                    <span className="font-semibold">{selectedFarmer.registrationNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Land Size:</span>
                    <span className="font-semibold">{selectedFarmer.landSize} hectares</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Current QR:</span>
                    <span className="font-mono text-sm">{selectedFarmer.currentQR}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className="font-semibold text-green-600">{selectedFarmer.status}</span>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                  <p className="text-sm text-gray-700">
                    <strong>Warning:</strong> Replacing the QR code will immediately invalidate the old one. 
                    Make sure the farmer has verified their identity and reported the loss.
                  </p>
                </div>

                <button
                  onClick={handleReplace}
                  className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
                >
                  Invalidate Old QR & Generate New One
                </button>
              </div>
            )}

            {!selectedFarmer && searchQuery && (
              <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-600">
                No farmer found. Please verify the registration number or name.
              </div>
            )}
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

