
import React from 'react';
import { DollarSign, Clock, CheckCircle, AlertTriangle } from 'lucide-react';

export const PaymentStatus = () => {
  const payments = [
    {
      id: 'PAY-001',
      trackingId: 'MT-2024-001',
      amount: '$125,000',
      status: 'pending',
      condition: 'Awaiting delivery confirmation',
      supplier: 'MedTech Solutions Inc.',
      dueDate: 'On delivery',
      smartContract: '0x742d35...cc73'
    },
    {
      id: 'PAY-002',
      trackingId: 'MT-2024-002',
      amount: '$89,500',
      status: 'released',
      condition: 'Delivered and verified',
      supplier: 'Advanced Medical Systems',
      dueDate: 'Completed',
      smartContract: '0x8f3a42...9b51'
    },
    {
      id: 'PAY-003',
      trackingId: 'MT-2024-003',
      amount: '$67,200',
      status: 'held',
      condition: 'Delivery delayed - investigating',
      supplier: 'Precision Healthcare',
      dueDate: 'On hold',
      smartContract: '0x1c9d78...4e2a'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'released':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'held':
        return <AlertTriangle className="w-5 h-5 text-red-500" />;
      default:
        return <Clock className="w-5 h-5 text-yellow-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'released': return 'bg-green-100 text-green-800';
      case 'held': return 'bg-red-100 text-red-800';
      default: return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Smart Contract Payments</h2>
          <div className="flex items-center space-x-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
            <DollarSign className="w-4 h-4" />
            <span className="text-sm font-medium">$281,700 Total</span>
          </div>
        </div>

        <div className="space-y-4">
          {payments.map((payment) => (
            <div key={payment.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    {getStatusIcon(payment.status)}
                    <h3 className="text-lg font-semibold text-gray-900">
                      {payment.supplier}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payment.status)}`}>
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Tracking ID</p>
                      <p className="font-medium">{payment.trackingId}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Amount</p>
                      <p className="font-medium text-lg">{payment.amount}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Condition</p>
                      <p className="font-medium">{payment.condition}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Smart Contract</p>
                      <p className="font-mono text-xs">{payment.smartContract}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-xl text-white p-6">
        <h3 className="text-xl font-bold mb-2">Automated Payment Benefits</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Delivery-triggered payments</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Zero manual intervention</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4" />
            <span>Fraud prevention</span>
          </div>
        </div>
      </div>
    </div>
  );
};
