'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaChartBar, FaMapMarkerAlt, FaExclamationTriangle, FaBell, FaCheckCircle } from 'react-icons/fa';

export default function WoredaAlertsPage() {
  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'Stock Mismatch',
      description: 'Kebele-05: Inventory discrepancy detected between records and physical stock',
      kebele: 'Kebele-05',
      severity: 'medium',
      timestamp: '2 hours ago',
      status: 'active',
    },
    {
      id: 2,
      type: 'critical',
      title: 'High QR Replacements',
      description: 'Kebele-08: 15 QR code replacements in the last 24 hours - potential abuse detected',
      kebele: 'Kebele-08',
      severity: 'high',
      timestamp: '5 hours ago',
      status: 'active',
    },
    {
      id: 3,
      type: 'info',
      title: 'Low Stock Alert',
      description: 'Kebele-12: Fertilizer stock below 20% threshold',
      kebele: 'Kebele-12',
      severity: 'low',
      timestamp: '1 day ago',
      status: 'active',
    },
    {
      id: 4,
      type: 'warning',
      title: 'Unusual Distribution Time',
      description: 'Kebele-03: Multiple distributions recorded outside normal hours',
      kebele: 'Kebele-03',
      severity: 'medium',
      timestamp: '2 days ago',
      status: 'resolved',
    },
  ];

  const getAlertColor = (type: string) => {
    switch (type) {
      case 'critical': return 'bg-red-50 border-red-500 text-red-800';
      case 'warning': return 'bg-yellow-50 border-yellow-500 text-yellow-800';
      case 'info': return 'bg-blue-50 border-blue-500 text-blue-800';
      default: return 'bg-gray-50 border-gray-500 text-gray-800';
    }
  };

  const activeAlerts = alerts.filter(a => a.status === 'active');
  const resolvedAlerts = alerts.filter(a => a.status === 'resolved');

  return (
    <ProtectedRoute path="/dashboard/woreda">
      <DashboardLayout
        title="Alerts & Issues"
        navItems={[
          { label: 'Overview', href: '/dashboard/woreda', icon: <FaChartBar /> },
          { label: 'Kebeles', href: '/dashboard/woreda/kebeles', icon: <FaMapMarkerAlt /> },
          { label: 'Alerts', href: '/dashboard/woreda/alerts', icon: <FaExclamationTriangle /> },
        ]}
      >
        <div className="space-y-6">
          {/* Summary */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaBell className="text-3xl text-red-600" />
                <span className="text-2xl font-bold text-gray-900">{activeAlerts.length}</span>
              </div>
              <p className="text-gray-600">Active Alerts</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaExclamationTriangle className="text-3xl text-yellow-600" />
                <span className="text-2xl font-bold text-gray-900">{alerts.filter(a => a.severity === 'high').length}</span>
              </div>
              <p className="text-gray-600">Critical Issues</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-2">
                <FaCheckCircle className="text-3xl text-green-600" />
                <span className="text-2xl font-bold text-gray-900">{resolvedAlerts.length}</span>
              </div>
              <p className="text-gray-600">Resolved</p>
            </div>
          </div>

          {/* Active Alerts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Active Alerts</h2>
            <div className="space-y-4">
              {activeAlerts.map((alert) => (
                <div key={alert.id} className={`border-l-4 p-4 rounded ${getAlertColor(alert.type)}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <FaExclamationTriangle />
                        <h3 className="font-semibold">{alert.title}</h3>
                        <span className="px-2 py-1 bg-white rounded text-xs font-semibold">
                          {alert.kebele}
                        </span>
                      </div>
                      <p className="text-sm mb-2">{alert.description}</p>
                      <p className="text-xs opacity-75">{alert.timestamp}</p>
                    </div>
                    <button className="ml-4 px-4 py-2 bg-white rounded-lg hover:bg-gray-100 transition-colors text-sm font-semibold">
                      Resolve
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resolved Alerts */}
          {resolvedAlerts.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Resolved Alerts</h2>
              <div className="space-y-4">
                {resolvedAlerts.map((alert) => (
                  <div key={alert.id} className="border-l-4 border-gray-300 bg-gray-50 p-4 rounded">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <FaCheckCircle className="text-gray-600" />
                          <h3 className="font-semibold text-gray-700">{alert.title}</h3>
                          <span className="px-2 py-1 bg-gray-200 rounded text-xs font-semibold">
                            {alert.kebele}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{alert.description}</p>
                        <p className="text-xs text-gray-500">{alert.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

