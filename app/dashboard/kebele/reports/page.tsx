'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaUserPlus, FaQrcode, FaSearch, FaUsers, FaChartBar, FaDownload, FaPrint } from 'react-icons/fa';

export default function KebeleReportsPage() {
  const mockReportData = {
    totalFarmers: 1245,
    registeredThisSeason: 1150,
    activeQRCodes: 1198,
    qrReplacements: 47,
    coverage: 92,
    distributionRate: 85,
    topFarmers: [
      { name: 'Alemayehu Bekele', landSize: '2.5', collected: '100%' },
      { name: 'Tigist Haile', landSize: '1.8', collected: '95%' },
      { name: 'Mulugeta Tesfaye', landSize: '3.2', collected: '90%' },
    ],
  };

  return (
    <ProtectedRoute path="/dashboard/kebele">
      <DashboardLayout
        title="Reports & Analytics"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/kebele', icon: <FaUsers /> },
          { label: 'Register Farmer', href: '/dashboard/kebele/register', icon: <FaUserPlus /> },
          { label: 'Replace QR', href: '/dashboard/kebele/replace-qr', icon: <FaQrcode /> },
          { label: 'Search Farmer', href: '/dashboard/kebele/search', icon: <FaSearch /> },
          { label: 'Reports', href: '/dashboard/kebele/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="space-y-6">
          {/* Action Buttons */}
          <div className="flex justify-end space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              <FaDownload />
              <span>Export Report</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors">
              <FaPrint />
              <span>Print</span>
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaUsers className="text-3xl text-primary-600" />
                <span className="text-2xl font-bold text-gray-900">{mockReportData.totalFarmers}</span>
              </div>
              <p className="text-gray-600">Total Farmers</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaUserPlus className="text-3xl text-green-600" />
                <span className="text-2xl font-bold text-gray-900">{mockReportData.registeredThisSeason}</span>
              </div>
              <p className="text-gray-600">Registered This Season</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaQrcode className="text-3xl text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">{mockReportData.activeQRCodes}</span>
              </div>
              <p className="text-gray-600">Active QR Codes</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaChartBar className="text-3xl text-purple-600" />
                <span className="text-2xl font-bold text-gray-900">{mockReportData.coverage}%</span>
              </div>
              <p className="text-gray-600">Registration Coverage</p>
            </div>
          </div>

          {/* Detailed Reports */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Statistics</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Registration Rate</span>
                    <span className="font-semibold">{mockReportData.coverage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${mockReportData.coverage}%` }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-600">Distribution Rate</span>
                    <span className="font-semibold">{mockReportData.distributionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full" style={{ width: `${mockReportData.distributionRate}%` }}></div>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex justify-between">
                    <span className="text-gray-600">QR Replacements</span>
                    <span className="font-semibold text-yellow-600">{mockReportData.qrReplacements}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Farmers by Collection</h3>
              <div className="space-y-3">
                {mockReportData.topFarmers.map((farmer, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-gray-900">{farmer.name}</p>
                      <p className="text-sm text-gray-600">{farmer.landSize} hectares</p>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-semibold">
                      {farmer.collected}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Log */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">New Registration</p>
                  <p className="text-sm text-gray-600">Alemayehu Bekele - 2.5 ha</p>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">QR Replacement</p>
                  <p className="text-sm text-gray-600">Tigist Haile - ID: F12345</p>
                </div>
                <span className="text-xs text-gray-500">5 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold text-gray-900">New Registration</p>
                  <p className="text-sm text-gray-600">Mulugeta Tesfaye - 1.8 ha</p>
                </div>
                <span className="text-xs text-gray-500">1 day ago</span>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

