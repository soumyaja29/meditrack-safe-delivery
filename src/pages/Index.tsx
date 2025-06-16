
import React, { useState, useEffect } from 'react';
import { DeliveryDashboard } from '../components/DeliveryDashboard';
import { Header } from '../components/Header';
import { DeliveryStats } from '../components/DeliveryStats';
import { AuditPanel } from '../components/AuditPanel';
import { PaymentStatus } from '../components/PaymentStatus';

const Index = () => {
  const [selectedTab, setSelectedTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Medical Equipment Delivery Tracker
          </h1>
          <p className="text-lg text-gray-600">
            Secure, transparent, and tamper-proof medical equipment logistics
          </p>
        </div>

        <DeliveryStats />

        <div className="mt-8 mb-6">
          <nav className="flex space-x-1 bg-white rounded-lg p-1 shadow-sm border">
            {[
              { id: 'dashboard', label: 'Live Tracking' },
              { id: 'payments', label: 'Smart Payments' },
              { id: 'audit', label: 'Audit Trail' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`flex-1 py-3 px-4 rounded-md font-medium transition-all ${
                  selectedTab === tab.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="space-y-8">
          {selectedTab === 'dashboard' && <DeliveryDashboard />}
          {selectedTab === 'payments' && <PaymentStatus />}
          {selectedTab === 'audit' && <AuditPanel />}
        </div>
      </main>
    </div>
  );
};

export default Index;
