import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Eye, ExternalLink, Clock, Filter, DollarSign } from 'lucide-react';

export const AdminDeposits = () => {
  // Dummy Pending Deposits (API se aayega)
  const [deposits, setDeposits] = useState([
    { id: 'DP-901', user: 'Sunil Jhunjhunu', mobile: '9876543210', amount: 5000, utr: '325148965874', method: 'UPI', date: '23 Feb, 14:30', status: 'pending' },
    { id: 'DP-902', user: 'Rahul Kumar', mobile: '9988776655', amount: 1000, utr: '445218963251', method: 'G-Pay', date: '23 Feb, 14:45', status: 'pending' },
    { id: 'DP-903', user: 'Amit Sharma', mobile: '8877665544', amount: 10000, utr: '556214789632', method: 'PhonePe', date: '23 Feb, 15:10', status: 'pending' },
  ]);

  const handleApprove = (id) => {
    const confirm = window.confirm(`Are you sure you want to APPROVE deposit ${id}? This will add money to the user's wallet.`);
    if (confirm) {
      alert(`Deposit ${id} Approved! Wallet balance updated.`);
      setDeposits(deposits.filter(d => d.id !== id)); // List se hata do temporary
    }
  };

  const handleReject = (id) => {
    const reason = prompt("Enter rejection reason (e.g., Wrong UTR, Payment not received):");
    if (reason) {
      alert(`Deposit ${id} Rejected. Reason: ${reason}`);
      setDeposits(deposits.filter(d => d.id !== id));
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Deposit Requests</h2>
          <p className="text-gray-400 text-sm">Review and approve pending user payments</p>
        </div>
        <div className="flex items-center gap-3 bg-[#1E3A8A]/20 border border-[#1E3A8A] px-4 py-2 rounded-lg shadow-lg">
          <div className="p-2 bg-[#D4AF37]/20 rounded-full">
            <DollarSign size={20} className="gold-text" />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">Total Pending</p>
            <p className="text-lg font-bold text-white">₹ 16,000</p>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-[#0a192f] border border-[#1E3A8A] p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by User or UTR Number..." 
            className="w-full bg-[#051126] border border-[#1E3A8A] text-white pl-10 pr-4 py-2.5 rounded-md focus:outline-none focus:border-[#D4AF37] transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-2 bg-[#1E3A8A]/30 border border-[#1E3A8A] text-gray-300 rounded-md hover:text-[#D4AF37] transition">
          <Filter size={18} /> Filter by Date
        </button>
      </div>

      {/* Deposits Table */}
      <div className="bg-[#0a192f] border border-[#1E3A8A] rounded-lg shadow-xl overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1E3A8A]/20 border-b border-[#1E3A8A]">
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">User Details</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">UTR / Ref No.</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Time</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E3A8A]/50">
            {deposits.map((item) => (
              <tr key={item.id} className="hover:bg-[#1E3A8A]/10 transition">
                {/* User Details */}
                <td className="px-6 py-4">
                  <p className="font-bold text-white">{item.user}</p>
                  <p className="text-[10px] text-gray-500 font-mono">{item.mobile} | {item.method}</p>
                </td>
                
                {/* Amount */}
                <td className="px-6 py-4">
                  <p className="text-lg font-mono font-bold text-green-400">₹ {item.amount.toLocaleString()}</p>
                </td>

                {/* UTR */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <p className="font-mono text-sm text-[#D4AF37] bg-[#D4AF37]/10 px-2 py-1 rounded">{item.utr}</p>
                    <button className="text-gray-500 hover:text-white transition" title="Copy UTR">
                      <ExternalLink size={14} />
                    </button>
                  </div>
                </td>

                {/* Time */}
                <td className="px-6 py-4 text-gray-400 text-sm">
                  <div className="flex items-center gap-1">
                    <Clock size={14} /> {item.date}
                  </div>
                </td>

                {/* Approve / Reject Buttons */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-3">
                    <button 
                      onClick={() => handleApprove(item.id)}
                      className="flex items-center gap-1 px-4 py-2 bg-green-500/10 text-green-500 border border-green-500/30 hover:bg-green-500 hover:text-white rounded transition font-bold text-xs uppercase"
                    >
                      <CheckCircle size={14} /> Approve
                    </button>
                    <button 
                      onClick={() => handleReject(item.id)}
                      className="flex items-center gap-1 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500 hover:text-white rounded transition font-bold text-xs uppercase"
                    >
                      <XCircle size={14} /> Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {deposits.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            <CheckCircle size={40} className="mx-auto mb-3 opacity-20" />
            <p>No pending deposit requests. All caught up!</p>
          </div>
        )}
      </div>

    </div>
  );
};