import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Wallet, ArrowUpRight, ArrowDownLeft, History, Gift, ShieldCheck, Clock, CheckCircle2, XCircle } from 'lucide-react';

export const WalletPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'deposits', 'withdrawals'

  // Dummy Transaction Data (API aane ke baad backend se replace hoga)
  const transactions = [
    { id: 'TXN100845', type: 'deposit', amount: 5000, date: '22 Feb 2026, 14:30', status: 'success', desc: 'Deposit via UPI' },
    { id: 'BET100921', type: 'bet_won', amount: 925, date: '21 Feb 2026, 23:10', status: 'success', desc: 'Bet Won: IND vs AUS' },
    { id: 'BET100920', type: 'bet_placed', amount: -500, date: '21 Feb 2026, 19:15', status: 'success', desc: 'Bet Placed: IND vs AUS' },
    { id: 'TXN100810', type: 'withdraw', amount: -2000, date: '20 Feb 2026, 10:00', status: 'pending', desc: 'Withdraw to HDFC Bank' },
    { id: 'TXN100799', type: 'deposit', amount: 1000, date: '18 Feb 2026, 16:45', status: 'failed', desc: 'Deposit via Card' },
  ];

  // Filter transactions based on active tab
  const filteredTransactions = transactions.filter(txn => {
    if (activeTab === 'all') return true;
    if (activeTab === 'deposits') return txn.type === 'deposit' || txn.type === 'bet_won';
    if (activeTab === 'withdrawals') return txn.type === 'withdraw' || txn.type === 'bet_placed';
    return true;
  });

  // Helper function for Transaction Icons & Colors
  const getTxnDetails = (type, status) => {
    if (type === 'deposit' || type === 'bet_won') {
      return { icon: <ArrowDownLeft size={20} className="text-green-500" />, color: 'text-green-500', sign: '+' };
    }
    if (type === 'withdraw' || type === 'bet_placed') {
      return { icon: <ArrowUpRight size={20} className="text-red-500" />, color: 'text-red-500', sign: '-' };
    }
    return { icon: <Wallet size={20} className="text-gray-400" />, color: 'text-gray-400', sign: '' };
  };

  const getStatusBadge = (status) => {
    if (status === 'success') return <span className="flex items-center gap-1 text-[10px] font-bold text-green-500 bg-green-500/10 px-2 py-0.5 rounded uppercase"><CheckCircle2 size={10} /> Success</span>;
    if (status === 'pending') return <span className="flex items-center gap-1 text-[10px] font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded uppercase"><Clock size={10} /> Pending</span>;
    if (status === 'failed') return <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 bg-red-500/10 px-2 py-0.5 rounded uppercase"><XCircle size={10} /> Failed</span>;
  };

  return (
    <div className="min-h-screen bg-[#051126] text-white animate-fade-in pb-20 md:pb-10">
      
      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-[#051126] border-b sub-border p-3 md:p-4 flex items-center gap-3 md:gap-4 shadow-md">
        <button 
          onClick={() => navigate(-1)} 
          className="p-1.5 md:p-2 card-bg rounded-full hover:bg-[#1E3A8A] transition"
        >
          <ArrowLeft size={20} className="gold-text" />
        </button>
        <h1 className="text-lg md:text-xl font-bold uppercase tracking-wide flex items-center gap-2">
          <Wallet className="gold-text" size={20} /> My Wallet
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-3 md:p-8 mt-2 md:mt-4 space-y-4 md:space-y-6">
        
        {/* ============================== */}
        {/* 1. BALANCE CARDS SECTION */}
        {/* ============================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Main Withdrawable Balance */}
          <div className="bg-gradient-to-br from-[#1E3A8A]/60 via-[#0a192f] to-[#0a192f] border border-[#D4AF37]/50 rounded-lg p-5 md:p-6 shadow-[0_0_20px_rgba(212,175,55,0.15)] relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <Wallet size={100} className="gold-text" />
            </div>
            <div className="relative z-10">
              <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                Main Balance <ShieldCheck size={14} className="gold-text" />
              </p>
              <h2 className="text-3xl md:text-5xl font-mono font-extrabold text-white mb-4">
                ₹ <span className="gold-text">5,420.00</span>
              </h2>
              <div className="flex gap-3">
                <button 
                  onClick={() => navigate('/deposit')}
                  className="flex-1 py-2.5 md:py-3 bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-extrabold uppercase tracking-wider text-sm rounded-sm shadow-md hover:brightness-110 active:scale-95 transition-all"
                >
                  Deposit
                </button>
                <button 
                  onClick={() => navigate('/withdraw')}
                  className="flex-1 py-2.5 md:py-3 bg-[#051126] border border-[#D4AF37] gold-text font-extrabold uppercase tracking-wider text-sm rounded-sm shadow-md hover:bg-[#D4AF37] hover:text-black active:scale-95 transition-all"
                >
                  Withdraw
                </button>
              </div>
            </div>
          </div>

          {/* Bonus Balance Card */}
          <div className="card-bg border sub-border rounded-lg p-5 md:p-6 shadow-lg flex flex-col justify-center">
            <p className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
              Bonus Balance <Gift size={14} className="text-pink-500" />
            </p>
            <h2 className="text-2xl md:text-3xl font-mono font-bold text-gray-300 mb-2">
              ₹ 1,250.00
            </h2>
            <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
              * Bonus balance can only be used to place bets. It cannot be withdrawn directly. Winnings from bonus bets will be added to your Main Balance.
            </p>
          </div>

        </div>

        {/* ============================== */}
        {/* 2. TRANSACTION HISTORY (STATEMENT) */}
        {/* ============================== */}
        <div className="card-bg border sub-border rounded-lg shadow-lg overflow-hidden">
          
          <div className="p-4 border-b sub-border flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <History className="gold-text" size={20} /> Wallet Statement
            </h3>
            
            {/* Filter Tabs */}
            <div className="flex bg-[#051126] border sub-border rounded-sm p-1 self-start md:self-auto">
              <button 
                onClick={() => setActiveTab('all')}
                className={`px-4 py-1.5 text-xs font-bold uppercase rounded-sm transition ${activeTab === 'all' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'}`}
              >
                All
              </button>
              <button 
                onClick={() => setActiveTab('deposits')}
                className={`px-4 py-1.5 text-xs font-bold uppercase rounded-sm transition ${activeTab === 'deposits' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Credits
              </button>
              <button 
                onClick={() => setActiveTab('withdrawals')}
                className={`px-4 py-1.5 text-xs font-bold uppercase rounded-sm transition ${activeTab === 'withdrawals' ? 'bg-[#D4AF37] text-black' : 'text-gray-400 hover:text-white'}`}
              >
                Debits
              </button>
            </div>
          </div>

          {/* Transaction List */}
          <div className="divide-y divide-[#1E3A8A]/50">
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((txn) => {
                const { icon, color, sign } = getTxnDetails(txn.type, txn.status);
                return (
                  <div key={txn.id} className="p-4 hover:bg-[#1E3A8A]/10 transition flex items-center justify-between">
                    
                    {/* Left: Icon & Details */}
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-[#1E3A8A] bg-[#051126] flex items-center justify-center shrink-0 ${txn.status === 'failed' ? 'opacity-50' : ''}`}>
                        {icon}
                      </div>
                      <div>
                        <p className={`text-sm md:text-base font-bold ${txn.status === 'failed' ? 'text-gray-500 line-through' : 'text-white'}`}>
                          {txn.desc}
                        </p>
                        <p className="text-[10px] md:text-xs text-gray-400 font-mono mt-0.5">{txn.date} | ID: {txn.id}</p>
                      </div>
                    </div>

                    {/* Right: Amount & Status */}
                    <div className="text-right shrink-0">
                      <p className={`text-sm md:text-base font-bold font-mono ${txn.status === 'failed' ? 'text-gray-500' : color}`}>
                        {sign}₹{Math.abs(txn.amount)}
                      </p>
                      <div className="mt-1 flex justify-end">
                        {getStatusBadge(txn.status)}
                      </div>
                    </div>

                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-gray-400">
                <History size={40} className="mx-auto mb-3 opacity-20" />
                <p>No transactions found for this filter.</p>
              </div>
            )}
          </div>
          
          <div className="p-3 border-t sub-border text-center bg-[#051126]">
             <button className="text-xs gold-text hover:underline font-bold uppercase tracking-wider">Load More History</button>
          </div>

        </div>

      </div>
    </div>
  );
};