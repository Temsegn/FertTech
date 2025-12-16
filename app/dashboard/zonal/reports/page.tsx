'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaChartBar, FaMapMarkerAlt, FaDownload, FaPrint } from 'react-icons/fa';

export default function ZonalReportsPage() {
  return (
    <ProtectedRoute path="/dashboard/zonal">
      <DashboardLayout
        title="Reports & Analytics"
        navItems={[
          { label: 'Overview', href: '/dashboard/zonal', icon: <FaChartBar /> },
          { label: 'Woredas', href: '/dashboard/zonal/woredas', icon: <FaMapMarkerAlt /> },
          { label: 'Reports', href: '/dashboard/zonal/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="space-y-6">
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

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Zonal Performance Report</h2>
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Total Farmers</p>
                  <p className="text-2xl font-bold text-gray-900">125,450</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Overall Coverage</p>
                  <p className="text-2xl font-bold text-gray-900">87%</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Distribution Rate</p>
                  <p className="text-2xl font-bold text-gray-900">82%</p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Woreda Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Woreda-A</span>
                    <span className="text-gray-600">89% coverage</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Woreda-B</span>
                    <span className="text-gray-600">85% coverage</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <span className="font-semibold text-gray-900">Woreda-C</span>
                    <span className="text-gray-600">82% coverage</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

