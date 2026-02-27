import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Copy, Landmark, Smartphone, Clock, Filter, AlertTriangle } from 'lucide-react';

export const AdminWithdrawals = () => {
  // Dummy Pending Withdrawals (API se aayega)
  const [withdrawals, setWithdrawals] = useState([
    { 
        id: 'WD-401', user: 'Rahul Singh', mobile: '9876543210', amount: 12000, 
        method: 'Bank Transfer', bank: 'HDFC Bank', acc: '501004589632', ifsc: 'HDFC0001234', date: '23 Feb, 15:30' 
    },
    { 
        id: 'WD-402', user: 'Sunil Kumar', mobile: '9988776655', amount: 500, 
        method: 'UPI', upiId: 'sunil99@ybl', date: '23 Feb, 16:15' 
    },
    { 
        id: 'WD-403', user: 'Amit Verma', mobile: '8877665544', amount: 2500, 
        method: 'Bank Transfer', bank: 'ICICI Bank', acc: '001245789632', ifsc: 'ICIC0000011', date: '23 Feb, 16:45' 
    },
  ]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };

  const handleApprove = (id) => {
    const confirm = window.confirm(`Confirm: Have you ALREADY transferred the money to the user's account?`);
    if (confirm) {
      alert(`Withdrawal ${id} marked as Success!`);
      setWithdrawals(withdrawals.filter(w => w.id !== id));
    }
  };

  const handleReject = (id) => {
    const reason = prompt("Enter reason for rejection (e.g., Incorrect Bank Details):");
    if (reason) {
      alert(`Withdrawal ${id} Rejected. Amount will be refunded to user wallet.`);
      setWithdrawals(withdrawals.filter(w => w.id !== id));
    }
  };

  return (
    <div className="animate-fade-in space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">Withdrawal Requests</h2>
          <p className="text-gray-400 text-sm">Transfer money to users and mark as completed</p>
        </div>
        <div className="flex items-center gap-3 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-lg shadow-lg">
          <div className="p-2 bg-red-500/20 rounded-full text-red-500">
            <AlertTriangle size={20} />
          </div>
          <div>
            <p className="text-[10px] text-gray-400 uppercase font-bold">Total Payout Pending</p>
            <p className="text-lg font-bold text-white">₹ 15,000</p>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-[#0a192f] border border-[#1E3A8A] rounded-lg shadow-xl overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1E3A8A]/20 border-b border-[#1E3A8A]">
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">User & Time</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Amount</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Payment Details</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E3A8A]/50">
            {withdrawals.map((item) => (
              <tr key={item.id} className="hover:bg-[#1E3A8A]/10 transition">
                {/* User & Time */}
                <td className="px-6 py-4">
                  <p className="font-bold text-white">{item.user}</p>
                  <p className="text-[10px] text-gray-500 font-mono mb-1">{item.mobile}</p>
                  <p className="text-[10px] text-[#D4AF37] flex items-center gap-1 uppercase font-bold">
                    <Clock size={12} /> {item.date}
                  </p>
                </td>
                
                {/* Amount */}
                <td className="px-6 py-4">
                  <p className="text-xl font-mono font-bold text-red-400">₹ {item.amount.toLocaleString()}</p>
                  <span className="text-[9px] text-gray-500 uppercase">ID: {item.id}</span>
                </td>

                {/* Payment Details (Dynamic for UPI/Bank) */}
                <td className="px-6 py-4">
                  {item.method === 'UPI' ? (
                    <div className="bg-[#051126] border border-[#1E3A8A] p-2 rounded-md flex justify-between items-center group">
                      <div>
                        <p className="text-[9px] text-gray-500 uppercase font-bold flex items-center gap-1">
                          <Smartphone size={10} /> UPI ID
                        </p>
                        <p className="text-sm font-mono text-white">{item.upiId}</p>
                      </div>
                      <button onClick={() => copyToClipboard(item.upiId)} className="text-gray-500 hover:text-[#D4AF37]">
                        <Copy size={16} />
                      </button>
                    </div>
                  ) : (
                    <div className="bg-[#051126] border border-[#1E3A8A] p-2 rounded-md space-y-1">
                      <p className="text-[9px] text-gray-500 uppercase font-bold flex items-center gap-1">
                        <Landmark size={10} /> {item.bank}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm font-mono text-white">{item.acc}</p>
                        <button onClick={() => copyToClipboard(item.acc)} className="text-gray-500 hover:text-[#D4AF37]">
                          <Copy size={14} />
                        </button>
                      </div>
                      <div className="flex justify-between items-center border-t border-[#1E3A8A] pt-1 mt-1">
                        <p className="text-[10px] text-[#D4AF37] font-mono">IFSC: {item.ifsc}</p>
                        <button onClick={() => copyToClipboard(item.ifsc)} className="text-gray-500 hover:text-white">
                          <Copy size={12} />
                        </button>
                      </div>
                    </div>
                  )}
                </td>

                {/* Approve / Reject Buttons */}
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-2">
                    <button 
                      onClick={() => handleApprove(item.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-green-500 text-black hover:brightness-110 rounded transition font-black text-xs uppercase"
                    >
                      <CheckCircle size={14} /> Mark Paid
                    </button>
                    <button 
                      onClick={() => handleReject(item.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/30 hover:bg-red-500 hover:text-white rounded transition font-bold text-xs uppercase"
                    >
                      <XCircle size={14} /> Reject
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {withdrawals.length === 0 && (
          <div className="p-10 text-center text-gray-500">
            <CheckCircle size={40} className="mx-auto mb-3 opacity-20" />
            <p>No pending withdrawal requests. Great job!</p>
          </div>
        )}
      </div>

    </div>
  );
};