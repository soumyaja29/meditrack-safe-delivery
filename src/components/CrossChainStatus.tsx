
import React from 'react';
import { Activity, CheckCircle } from 'lucide-react';

export const CrossChainStatus = () => {
  const chains = [
    { name: 'Ethereum', status: 'active', lastSync: '2 min ago' },
    { name: 'Polygon', status: 'active', lastSync: '1 min ago' },
    { name: 'Hospital Chain', status: 'active', lastSync: '30 sec ago' },
    { name: 'Procurement Portal', status: 'syncing', lastSync: 'Now' }
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Cross-Chain Synchronization</h3>
        <div className="flex items-center space-x-2 text-green-600">
          <Activity className="w-4 h-4" />
          <span className="text-sm font-medium">CCIP Active</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {chains.map((chain, index) => (
          <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="flex-shrink-0">
              {chain.status === 'active' ? (
                <CheckCircle className="w-5 h-5 text-green-500" />
              ) : (
                <div className="w-5 h-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900">{chain.name}</p>
              <p className="text-xs text-gray-500">Synced {chain.lastSync}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
