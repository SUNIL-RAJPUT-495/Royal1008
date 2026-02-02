import React from 'react';
import { Calendar, Clock, Trophy, Star, ChevronRight, BarChart3, Info, Target, Goal } from 'lucide-react';

export const FootballPage = () => {

  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-bold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:brightness-110 active:scale-95 transition-all duration-300 rounded-sm";
  const cardBg = "bg-[#0a192f]";
  const goldText = "text-[#D4AF37]";
  const subBorder = "border-[#1E3A8A] hover:border-[#D4AF37] transition-colors duration-300";

  const matches = [
    {
      id: 1,
      league: "English Premier League",
      team1: "Manchester City",
      team2: "Arsenal",
      time: "LIVE",
      isLive: true,
      score: "MCI 2 - 1 ARS (75')",
      odds: { home: "1.45", draw: "4.50", away: "6.00" }
    },
    {
      id: 2,
      league: "UEFA Champions League",
      team1: "Real Madrid",
      team2: "Bayern Munich",
      time: "Tonight, 12:30 AM",
      isLive: false,
      score: "",
      odds: { home: "2.10", draw: "3.40", away: "2.90" }
    },
    {
      id: 3,
      league: "La Liga",
      team1: "FC Barcelona",
      team2: "Girona",
      time: "Tomorrow, 8:00 PM",
      isLive: false,
      score: "",
      odds: { home: "1.30", draw: "5.50", away: "8.00" }
    },
    {
      id: 4,
      league: "Serie A",
      team1: "Juventus",
      team2: "AC Milan",
      time: "Sunday, 10:00 PM",
      isLive: false,
      score: "",
      odds: { home: "2.50", draw: "3.10", away: "2.80" }
    }
  ];

  return (
    <div className="min-h-screen bg-[#051126] text-white p-4 md:p-8 animate-fade-in">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Goal className={goldText} /> Football Exchange
          </h1>
          <p className="text-gray-400 text-sm mt-1">Live betting on top European leagues.</p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['All', 'Premier League', 'La Liga', 'Serie A', 'UCL'].map((filter, index) => (
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

        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522778119026-d647f0565c6a?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
          
          <div className="text-center md:text-left mb-6 md:mb-0">
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">LIVE - 75:00</span>
            <h2 className="text-3xl md:text-5xl font-extrabold mt-4 mb-2">MAN CITY <span className={goldText}>vs</span> ARSENAL</h2>
            <p className="text-gray-300 text-lg">Premier League Title Decider</p>
            <p className="text-[#D4AF37] font-mono mt-2 text-3xl font-bold">2 - 1</p>
          </div>

          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-1">Man City</p>
              <button className={`${goldBtnClass} px-8 py-3 text-xl`}>1.45</button>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-1">Draw</p>
              <button className="px-8 py-3 text-xl bg-[#1E3A8A] border border-[#1E3A8A] text-white rounded-sm font-bold opacity-80">4.50</button>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-xs mb-1">Arsenal</p>
              <button className="px-8 py-3 text-xl bg-[#051126] border border-[#D4AF37] text-[#D4AF37] rounded-sm font-bold hover:bg-[#D4AF37] hover:text-black transition">6.00</button>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold border-l-4 border-[#D4AF37] pl-3 mb-4">Live & Upcoming Fixtures</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {matches.map((match) => (
            <div key={match.id} className={`${cardBg} border ${subBorder} rounded-sm p-4 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
              
              
              <div className="flex justify-between items-start mb-4 border-b border-[#1E3A8A] pb-3">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-bold uppercase tracking-wider">
                    {match.isLive ? <span className="flex items-center gap-1 text-red-500"><Target size={12} className="animate-pulse" /> LIVE</span> : <Calendar size={12} />}
                    {match.league}
                  </div>
                  <div className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                    {match.isLive ? <span className="text-white font-bold">{match.score}</span> : <><Clock size={12} /> {match.time}</>}
                  </div>
                </div>
                <Star size={18} className="text-gray-600 hover:text-[#D4AF37] cursor-pointer" />
              </div>

            
              <div className="grid grid-cols-12 gap-2 items-center">
                
              
                <div className="col-span-12 md:col-span-5 mb-4 md:mb-0">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{match.team1}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{match.team2}</span>
                  </div>
                </div>

                
                <div className="col-span-12 md:col-span-7 grid grid-cols-3 gap-2">
                  

                  <div className="flex flex-col gap-1">
                    <button className="bg-[#D4AF37] text-black font-bold py-2 rounded-sm hover:brightness-110 transition">{match.odds.home}</button>
                    <span className="text-[10px] text-center text-gray-500">1 (Home)</span>
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <button className="bg-[#1E3A8A] text-white font-bold py-2 rounded-sm border border-[#1E3A8A] hover:bg-[#2563EB] transition">{match.odds.draw}</button>
                    <span className="text-[10px] text-center text-gray-500">X (Draw)</span>
                  </div>

                  
                  <div className="flex flex-col gap-1">
                    <button className="bg-[#051126] border border-[#D4AF37] text-[#D4AF37] font-bold py-2 rounded-sm hover:bg-[#D4AF37] hover:text-black transition">{match.odds.away}</button>
                    <span className="text-[10px] text-center text-gray-500">2 (Away)</span>
                  </div>

                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-[#1E3A8A]/50 flex justify-between items-center">
                <div className="flex gap-3 text-xs text-gray-400">
                   <span className="flex items-center gap-1"><BarChart3 size={14} /> Stats</span>
                   <span className="flex items-center gap-1"><Info size={14} /> Rules</span>
                </div>
                <button className="text-[#D4AF37] text-xs font-bold flex items-center hover:underline">
                  +42 MARKETS <ChevronRight size={14} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};