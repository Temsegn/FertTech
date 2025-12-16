'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaUsers, FaChartBar, FaCog, FaShieldAlt, FaDatabase, FaSave } from 'react-icons/fa';
import { useState } from 'react';

export default function AdminSettingsPage() {
  const [settings, setSettings] = useState({
    seasonName: '2024 Main Season',
    fertilizerPerHectare: 50,
    seedPerHectare: 20,
    chemicalsPerHectare: 2,
    maxLandSize: 10,
    qrValidityDays: 180,
    enableSMS: false,
    enableGeotagging: true,
  });

  const handleSave = () => {
    alert('Settings saved successfully!');
  };

  return (
    <ProtectedRoute path="/dashboard/admin">
      <DashboardLayout
        title="System Settings"
        navItems={[
          { label: 'Overview', href: '/dashboard/admin', icon: <FaChartBar /> },
          { label: 'Users', href: '/dashboard/admin/users', icon: <FaUsers /> },
          { label: 'Settings', href: '/dashboard/admin/settings', icon: <FaCog /> },
          { label: 'Audit Logs', href: '/dashboard/admin/audit', icon: <FaDatabase /> },
        ]}
      >
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Season Configuration</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Season Name</label>
                <input
                  type="text"
                  value={settings.seasonName}
                  onChange={(e) => setSettings({ ...settings, seasonName: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Fertilizer per Hectare (kg)</label>
                  <input
                    type="number"
                    value={settings.fertilizerPerHectare}
                    onChange={(e) => setSettings({ ...settings, fertilizerPerHectare: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Seed per Hectare (kg)</label>
                  <input
                    type="number"
                    value={settings.seedPerHectare}
                    onChange={(e) => setSettings({ ...settings, seedPerHectare: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Chemicals per Hectare (kg)</label>
                  <input
                    type="number"
                    value={settings.chemicalsPerHectare}
                    onChange={(e) => setSettings({ ...settings, chemicalsPerHectare: parseInt(e.target.value) })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Maximum Land Size (hectares)</label>
                <input
                  type="number"
                  value={settings.maxLandSize}
                  onChange={(e) => setSettings({ ...settings, maxLandSize: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">QR Code Validity (days)</label>
                <input
                  type="number"
                  value={settings.qrValidityDays}
                  onChange={(e) => setSettings({ ...settings, qrValidityDays: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Feature Flags</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">SMS Notifications</p>
                  <p className="text-sm text-gray-600">Enable SMS notifications for farmers</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableSMS}
                    onChange={(e) => setSettings({ ...settings, enableSMS: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">Geo-tagging</p>
                  <p className="text-sm text-gray-600">Enable location tracking for distributions</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={settings.enableGeotagging}
                    onChange={(e) => setSettings({ ...settings, enableGeotagging: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              <FaSave />
              <span>Save Settings</span>
            </button>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

