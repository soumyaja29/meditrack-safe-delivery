
import React from 'react';
import { Activity, Shield, Timer, FileCheck } from 'lucide-react';

export const DeliveryStats = () => {
  const stats = [
    {
      title: 'Active Deliveries',
      value: '24',
      change: '+3 from yesterday',
      icon: Activity,
      color: 'blue'
    },
    {
      title: 'On-Chain Records',
      value: '1,247',
      change: 'All verified',
      icon: Shield,
      color: 'green'
    },
    {
      title: 'Avg. Delivery Time',
      value: '2.4 days',
      change: '-0.3 days improved',
      icon: Timer,
      color: 'purple'
    },
    {
      title: 'Compliance Rate',
      value: '99.8%',
      change: 'Audit passed',
      icon: FileCheck,
      color: 'emerald'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-500 text-blue-600',
    green: 'bg-green-500 text-green-600',
    purple: 'bg-purple-500 text-purple-600',
    emerald: 'bg-emerald-500 text-emerald-600'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-lg bg-opacity-10 ${colorClasses[stat.color]}`}>
              <stat.icon className={`w-6 h-6 ${colorClasses[stat.color].split(' ')[1]}`} />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
            <p className="text-sm text-gray-600 mb-2">{stat.title}</p>
            <p className="text-xs text-gray-500">{stat.change}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
