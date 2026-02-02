import React from 'react';
import { Trophy, Activity, Calendar, Clock, Star, ChevronRight, BarChart3, Info } from 'lucide-react';

export const TennisPage = () => {

  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-bold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:brightness-110 active:scale-95 transition-all duration-300 rounded-sm";
  const cardBg = "bg-[#0a192f]";
  const goldText = "text-[#D4AF37]";
  const subBorder = "border-[#1E3A8A] hover:border-[#D4AF37] transition-colors duration-300";

  const matches = [
    {
      id: 1,
      league: "Wimbledon - Men's Final",
      player1: "Novak Djokovic",
      player2: "Carlos Alcaraz",
      time: "LIVE",
      isLive: true,
      score: "Set 3: 4-6, 6-3, 2-1",
      odds: { p1: "1.90", mid: "O 38.5", p2: "1.90" }
    },
    {
      id: 2,
      league: "US Open - Women's Singles",
      player1: "Iga Swiatek",
      player2: "Aryna Sabalenka",
      time: "Tonight, 9:00 PM",
      isLive: false,
      score: "",
      odds: { p1: "1.65", mid: "-", p2: "2.25" }
    },
    {
      id: 3,
      league: "ATP Masters 1000",
      player1: "Jannik Sinner",
      player2: "Daniil Medvedev",
      time: "Tomorrow, 2:00 PM",
      isLive: false,
      score: "",
      odds: { p1: "1.80", mid: "-", p2: "2.00" }
    },
    {
      id: 4,
      league: "French Open",
      player1: "Rafael Nadal",
      player2: "Alexander Zverev",
      time: "Sunday, 4:00 PM",
      isLive: false,
      score: "",
      odds: { p1: "2.50", mid: "-", p2: "1.55" }
    }
  ];

  return (
    <div className="min-h-screen bg-[#051126] text-white p-4 md:p-8 animate-fade-in">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Activity className={goldText} /> Tennis Exchange
          </h1>
          <p className="text-gray-400 text-sm mt-1">Bet on Grand Slams, ATP & WTA Tours.</p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['All', 'Wimbledon', 'US Open', 'ATP', 'WTA'].map((filter, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-sm text-sm font-bold border ${index === 0 ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#051126] text-gray-300 border-[#1E3A8A] hover:border-[#D4AF37]'} transition-all whitespace-nowrap`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="relative rounded-lg overflow-hidden mb-10 border border-[#D4AF37]/30 group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#0a192f] to-[#000000] z-0"></div>
       
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628800996328-97c11f71df44?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
          
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">LIVE - SET 3</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-2">DJOKOVIC <span className={goldText}>vs</span> ALCARAZ</h2>
            <p className="text-gray-300 text-lg">Wimbledon Final</p>
            <p className="text-[#D4AF37] font-mono mt-2 text-2xl font-bold">Sets: 1-1 | Games: 2-1</p>
          </div>

          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-1">Djokovic</p>
              <button className={`${goldBtnClass} px-8 py-3 text-xl`}>1.90</button>
            </div>
         
            <div className="text-center hidden md:block">
              <p className="text-gray-400 text-xs mb-1">Total Sets</p>
              <button className="px-6 py-3 text-xl bg-[#1E3A8A] border border-[#1E3A8A] text-white rounded-sm font-bold opacity-80">5</button>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-1">Alcaraz</p>
              <button className="px-8 py-3 text-xl bg-[#051126] border border-[#D4AF37] text-[#D4AF37] rounded-sm font-bold hover:bg-[#D4AF37] hover:text-black transition">1.90</button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold border-l-4 border-[#D4AF37] pl-3 mb-4">Upcoming Matches</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div key={match.id} className={`${cardBg} border ${subBorder} rounded-sm p-4 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
              
              <div className="flex justify-between items-start mb-4 border-b border-[#1E3A8A] pb-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                    {match.isLive ? <span className="flex items-center gap-1 text-red-500"><div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div> LIVE</span> : <Calendar size={12} />}
                    {match.league}
                  </div>
                  <div className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    {match.isLive ? <span className="text-white font-mono">{match.score}</span> : <><Clock size={12} /> {match.time}</>}
                  </div>
                </div>
                <Star size={18} className="text-gray-600 hover:text-[#D4AF37] cursor-pointer" />
              </div>

              <div className="grid grid-cols-12 gap-2 items-center">
                
                <div className="col-span-12 md:col-span-5 mb-4 md:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{match.player1}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{match.player2}</span>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-2">
                  
                  <div className="flex flex-col gap-1">
                    <button className="bg-[#D4AF37] text-black font-bold py-2 rounded-sm hover:brightness-110 transition">{match.odds.p1}</button>
                    <span className="text-[10px] text-center text-gray-500">1 (Winner)</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <button className={`bg-[#1E3A8A] text-white font-bold py-2 rounded-sm border border-[#1E3A8A] ${match.odds.mid === '-' ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#2563EB]'} transition`}>
                      {match.odds.mid}
                    </button>
                    <span className="text-[10px] text-center text-gray-500">{match.odds.mid === '-' ? '-' : 'Total'}</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <button className="bg-[#051126] border border-[#D4AF37] text-[#D4AF37] font-bold py-2 rounded-sm hover:bg-[#D4AF37] hover:text-black transition">{match.odds.p2}</button>
                    <span className="text-[10px] text-center text-gray-500">2 (Winner)</span>
                  </div>
                </div>

              </div>

              <div className="mt-4 pt-3 border-t border-[#1E3A8A]/50 flex justify-between items-center">
                <div className="flex gap-3 text-xs text-gray-400">
                   <span className="flex items-center gap-1"><BarChart3 size={14} /> H2H</span>
                   <span className="flex items-center gap-1"><Info size={14} /> Stats</span>
                </div>
                <button className="text-[#D4AF37] text-xs font-bold flex items-center hover:underline">
                  MORE BETS <ChevronRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};