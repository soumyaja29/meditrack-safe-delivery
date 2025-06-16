
import React from 'react';
import { Shield, Clock, MapPin, AlertTriangle } from 'lucide-react';

interface DeliveryCardProps {
  delivery: {
    id: string;
    trackingId: string;
    equipment: string;
    destination: string;
    status: 'pending' | 'in-transit' | 'delivered' | 'delayed';
    lastUpdate: string;
    chainlinkVerified: boolean;
    paymentStatus: 'pending' | 'released' | 'held';
    estimatedDelivery: string;
  };
}

export const DeliveryCard: React.FC<DeliveryCardProps> = ({ delivery }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800 border-green-200';
      case 'in-transit': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'delayed': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'released': return 'bg-green-100 text-green-800';
      case 'held': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {delivery.equipment}
          </h3>
          <p className="text-sm text-gray-600">{delivery.trackingId}</p>
        </div>
        
        <div className="flex items-center space-x-2">
          {delivery.chainlinkVerified ? (
            <div className="flex items-center space-x-1 px-2 py-1 bg-green-100 text-green-800 rounded-full">
              <Shield className="w-3 h-3" />
              <span className="text-xs font-medium">Verified</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full">
              <AlertTriangle className="w-3 h-3" />
              <span className="text-xs font-medium">Pending</span>
            </div>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">{delivery.destination}</span>
        </div>

        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(delivery.status)}`}>
            {delivery.status.charAt(0).toUpperCase() + delivery.status.slice(1)}
          </span>
          
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPaymentStatusColor(delivery.paymentStatus)}`}>
            Payment: {delivery.paymentStatus}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Updated {delivery.lastUpdate}</span>
          </div>
          <span>ETA: {delivery.estimatedDelivery}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between">
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
            View Details
          </button>
          <button className="text-gray-500 hover:text-gray-700 text-sm">
            Track on Chain
          </button>
        </div>
      </div>
    </div>
  );
};
