import React from 'react';
import { Play, ChevronRight, Star } from 'lucide-react';

export const CasinoPage = () => {
  
  const goldBtnClass = "w-full py-2 bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-extrabold uppercase tracking-wide border border-[#F3C669] shadow-[0_4px_15px_rgba(212,175,55,0.3)] hover:brightness-110 active:scale-95 transition-all duration-300 rounded-sm";
  const textGoldGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#F3C669] via-[#D4AF37] to-[#F3C669]";
  const cardBg = "bg-[#0a192f]";
  const goldBorder = "border-[#D4AF37]";
  
  const games = [
    { id: 1, title: "Royal Slots", img: "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=400", isNew: true },
    { id: 2, title: "Gold Rush", img: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=400", isNew: false },
    { id: 3, title: "European Roulette", img: "https://images.unsplash.com/photo-1600275669454-3289c64ec771?auto=format&fit=crop&q=80&w=400", isNew: false },
    { id: 4, title: "Blackjack Pro", img: "https://images.unsplash.com/photo-1511193311914-0346f16efe90?auto=format&fit=crop&q=80&w=400", isNew: true },
    { id: 5, title: "Teen Patti Live", img: "https://images.unsplash.com/photo-1629904853716-f004b377c81b?auto=format&fit=crop&q=80&w=400", isNew: false },
    { id: 6, title: "Mega Wheel", img: "https://images.unsplash.com/photo-1518893494013-481c1d8ed3fd?auto=format&fit=crop&q=80&w=400", isNew: false },
    { id: 7, title: "Poker King", img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&q=80&w=400", isNew: false },
    { id: 8, title: "Baccarat Squeeze", img: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=400", isNew: false },
  ];

  return (
    <div className="min-h-screen bg-[#051126] text-white p-4 md:p-8 pt-24">
      
      <div className="max-w-7xl mx-auto mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Casino</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto relative bg-gradient-to-r from-[#0F213E] to-[#051126] rounded-xl border border-[#D4AF37]/30 overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-12">

        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

        <div className="flex flex-col md:flex-row items-center justify-between p-8 md:p-12 relative z-10">
          
        
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              WELCOME <br />
              <span className={textGoldGradient}>BONUS</span>
            </h2>
            <p className="text-gray-400 mt-4 text-lg max-w-md">
              Sign up today and get up to <span className="text-[#D4AF37] font-bold">₹10,000</span> bonus on your first deposit.
            </p>
            <div className="mt-8">
               <button className="px-10 py-4 bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-bold text-xl rounded-md hover:scale-105 transition-transform shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                 PLAY NOW
               </button>
            </div>
          </div>

          <div className="md:w-1/2 flex justify-center md:justify-end relative">
             <div className="absolute inset-0 bg-[#D4AF37] blur-[100px] opacity-20 rounded-full"></div>
             
             <img 
               src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?auto=format&fit=crop&q=80&w=600" 
               alt="Casino Slots" 
               className="relative z-10 w-full max-w-sm object-contain drop-shadow-2xl animate-float"
             />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Popular Games</h2>
          <a href="#" className="text-[#D4AF37] text-sm font-bold flex items-center hover:underline">
            VIEW ALL <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {games.map((game) => (
            <div 
              key={game.id} 
              className={`group relative ${cardBg} border border-[#1E3A8A] rounded-lg overflow-hidden hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 shadow-xl`}
            >
              
              <div className="relative h-40 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-transparent to-transparent z-10"></div>
                <img 
                  src={game.img} 
                  alt={game.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700" 
                />
                {game.isNew && (
                  <div className="absolute top-2 right-2 z-20 bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded shadow-lg">
                    NEW
                  </div>
                )}
              </div>

              <div className="p-4 text-center relative z-20">
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#D4AF37] transition-colors truncate">
                  {game.title}
                </h3>
                <p className="text-gray-500 text-xs mb-4">Live Casino</p>
                
                <button className={goldBtnClass}>
                  PLAY NOW
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};