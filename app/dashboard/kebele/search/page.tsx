'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import DashboardLayout from '@/components/DashboardLayout';
import { FaUserPlus, FaQrcode, FaSearch, FaUsers, FaChartBar, FaUser } from 'react-icons/fa';
import { useState } from 'react';

export default function SearchFarmerPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const mockFarmers = [
    {
      id: 'F12345',
      name: 'Alemayehu Bekele',
      registrationNumber: 'REG-12345',
      landSize: '2.5',
      kebele: 'Kebele-01',
      qrCode: 'FARMER-12345-ABCD-EFGH',
      status: 'Active',
      remainingFertilizer: 75,
      remainingSeed: 30,
    },
    {
      id: 'F12346',
      name: 'Tigist Haile',
      registrationNumber: 'REG-12346',
      landSize: '1.8',
      kebele: 'Kebele-01',
      qrCode: 'FARMER-12346-WXYZ-ABCD',
      status: 'Active',
      remainingFertilizer: 90,
      remainingSeed: 36,
    },
    {
      id: 'F12347',
      name: 'Mulugeta Tesfaye',
      registrationNumber: 'REG-12347',
      landSize: '3.2',
      kebele: 'Kebele-02',
      qrCode: 'FARMER-12347-EFGH-IJKL',
      status: 'Active',
      remainingFertilizer: 160,
      remainingSeed: 64,
    },
  ];

  const handleSearch = () => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const results = mockFarmers.filter(
        (farmer) =>
          farmer.name.toLowerCase().includes(query) ||
          farmer.registrationNumber.toLowerCase().includes(query) ||
          farmer.id.toLowerCase().includes(query)
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <ProtectedRoute path="/dashboard/kebele">
      <DashboardLayout
        title="Search Farmer"
        navItems={[
          { label: 'Dashboard', href: '/dashboard/kebele', icon: <FaUsers /> },
          { label: 'Register Farmer', href: '/dashboard/kebele/register', icon: <FaUserPlus /> },
          { label: 'Replace QR', href: '/dashboard/kebele/replace-qr', icon: <FaQrcode /> },
          { label: 'Search Farmer', href: '/dashboard/kebele/search', icon: <FaSearch /> },
          { label: 'Reports', href: '/dashboard/kebele/reports', icon: <FaChartBar /> },
        ]}
      >
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Search for Farmer</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Enter farmer name, registration number, or ID"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                onClick={handleSearch}
                disabled={isSearching}
                className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
              >
                {isSearching ? 'Searching...' : <><FaSearch /> Search</>}
              </button>
            </div>
          </div>

          {searchResults.length > 0 && (
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">
                  Search Results ({searchResults.length})
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {searchResults.map((farmer) => (
                  <div key={farmer.id} className="px-6 py-4 hover:bg-gray-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <FaUser className="text-primary-600" />
                          <h4 className="font-semibold text-gray-900">{farmer.name}</h4>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-semibold">
                            {farmer.status}
                          </span>
                        </div>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>
                            <span className="font-medium">Registration Number:</span> {farmer.registrationNumber}
                          </div>
                          <div>
                            <span className="font-medium">Farmer ID:</span> {farmer.id}
                          </div>
                          <div>
                            <span className="font-medium">Land Size:</span> {farmer.landSize} hectares
                          </div>
                          <div>
                            <span className="font-medium">Kebele:</span> {farmer.kebele}
                          </div>
                          <div>
                            <span className="font-medium">QR Code:</span>
                            <span className="font-mono text-xs ml-2">{farmer.qrCode}</span>
                          </div>
                          <div>
                            <span className="font-medium">Remaining:</span> {farmer.remainingFertilizer}kg fertilizer, {farmer.remainingSeed}kg seed
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {searchQuery && searchResults.length === 0 && !isSearching && (
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <FaSearch className="text-4xl text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No farmers found matching your search.</p>
            </div>
          )}

          {!searchQuery && (
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
              <p className="text-sm text-gray-700">
                <strong>Tip:</strong> You can search by farmer name, registration number, or farmer ID.
              </p>
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}

