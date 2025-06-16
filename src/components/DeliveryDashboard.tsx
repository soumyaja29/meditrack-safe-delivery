import React, { useState, useEffect } from 'react';
import { DeliveryCard } from './DeliveryCard';
import { CrossChainStatus } from './CrossChainStatus';

interface Delivery {
  id: string;
  trackingId: string;
  equipment: string;
  destination: string;
  status: 'pending' | 'in-transit' | 'delivered' | 'delayed';
  lastUpdate: string;
  chainlinkVerified: boolean;
  paymentStatus: 'pending' | 'released' | 'held';
  estimatedDelivery: string;
}

export const DeliveryDashboard = () => {
  const [deliveries, setDeliveries] = useState<Delivery[]>([
    {
      id: '1',
      trackingId: 'MT-2024-001',
      equipment: 'MRI Scanner Components',
      destination: 'St. Mary\'s Hospital, NY',
      status: 'in-transit',
      lastUpdate: '2 hours ago',
      chainlinkVerified: true,
      paymentStatus: 'pending',
      estimatedDelivery: 'Dec 18, 2024'
    },
    {
      id: '2',
      trackingId: 'MT-2024-002',
      equipment: 'Surgical Robot Parts',
      destination: 'General Hospital, CA',
      status: 'delivered',
      lastUpdate: '1 day ago',
      chainlinkVerified: true,
      paymentStatus: 'released',
      estimatedDelivery: 'Dec 16, 2024'
    },
    {
      id: '3',
      trackingId: 'MT-2024-003',
      equipment: 'X-Ray Equipment',
      destination: 'City Medical Center, TX',
      status: 'delayed',
      lastUpdate: '4 hours ago',
      chainlinkVerified: true,
      paymentStatus: 'held',
      estimatedDelivery: 'Dec 20, 2024'
    },
    {
      id: '4',
      trackingId: 'MT-2024-004',
      equipment: 'Ventilator Components',
      destination: 'Metro Health, FL',
      status: 'pending',
      lastUpdate: '30 minutes ago',
      chainlinkVerified: false,
      paymentStatus: 'pending',
      estimatedDelivery: 'Dec 22, 2024'
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setDeliveries(prev => prev.map(delivery => ({
        ...delivery,
        lastUpdate: Math.random() > 0.7 ? 'Just now' : delivery.lastUpdate,
        chainlinkVerified: Math.random() > 0.3 ? true : delivery.chainlinkVerified
      })));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <CrossChainStatus />
      
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Live Delivery Tracking</h2>
          <div className="flex items-center space-x-2 px-3 py-1 bg-green-100 text-green-800 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Real-time Updates</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {deliveries.map((delivery) => (
            <DeliveryCard key={delivery.id} delivery={delivery} />
          ))}
        </div>
      </div>
    </div>
  );
};
