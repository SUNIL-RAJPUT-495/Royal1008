import React from 'react';
import { Flame, Clock, MapPin, ChevronRight, Trophy, Timer, Info } from 'lucide-react';

export const HorseRacingPage = () => {

  // --- ROYAL THEME STYLES ---
  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-bold border border-[#F3C669] shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:brightness-110 active:scale-95 transition-all rounded-sm";
  const cardBg = "bg-[#0a192f]";
  const goldText = "text-[#D4AF37]";
  const subBorder = "border-[#1E3A8A] hover:border-[#D4AF37] transition-colors duration-300";

  // --- DUMMY RACE DATA ---
  const races = [
    {
      id: 1,
      meeting: "Royal Ascot",
      time: "14:30",
      status: "LIVE",
      isLive: true,
      runners: [
        { name: "Golden Hero", jockey: "R. Moore", back: "2.50", lay: "2.60" },
        { name: "Midnight Fury", jockey: "L. Dettori", back: "4.20", lay: "4.40" },
        { name: "Storm Chaser", jockey: "W. Buick", back: "9.00", lay: "9.50" }
      ]
    },
    {
      id: 2,
      meeting: "Kempton Park",
      time: "15:00",
      status: "12m 30s",
      isLive: false,
      runners: [
        { name: "Silver Bullet", jockey: "H. Doyle", back: "3.10", lay: "3.25" },
        { name: "King's Gambit", jockey: "T. Marquand", back: "5.50", lay: "5.80" },
        { name: "Red Rum", jockey: "O. Murphy", back: "7.00", lay: "7.20" }
      ]
    },
    {
      id: 3,
      meeting: "Mumbai Race Course",
      time: "16:15",
      status: "Upcoming",
      isLive: false,
      runners: [
        { name: "Sultan", jockey: "P. Chauhan", back: "1.80", lay: "1.95" },
        { name: "Desert Storm", jockey: "A. Sandhu", back: "6.00", lay: "6.40" },
        { name: "Victory Lap", jockey: "S. Zervan", back: "12.0", lay: "14.0" }
      ]
    },
    {
      id: 4,
      meeting: "Meydan (Dubai)",
      time: "18:45",
      status: "Upcoming",
      isLive: false,
      runners: [
        { name: "Dubai Millennium", jockey: "C. Soumillon", back: "2.10", lay: "2.20" },
        { name: "Thunder Snow", jockey: "J. Doyle", back: "3.50", lay: "3.70" },
        { name: "Mystic Guide", jockey: "L. Saez", back: "8.40", lay: "9.00" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#051126] text-white p-4 md:p-8 animate-fade-in">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <Flame className={goldText} /> Horse Racing
          </h1>
          <p className="text-gray-400 text-sm mt-1">Live updates from UK, IRE, IND & Dubai.</p>
        </div>
        
        {/* Track Filters */}
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['Next Races', 'UK & IRE', 'India', 'International', 'Greyhounds'].map((filter, index) => (
            <button 
              key={index}
              className={`px-4 py-2 rounded-sm text-sm font-bold border ${index === 0 ? 'bg-[#D4AF37] text-black border-[#D4AF37]' : 'bg-[#051126] text-gray-300 border-[#1E3A8A] hover:border-[#D4AF37]'} transition-all whitespace-nowrap`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* --- NEXT RACE HERO BANNER --- */}
      <div className="relative rounded-lg overflow-hidden mb-10 border border-[#D4AF37]/30 group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#000000] via-[#3f2e04] to-[#000000] z-0"></div>
        {/* Horse Running Background */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551699929-43c3d5268c78?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-30 z-0"></div>

        <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
          
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[#D4AF37] font-bold uppercase tracking-widest text-sm">
              <Timer size={16} className="animate-pulse" /> Next Race Starts In
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white font-mono">04:25</h2>
            <p className="text-gray-200 text-xl mt-2 flex items-center justify-center md:justify-start gap-2">
              <MapPin size={20} className={goldText} /> Royal Ascot - Gold Cup
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-300 text-sm mb-3">Favorite to Win</p>
            <div className="bg-[#051126]/80 p-4 rounded border border-[#D4AF37] backdrop-blur-md">
              <h3 className="text-2xl font-bold text-[#D4AF37]">Golden Hero</h3>
              <p className="text-gray-400 text-xs">Jockey: R. Moore</p>
              <button className={`${goldBtnClass} px-8 py-2 mt-3 w-full`}>BACK @ 2.50</button>
            </div>
          </div>
        </div>
      </div>

      {/* --- RACE CARDS GRID --- */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold border-l-4 border-[#D4AF37] pl-3">Today's Race Cards</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {races.map((race) => (
            <div key={race.id} className={`${cardBg} border ${subBorder} rounded-sm p-4 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
              
              {/* Card Header (Meeting & Time) */}
              <div className="flex justify-between items-center mb-4 border-b border-[#1E3A8A] pb-3">
                <div>
                  <div className="flex items-center gap-2 text-lg font-bold text-white">
                    <MapPin size={16} className={goldText} /> {race.meeting}
                  </div>
                  <div className="text-[#D4AF37] text-xs font-bold uppercase mt-1 flex items-center gap-1">
                    <Clock size={12} /> {race.time} <span className="text-gray-500 mx-1">|</span> 
                    {race.isLive ? <span className="text-red-500 animate-pulse">LIVE NOW</span> : <span className="text-white">{race.status}</span>}
                  </div>
                </div>
                <button className="text-xs text-[#D4AF37] border border-[#D4AF37] px-3 py-1 rounded hover:bg-[#D4AF37] hover:text-black transition">
                  Full Card
                </button>
              </div>

              {/* Runners List */}
              <div className="space-y-3">
                {race.runners.map((horse, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 items-center bg-[#051126] p-2 rounded border border-[#1E3A8A]/30">
                    
                    {/* Horse Details */}
                    <div className="col-span-6">
                      <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-bold text-sm w-4">{idx + 1}</span>
                        <div>
                          <p className="font-bold text-sm text-white">{horse.name}</p>
                          <p className="text-[10px] text-gray-400">{horse.jockey}</p>
                        </div>
                      </div>
                    </div>

                    {/* Odds Buttons */}
                    <div className="col-span-6 grid grid-cols-2 gap-2">
                      {/* Back Button */}
                      <button className="flex flex-col items-center justify-center bg-[#D4AF37] py-1 rounded-sm hover:brightness-110 transition">
                        <span className="text-black font-bold text-sm">{horse.back}</span>
                      </button>
                      
                      {/* Lay Button */}
                      <button className="flex flex-col items-center justify-center bg-[#051126] border border-[#D4AF37]/50 py-1 rounded-sm hover:bg-[#D4AF37]/10 transition">
                        <span className="text-[#D4AF37] font-bold text-sm">{horse.lay}</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-2 flex justify-center">
                <button className="text-gray-400 text-xs flex items-center hover:text-[#D4AF37] transition">
                  View All Runners <ChevronRight size={12} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};