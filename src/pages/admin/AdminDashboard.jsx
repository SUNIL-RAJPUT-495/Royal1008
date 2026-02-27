import React from 'react';
import { 
  Users, DollarSign, Activity, TrendingUp, TrendingDown, 
  BarChart3, PieChart, ArrowUpRight, ArrowDownRight, 
  Trophy, AlertTriangle, Wallet 
} from 'lucide-react';

export const AdminDashboard = () => {
  return (
    <div className="animate-fade-in space-y-6 pb-10">
      
      {/* Header with Quick Refresh */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <BarChart3 className="gold-text" /> Real-Time Analytics
          </h2>
          <p className="text-xs text-gray-500 uppercase font-bold tracking-widest mt-1">Status: Live Monitoring Active</p>
        </div>
        <div className="flex gap-3">
            <span className="flex items-center gap-2 bg-green-500/10 text-green-500 border border-green-500/30 px-3 py-1.5 rounded-sm text-xs font-bold animate-pulse">
                ● LIVE SERVER
            </span>
        </div>
      </div>

      {/* ========================================== */}
      {/* 1. TOP POWER STATS (THE NUMBERS THAT MATTER) */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        
        {/* Total Collection */}
        <div className="card-bg border sub-border p-5 rounded-lg shadow-xl relative overflow-hidden group">
          <div className="absolute right-[-10px] top-[-10px] opacity-5 group-hover:scale-110 transition-transform">
            <Wallet size={80} />
          </div>
          <p className="text-xs text-gray-400 uppercase font-black mb-1">Total Deposits (24h)</p>
          <h3 className="text-2xl font-black text-white">₹ 1,45,000</h3>
          <p className="text-[10px] text-green-500 flex items-center gap-1 mt-2 font-bold">
            <TrendingUp size={12} /> +12.5% from yesterday
          </p>
        </div>

        {/* Total Payouts */}
        <div className="card-bg border sub-border p-5 rounded-lg shadow-xl relative overflow-hidden group">
           <div className="absolute right-[-10px] top-[-10px] opacity-5 group-hover:scale-110 transition-transform text-red-500">
            <ArrowUpRight size={80} />
          </div>
          <p className="text-xs text-gray-400 uppercase font-black mb-1">Total Withdrawals</p>
          <h3 className="text-2xl font-black text-white">₹ 82,400</h3>
          <p className="text-[10px] text-red-500 flex items-center gap-1 mt-2 font-bold">
            <TrendingDown size={12} /> -5.2% from yesterday
          </p>
        </div>

        {/* Net Site Profit */}
        <div className="card-bg border border-[#D4AF37]/30 p-5 rounded-lg shadow-[0_0_20px_rgba(212,175,55,0.1)] relative overflow-hidden group">
          <div className="absolute right-[-10px] top-[-10px] opacity-10 group-hover:scale-110 transition-transform">
            <DollarSign size={80} className="gold-text" />
          </div>
          <p className="text-xs gold-text uppercase font-black mb-1">Net Site Profit (GGR)</p>
          <h3 className="text-2xl font-black text-white">₹ 62,600</h3>
          <div className="mt-2 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
             <div className="h-full bg-[#D4AF37] w-[65%]"></div>
          </div>
        </div>

        {/* Active Exposure */}
        <div className="card-bg border border-red-500/30 p-5 rounded-lg shadow-xl relative overflow-hidden group">
          <p className="text-xs text-red-400 uppercase font-black mb-1">Live Market Exposure</p>
          <h3 className="text-2xl font-black text-white">₹ 2,15,000</h3>
          <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-2 font-bold uppercase tracking-widest">
            <AlertTriangle size={12} className="text-yellow-500" /> High Risk on IND vs AUS
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* 2. LIVE MATCHES & USER ACTIVITY */}
      {/* ========================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Live Matches List */}
        <div className="lg:col-span-2 card-bg border sub-border rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b sub-border bg-[#1E3A8A]/20 flex justify-between items-center">
                <h3 className="font-bold uppercase tracking-wider flex items-center gap-2">
                    <Trophy size={18} className="gold-text" /> Current Live Matches
                </h3>
                <span className="text-[10px] font-bold bg-[#D4AF37] text-black px-2 py-0.5 rounded">AUTO-REFRESH</span>
            </div>
            <div className="divide-y divide-[#1E3A8A]/30">
                {[
                    { match: 'India vs Australia', market: 'Match Odds', vol: '1.2Cr', bets: '450', risk: 'Low' },
                    { match: 'Chelsea vs Arsenal', market: 'Goal Lines', vol: '45L', bets: '120', risk: 'Medium' },
                    { match: 'Aviator (Global)', market: 'Multiplier', vol: '85L', bets: '1.2k', risk: 'High' },
                ].map((item, i) => (
                    <div key={i} className="p-4 flex items-center justify-between hover:bg-[#1E3A8A]/10 transition cursor-pointer">
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-white">{item.match}</span>
                            <span className="text-[10px] text-gray-500 uppercase">{item.market}</span>
                        </div>
                        <div className="flex gap-8 items-center text-center">
                            <div className="hidden md:block">
                                <p className="text-[10px] text-gray-500 uppercase font-bold">Volume</p>
                                <p className="text-xs font-bold text-white">₹{item.vol}</p>
                            </div>
                            <div>
                                <p className="text-[10px] text-gray-500 uppercase font-bold">Bets</p>
                                <p className="text-xs font-bold text-white">{item.bets}</p>
                            </div>
                            <div className="w-16">
                                <p className={`text-[10px] font-bold px-2 py-1 rounded uppercase ${item.risk === 'High' ? 'bg-red-500/20 text-red-500' : 'bg-green-500/20 text-green-500'}`}>
                                    {item.risk}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <button className="w-full py-3 bg-[#051126] text-xs font-bold gold-text uppercase hover:bg-[#1E3A8A]/20 transition">View All Live Markets</button>
        </div>

        {/* Quick User Insights */}
        <div className="card-bg border sub-border rounded-lg shadow-lg p-5 space-y-6">
            <h3 className="font-bold uppercase tracking-wider flex items-center gap-2 border-b sub-border pb-3">
                <Users size={18} className="gold-text" /> User Insights
            </h3>
            
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Online Users</span>
                    <span className="text-sm font-bold text-green-500">245 Players</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">New Registrations (24h)</span>
                    <span className="text-sm font-bold text-white">18 Users</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-400">Pending KYC</span>
                    <span className="text-sm font-bold text-red-400">12 Requests</span>
                </div>
            </div>

            <div className="pt-4 border-t sub-border">
                <h4 className="text-[10px] font-bold text-gray-500 uppercase mb-3">Today's Best Punter</h4>
                <div className="flex items-center gap-3 bg-[#051126] p-2 rounded border border-[#1E3A8A]/30">
                    <div className="w-8 h-8 rounded-full bg-[#D4AF37] flex items-center justify-center font-black text-black text-xs">S</div>
                    <div>
                        <p className="text-xs font-bold text-white">Sunil_1008</p>
                        <p className="text-[10px] text-green-500 font-bold">+ ₹12,400 Profit</p>
                    </div>
                </div>
            </div>
        </div>

      </div>

      {/* ========================================== */}
      {/* 3. RECENT ACTIVITY TABLE */}
      {/* ========================================== */}
      <div className="card-bg border sub-border rounded-lg shadow-lg overflow-hidden">
        <div className="p-4 bg-[#1E3A8A]/20 border-b sub-border">
          <h3 className="font-bold uppercase tracking-wider flex items-center gap-2">
            <Activity size={18} className="text-blue-400" /> Recent System Logs
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#051126] text-[10px] font-bold text-gray-500 uppercase tracking-widest border-b sub-border">
              <tr>
                <th className="px-6 py-3">Event</th>
                <th className="px-6 py-3">User</th>
                <th className="px-6 py-3">Amount</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1E3A8A]/20">
              {[
                { event: 'Deposit Approval', user: 'Rahul_77', amt: '₹5,000', status: 'Approved', time: '2 mins ago' },
                { event: 'Big Bet Placed', user: 'Amit_Vip', amt: '₹50,000', status: 'Live', time: '5 mins ago' },
                { event: 'Withdrawal Request', user: 'Priya_J', amt: '₹12,000', status: 'Pending', time: '12 mins ago' },
              ].map((log, i) => (
                <tr key={i} className="hover:bg-[#1E3A8A]/5">
                  <td className="px-6 py-4 text-xs font-bold text-white">{log.event}</td>
                  <td className="px-6 py-4 text-xs text-gray-400">{log.user}</td>
                  <td className="px-6 py-4 text-xs font-mono text-white">{log.amt}</td>
                  <td className={`px-6 py-4 text-[10px] font-bold uppercase ${log.status === 'Approved' ? 'text-green-500' : 'text-yellow-500'}`}>{log.status}</td>
                  <td className="px-6 py-4 text-[10px] text-gray-500">{log.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};