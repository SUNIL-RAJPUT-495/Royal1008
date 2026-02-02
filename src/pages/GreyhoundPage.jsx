import React from 'react';
import { PawPrint, Clock, MapPin, ChevronRight, Timer, Trophy } from 'lucide-react';

export const GreyhoundPage = () => {

  // --- ROYAL THEME STYLES ---
  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-bold border border-[#F3C669] shadow-[0_0_10px_rgba(212,175,55,0.2)] hover:brightness-110 active:scale-95 transition-all rounded-sm";
  const cardBg = "bg-[#0a192f]";
  const goldText = "text-[#D4AF37]";
  const subBorder = "border-[#1E3A8A] hover:border-[#D4AF37] transition-colors duration-300";

  // --- TRAP COLORS HELPER ---
  const getTrapStyle = (trap) => {
    switch (trap) {
      case 1: return "bg-red-600 text-white";       
      case 2: return "bg-blue-600 text-white";     
      case 3: return "bg-white text-black";         
      case 4: return "bg-black text-white border border-gray-600"; 
      case 5: return "bg-orange-500 text-white";   
      case 6: return "bg-gray-800 text-white border border-white"; 
      default: return "bg-gray-500 text-white";
    }
  };

  const races = [
    {
      id: 1,
      meeting: "Romford",
      time: "19:30",
      status: "LIVE",
      isLive: true,
      runners: [
        { trap: 1, name: "Swift Guard", back: "2.10", lay: "2.15" },
        { trap: 3, name: "Golden Dash", back: "3.50", lay: "3.60" },
        { trap: 6, name: "Midnight Flyer", back: "5.00", lay: "5.20" }
      ]
    },
    {
      id: 2,
      meeting: "Newcastle",
      time: "19:45",
      status: "5m 12s",
      isLive: false,
      runners: [
        { trap: 2, name: "Blue Bird", back: "4.00", lay: "4.20" },
        { trap: 4, name: "Black Magic", back: "2.80", lay: "2.90" },
        { trap: 5, name: "Orange Spark", back: "6.50", lay: "7.00" }
      ]
    },
    {
      id: 3,
      meeting: "Monmore",
      time: "20:15",
      status: "Upcoming",
      isLive: false,
      runners: [
        { trap: 1, name: "Red Rocket", back: "1.90", lay: "1.95" },
        { trap: 2, name: "Azure Sky", back: "8.00", lay: "8.50" },
        { trap: 6, name: "Striped Thunder", back: "12.0", lay: "13.0" }
      ]
    },
    {
      id: 4,
      meeting: "Sheffield",
      time: "21:00",
      status: "Upcoming",
      isLive: false,
      runners: [
        { trap: 3, name: "Snowy Peak", back: "3.10", lay: "3.20" },
        { trap: 4, name: "Dark Knight", back: "3.10", lay: "3.20" },
        { trap: 5, name: "Sunset Blaze", back: "5.50", lay: "6.00" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#051126] text-white p-4 md:p-8 animate-fade-in">
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <PawPrint className={goldText} /> Greyhound Racing
          </h1>
          <p className="text-gray-400 text-sm mt-1">Live from UK, Ireland & Australia tracks.</p>
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['Next Races', 'UK & IRE', 'Australia', 'USA', 'Trap Challenge'].map((filter, index) => (
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
       
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1599407335760-4b2a8a071578?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 z-0"></div>

        <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between">
          
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2 text-[#D4AF37] font-bold uppercase tracking-widest text-sm">
              <Timer size={16} className="animate-pulse" /> Next Race Off In
            </div>
            <h2 className="text-5xl md:text-7xl font-extrabold text-white font-mono">01:45</h2>
            <p className="text-gray-200 text-xl mt-2 flex items-center justify-center md:justify-start gap-2">
              <MapPin size={20} className={goldText} /> Romford - 400m Open
            </p>
          </div>

          <div className="text-center bg-[#051126]/60 p-4 rounded border border-[#1E3A8A] backdrop-blur-sm">
            <p className="text-gray-300 text-sm mb-3">Top Favorite</p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 flex items-center justify-center font-bold rounded ${getTrapStyle(1)}`}>1</div>
              <div className="text-left">
                <h3 className="text-xl font-bold text-white">Swift Guard</h3>
                <p className="text-gray-400 text-xs">Trap 1</p>
              </div>
            </div>
            <button className={`${goldBtnClass} px-8 py-2 mt-4 w-full`}>BACK @ 2.10</button>
          </div>
        </div>
      </div>

      
      <div className="space-y-6">
        <h2 className="text-xl font-bold border-l-4 border-[#D4AF37] pl-3">Today's Meetings</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {races.map((race) => (
            <div key={race.id} className={`${cardBg} border ${subBorder} rounded-sm p-4 hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
              
           
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
                  Race Card
                </button>
              </div>

             
              <div className="space-y-3">
                {race.runners.map((dog, idx) => (
                  <div key={idx} className="grid grid-cols-12 gap-2 items-center bg-[#051126] p-2 rounded border border-[#1E3A8A]/30">
                    
                    <div className="col-span-6 flex items-center gap-3">
            
                      <div className={`w-6 h-6 flex items-center justify-center text-xs font-bold rounded shadow-md ${getTrapStyle(dog.trap)}`}>
                        {dog.trap}
                      </div>
                      <div>
                        <p className="font-bold text-sm text-white truncate">{dog.name}</p>
                      </div>
                    </div>

               
                    <div className="col-span-6 grid grid-cols-2 gap-2">
                      <button className="flex flex-col items-center justify-center bg-[#D4AF37] py-1 rounded-sm hover:brightness-110 transition">
                        <span className="text-black font-bold text-sm">{dog.back}</span>
                      </button>
                      <button className="flex flex-col items-center justify-center bg-[#051126] border border-[#D4AF37]/50 py-1 rounded-sm hover:bg-[#D4AF37]/10 transition">
                        <span className="text-[#D4AF37] font-bold text-sm">{dog.lay}</span>
                      </button>
                    </div>

                  </div>
                ))}
              </div>

             
              <div className="mt-4 pt-2 flex justify-center">
                <button className="text-gray-400 text-xs flex items-center hover:text-[#D4AF37] transition">
                  View All 6 Traps <ChevronRight size={12} />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};