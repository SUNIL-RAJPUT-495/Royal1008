import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, History, Clock, CheckCircle2, XCircle, Trophy, TrendingUp, Calendar } from 'lucide-react';

export const MyBetsPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('open'); // 'open' ya 'settled'

  // Dummy Bets Data (API aane ke baad backend se aayega)
  const allBets = [
    { 
      id: 'BET-1008-01', 
      match: 'IND vs AUS', 
      tournament: 'T20 World Cup Final',
      market: 'Match Odds',
      selection: 'India',
      type: 'Back', // Back (Blue) or Lay (Pink)
      odds: 1.85, 
      stake: 1000, 
      potentialReturn: 1850, 
      status: 'open',
      date: '23 Feb 2026, 14:30'
    },
    { 
      id: 'BET-1008-02', 
      match: 'IND vs AUS', 
      tournament: 'T20 World Cup Final',
      market: 'Fancy (Session)',
      selection: '20 Over IND Runs - YES (206)',
      type: 'Back', 
      odds: 1.00, // Fancy me odds usually fixed multiplier hote hain
      stake: 500, 
      potentialReturn: 1000, 
      status: 'open',
      date: '23 Feb 2026, 15:10'
    },
    { 
      id: 'BET-1007-99', 
      match: 'ENG vs SA', 
      tournament: 'T20 World Cup Semi-Final',
      market: 'Match Odds',
      selection: 'South Africa',
      type: 'Lay', 
      odds: 2.10, 
      stake: 2000, 
      potentialReturn: 4200, 
      status: 'won',
      date: '21 Feb 2026, 19:00'
    },
    { 
      id: 'BET-1007-85', 
      match: 'MI vs CSK', 
      tournament: 'IPL 2026',
      market: 'Match Odds',
      selection: 'Mumbai Indians',
      type: 'Back', 
      odds: 1.90, 
      stake: 5000, 
      potentialReturn: 0, 
      status: 'lost',
      date: '15 Feb 2026, 20:00'
    }
  ];

  // Filter logic
  const filteredBets = allBets.filter(bet => {
    if (activeTab === 'open') return bet.status === 'open';
    if (activeTab === 'settled') return bet.status === 'won' || bet.status === 'lost';
    return true;
  });

  // Helper function for Status Badges
  const getStatusBadge = (status) => {
    if (status === 'open') return <span className="flex items-center gap-1 text-[10px] md:text-xs font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/30 px-2 py-1 rounded uppercase tracking-wider"><Clock size={12} /> Live / Open</span>;
    if (status === 'won') return <span className="flex items-center gap-1 text-[10px] md:text-xs font-bold text-green-500 bg-green-500/10 border border-green-500/30 px-2 py-1 rounded uppercase tracking-wider"><CheckCircle2 size={12} /> Won</span>;
    if (status === 'lost') return <span className="flex items-center gap-1 text-[10px] md:text-xs font-bold text-red-500 bg-red-500/10 border border-red-500/30 px-2 py-1 rounded uppercase tracking-wider"><XCircle size={12} /> Lost</span>;
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
          <History className="gold-text" size={20} /> My Bets
        </h1>
      </div>

      <div className="max-w-4xl mx-auto p-3 md:p-8 mt-2 md:mt-4 space-y-4 md:space-y-6">
        
        {/* TABS SECTION */}
        <div className="flex bg-[#0a192f] border sub-border rounded-md p-1.5 shadow-lg">
          <button 
            onClick={() => setActiveTab('open')}
            className={`flex-1 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase tracking-widest rounded-sm transition-all flex justify-center items-center gap-2 ${activeTab === 'open' ? 'bg-[#D4AF37] text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
          >
            <Clock size={16} /> Open Bets
          </button>
          <button 
            onClick={() => setActiveTab('settled')}
            className={`flex-1 py-2.5 md:py-3 text-xs md:text-sm font-bold uppercase tracking-widest rounded-sm transition-all flex justify-center items-center gap-2 ${activeTab === 'settled' ? 'bg-[#D4AF37] text-black shadow-md' : 'text-gray-400 hover:text-white'}`}
          >
            <CheckCircle2 size={16} /> Settled Bets
          </button>
        </div>

        {/* BETS LIST */}
        <div className="space-y-4">
          {filteredBets.length > 0 ? (
            filteredBets.map((bet) => (
              <div key={bet.id} className="card-bg border sub-border rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-[1.01]">
                
                {/* Bet Header (Tournament & Status) */}
                <div className="bg-[#1E3A8A]/30 p-3 md:p-4 border-b sub-border flex justify-between items-center">
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-300 font-bold uppercase tracking-wider">
                    {bet.market.includes('Fancy') ? <TrendingUp size={16} className="gold-text" /> : <Trophy size={16} className="gold-text" />}
                    {bet.tournament}
                  </div>
                  {getStatusBadge(bet.status)}
                </div>

                {/* Bet Body (Match & Selection Details) */}
                <div className="p-4 md:p-5">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1">{bet.match}</h3>
                      <p className="text-xs md:text-sm text-[#D4AF37] font-bold uppercase tracking-wide bg-[#1E3A8A]/20 inline-block px-2 py-1 rounded border border-[#D4AF37]/30">
                        {bet.market}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] md:text-xs text-gray-400 flex items-center justify-end gap-1 mb-1">
                        <Calendar size={12} /> {bet.date}
                      </p>
                      <p className="text-[10px] md:text-xs text-gray-500 font-mono">ID: {bet.id}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm md:text-base text-gray-400">Selection:</span>
                    <span className="text-sm md:text-base font-bold text-white uppercase tracking-wider">{bet.selection}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${bet.type === 'Back' ? 'bg-[#72bbef] text-black' : 'bg-[#faa9ba] text-black'}`}>
                      {bet.type}
                    </span>
                  </div>

                  {/* Stake & Return Box */}
                  <div className="bg-[#051126] border sub-border rounded-md p-3 md:p-4 grid grid-cols-3 divide-x divide-[#1E3A8A]/50">
                    <div className="text-center px-2">
                      <p className="text-[10px] md:text-xs text-gray-400 uppercase font-bold mb-1">Odds</p>
                      <p className="text-base md:text-lg font-mono font-bold text-white">{bet.odds.toFixed(2)}</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="text-[10px] md:text-xs text-gray-400 uppercase font-bold mb-1">Stake</p>
                      <p className="text-base md:text-lg font-mono font-bold text-white">₹{bet.stake}</p>
                    </div>
                    <div className="text-center px-2">
                      <p className="text-[10px] md:text-xs text-gray-400 uppercase font-bold mb-1">
                        {bet.status === 'open' ? 'Pot. Return' : 'Return'}
                      </p>
                      <p className={`text-base md:text-lg font-mono font-bold ${bet.status === 'lost' ? 'text-red-500' : 'text-green-400'}`}>
                        ₹{bet.potentialReturn}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="card-bg border sub-border rounded-lg p-10 text-center">
              <History size={60} className="mx-auto mb-4 text-[#1E3A8A] opacity-50" />
              <h3 className="text-xl font-bold text-white mb-2">No Bets Found</h3>
              <p className="text-sm text-gray-400 mb-6">You don't have any {activeTab} bets at the moment.</p>
              <button onClick={() => navigate('/cricket')} className="gold-btn py-3 px-8 text-sm md:text-base w-auto inline-block">
                Go to Sports Exchange
              </button>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};