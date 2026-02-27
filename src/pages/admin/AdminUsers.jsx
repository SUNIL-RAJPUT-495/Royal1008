import React, { useState } from 'react';
import { Search, Edit2, ShieldAlert, ShieldCheck, Trash2, Eye, UserPlus, Filter } from 'lucide-react';

export const AdminUsers = () => {
  // Dummy Users Data (API se backend se aayega)
  const [users, setUsers] = useState([
    { id: 'U101', name: 'Sunil Jhunjhunu', email: 'sunil@example.com', mobile: '9876543210', balance: 5420, status: 'active', joined: '20 Feb 2026' },
    { id: 'U102', name: 'Rahul Kumar', email: 'rahul@gmail.com', mobile: '9988776655', balance: 120, status: 'blocked', joined: '18 Feb 2026' },
    { id: 'U103', name: 'Amit Sharma', email: 'amit@outlook.com', mobile: '8877665544', balance: 15400, status: 'active', joined: '15 Feb 2026' },
    { id: 'U104', name: 'Priya Verma', email: 'priya@web.com', mobile: '7766554433', balance: 0, status: 'active', joined: '10 Feb 2026' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Status Badge Helper
  const getStatusBadge = (status) => {
    if (status === 'active') {
      return <span className="flex items-center gap-1 text-[10px] font-bold text-green-500 bg-green-500/10 border border-green-500/30 px-2 py-1 rounded-full uppercase tracking-tighter"><ShieldCheck size={12} /> Active</span>;
    }
    return <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-500/10 border border-red-500/30 px-2 py-1 rounded-full uppercase tracking-tighter"><ShieldAlert size={12} /> Blocked</span>;
  };

  return (
    <div className="animate-fade-in space-y-6">
      
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white uppercase tracking-wider">User Management</h2>
          <p className="text-gray-400 text-sm">Total registered players: {users.length}</p>
        </div>
        <button className="gold-btn py-2 px-6 text-sm w-auto flex items-center gap-2">
          <UserPlus size={18} /> Add New User
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-[#0a192f] border border-[#1E3A8A] p-4 rounded-lg shadow-lg flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by name, mobile or email..." 
            className="w-full bg-[#051126] border border-[#1E3A8A] text-white pl-10 pr-4 py-2.5 rounded-md focus:outline-none focus:border-[#D4AF37] transition-all"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-2 bg-[#1E3A8A]/30 border border-[#1E3A8A] text-gray-300 rounded-md hover:text-[#D4AF37] transition">
          <Filter size={18} /> Filter
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-[#0a192f] border border-[#1E3A8A] rounded-lg shadow-xl overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-[#1E3A8A]/20 border-b border-[#1E3A8A]">
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">User Details</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-center">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Wallet Balance</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">Joined On</th>
              <th className="px-6 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#1E3A8A]/50">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-[#1E3A8A]/10 transition">
                {/* User Info */}
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1E3A8A]/50 flex items-center justify-center font-bold text-[#D4AF37] border border-[#D4AF37]/30">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-white">{user.name}</p>
                      <p className="text-[10px] text-gray-500 font-mono">{user.mobile} | {user.email}</p>
                    </div>
                  </div>
                </td>
                {/* Status */}
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center">
                    {getStatusBadge(user.status)}
                  </div>
                </td>
                {/* Balance */}
                <td className="px-6 py-4">
                  <p className="font-mono font-bold text-white">₹ {user.balance.toLocaleString()}</p>
                </td>
                {/* Joined Date */}
                <td className="px-6 py-4 text-gray-400 text-sm">
                  {user.joined}
                </td>
                {/* Actions */}
                <td className="px-6 py-4">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-2 bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white rounded transition" title="View Profile">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black rounded transition" title="Edit User">
                      <Edit2 size={16} />
                    </button>
                    <button className="p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded transition" title="Delete User">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination Placeholder */}
        <div className="px-6 py-4 bg-[#051126]/50 flex items-center justify-between border-t border-[#1E3A8A]">
          <p className="text-xs text-gray-500">Showing 1 to {users.length} of {users.length} entries</p>
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-[#1E3A8A]/30 border border-[#1E3A8A] text-xs rounded disabled:opacity-50">Prev</button>
            <button className="px-3 py-1 bg-[#D4AF37] text-black text-xs font-bold rounded">1</button>
            <button className="px-3 py-1 bg-[#1E3A8A]/30 border border-[#1E3A8A] text-xs rounded">Next</button>
          </div>
        </div>
      </div>

    </div>
  );
};