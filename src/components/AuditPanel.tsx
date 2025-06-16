import React, { useState } from 'react';
import { FileCheck, Shield, Calendar, AlertTriangle, Clock } from 'lucide-react';

export const AuditPanel = () => {
  const [selectedAudit, setSelectedAudit] = useState(null);

  const auditRecords = [
    {
      id: 'AUD-001',
      trackingId: 'MT-2024-002',
      equipment: 'Surgical Robot Parts',
      auditType: 'Random VRF Selection',
      status: 'Passed',
      auditor: 'FDA Compliance Team',
      date: '2024-12-15',
      findings: ['All documentation complete', 'Temperature logs verified', 'Chain of custody intact'],
      riskLevel: 'Low'
    },
    {
      id: 'AUD-002',
      trackingId: 'MT-2024-001',
      equipment: 'MRI Scanner Components',
      auditType: 'Scheduled Compliance',
      status: 'In Progress',
      auditor: 'Internal Quality Team',
      date: '2024-12-16',
      findings: ['Pending delivery confirmation'],
      riskLevel: 'Medium'
    },
    {
      id: 'AUD-003',
      trackingId: 'MT-2024-003',
      equipment: 'X-Ray Equipment',
      auditType: 'Incident-Triggered',
      status: 'Action Required',
      auditor: 'External Auditor',
      date: '2024-12-16',
      findings: ['Delivery delay requires investigation', 'Temperature excursion detected'],
      riskLevel: 'High'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Passed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-blue-100 text-blue-800';
      case 'Action Required': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'text-green-600';
      case 'Medium': return 'text-yellow-600';
      case 'High': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Audit Trail & Compliance</h2>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Generate VRF Audit
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <FileCheck className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-900">Compliance Rate</span>
            </div>
            <p className="text-2xl font-bold text-green-600">99.8%</p>
            <p className="text-sm text-green-700">All audits passing</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span className="font-semibold text-blue-900">VRF Audits</span>
            </div>
            <p className="text-2xl font-bold text-blue-600">12</p>
            <p className="text-sm text-blue-700">This month</p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <div className="flex items-center space-x-2 mb-2">
              <Calendar className="w-5 h-5 text-purple-600" />
              <span className="font-semibold text-purple-900">Avg. Resolution</span>
            </div>
            <p className="text-2xl font-bold text-purple-600">2.1 days</p>
            <p className="text-sm text-purple-700">Industry leading</p>
          </div>
        </div>

        <div className="space-y-4">
          {auditRecords.map((audit) => (
            <div key={audit.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    {audit.equipment}
                  </h3>
                  <p className="text-sm text-gray-600">{audit.trackingId} • {audit.auditType}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(audit.status)}`}>
                    {audit.status}
                  </span>
                  <span className={`text-sm font-medium ${getRiskColor(audit.riskLevel)}`}>
                    {audit.riskLevel} Risk
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-3">
                <div>
                  <p className="text-gray-500">Auditor</p>
                  <p className="font-medium">{audit.auditor}</p>
                </div>
                <div>
                  <p className="text-gray-500">Audit Date</p>
                  <p className="font-medium">{audit.date}</p>
                </div>
              </div>

              <div>
                <p className="text-gray-500 text-sm mb-2">Key Findings</p>
                <ul className="space-y-1">
                  {audit.findings.map((finding, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      {audit.status === 'Passed' ? (
                        <FileCheck className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      ) : audit.status === 'Action Required' ? (
                        <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                      ) : (
                        <Clock className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      )}
                      <span className="text-sm text-gray-700">{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white p-6">
        <h3 className="text-xl font-bold mb-2">Provably Fair Auditing</h3>
        <p className="text-purple-100 mb-4">
          Chainlink VRF ensures completely random, unbiased selection of shipments for quality audits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span>Cryptographically secure randomness</span>
          </div>
          <div className="flex items-center space-x-2">
            <FileCheck className="w-4 h-4" />
            <span>Immutable audit trail</span>
          </div>
        </div>
      </div>
    </div>
  );
};
