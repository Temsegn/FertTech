'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaQrcode, FaWarehouse, FaHistory, FaBarcode, FaExclamationTriangle, FaCheckCircle } from 'react-icons/fa';
import { useState } from 'react';

export default function InventoryPage() {
  const [inventory, setInventory] = useState({
    fertilizer: { total: 2450, distributed: 1200, remaining: 1250, percentage: 51 },
    seed: { total: 980, distributed: 450, remaining: 530, percentage: 54 },
    chemicals: { total: 500, distributed: 200, remaining: 300, percentage: 60 },
  });

  const lowStockItems = [
    { name: 'Fertilizer Type A', current: 50, threshold: 100, status: 'low' },
    { name: 'Seed Type B', current: 30, threshold: 50, status: 'critical' },
  ];

  return (
    <ProtectedRoute path="/dashboard/distributor">
      <DashboardLayout
        title="Inventory Management"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/distributor', icon: <FaQrcode /> },
          { label: 'Scan QR', href: '/dashboard/distributor/scan', icon: <FaBarcode /> },
          { label: 'Inventory', href: '/dashboard/distributor/inventory', icon: <FaWarehouse /> },
          { label: 'History', href: '/dashboard/distributor/history', icon: <FaHistory /> },
        ]}
      >
        <div className="space-y-6">
          {/* Stock Overview */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <FaWarehouse className="text-3xl text-primary-600" />
                <span className="text-2xl font-bold text-gray-900">Fertilizer</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Stock:</span>
                  <span className="font-semibold">{inventory.fertilizer.total} kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Distributed:</span>
                  <span className="font-semibold">{inventory.fertilizer.distributed} kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="font-semibold text-primary-600">{inventory.fertilizer.remaining} kg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: `${inventory.fertilizer.percentage}%` }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <FaWarehouse className="text-3xl text-green-600" />
                <span className="text-2xl font-bold text-gray-900">Seed</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Stock:</span>
                  <span className="font-semibold">{inventory.seed.total} kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Distributed:</span>
                  <span className="font-semibold">{inventory.seed.distributed} kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="font-semibold text-green-600">{inventory.seed.remaining} kg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: `${inventory.seed.percentage}%` }}></div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <FaWarehouse className="text-3xl text-blue-600" />
                <span className="text-2xl font-bold text-gray-900">Chemicals</span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Stock:</span>
                  <span className="font-semibold">{inventory.chemicals.total} kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Distributed:</span>
                  <span className="font-semibold">{inventory.chemicals.distributed} kg</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Remaining:</span>
                  <span className="font-semibold text-blue-600">{inventory.chemicals.remaining} kg</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${inventory.chemicals.percentage}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Low Stock Alerts */}
          {lowStockItems.length > 0 && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2 mb-4">
                <FaExclamationTriangle className="text-yellow-600" />
                <h3 className="text-lg font-semibold text-gray-900">Low Stock Alerts</h3>
              </div>
              <div className="space-y-3">
                {lowStockItems.map((item, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${item.status === 'critical' ? 'bg-red-50 border-red-500' : 'bg-yellow-50 border-yellow-500'}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">Current: {item.current} kg | Threshold: {item.threshold} kg</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-sm font-semibold ${item.status === 'critical' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}`}>
                        {item.status === 'critical' ? 'Critical' : 'Low'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Stock History */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Stock Movements</h3>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Stock Received</p>
                    <p className="text-sm text-gray-600">Fertilizer: +500 kg</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Distribution</p>
                    <p className="text-sm text-gray-600">Fertilizer: -50 kg, Seed: -20 kg</p>
                  </div>
                </div>
                <span className="text-xs text-gray-500">5 hours ago</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <FaCheckCircle className="text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Stock Received</p>
                    <p className="text-sm text-gray-600">Seed: +200 kg</p>
                  </div>
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

