import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Tv, PlayCircle, Info, TrendingUp, AlertCircle, Trophy } from 'lucide-react';

export const MatchDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const cardBg = "bg-[#0a192f]";
  const goldText = "text-[#D4AF37]";
  const subBorder = "border-[#1E3A8A]";
  const backColor = "bg-[#72bbef] hover:bg-[#5da0d6] text-black transition-colors"; 
  const layColor = "bg-[#faa9ba] hover:bg-[#e091a3] text-black transition-colors";  

  useEffect(() => {
    const fetchSingleMatch = async () => {
      try {
        console.log("Fetching data for Match ID:", id);
        // Fake delay to show loading animation
        setTimeout(() => setLoading(false), 800); 
      } catch (error) {
        console.error("Error fetching match details", error);
        setLoading(false);
      }
    };

    fetchSingleMatch();
  }, [id]); 

  return (
    <div className="min-h-screen bg-[#051126] text-white animate-fade-in pb-20">
      
      {/* HEADER */}
      <div className="sticky top-0 z-50 bg-[#051126] border-b border-[#1E3A8A] p-4 flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate(-1)} 
            className="p-2 bg-[#0a192f] rounded-full hover:bg-[#1E3A8A] transition"
          >
            <ArrowLeft size={20} className={goldText} />
          </button>
          <div>
            <h1 className="text-lg md:text-xl font-bold uppercase">IND vs AUS</h1>
            <p className="text-xs text-gray-400">Match ID: {id}</p> 
          </div>
        </div>
        <div className="text-right">
          <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded animate-pulse">LIVE</span>
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="text-center text-[#D4AF37] text-lg font-bold animate-pulse">
            Loading Match Details...
          </div>
        </div>
      ) : (
        <div>
          {/* 1. LIVE TV / STREAMING SECTION */}
          <div className="w-full bg-[#000] relative aspect-video border-b-2 border-[#D4AF37] group">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 hover:bg-black/40 transition cursor-pointer">
              <PlayCircle size={60} className="text-white/80 group-hover:text-[#D4AF37] group-hover:scale-110 transition-all" />
              <p className="mt-2 font-bold tracking-widest text-sm flex items-center gap-2">
                <Tv size={16} /> WATCH LIVE TV
              </p>
            </div>
            {/* Live Score Overlay */}
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/90 to-transparent p-4 flex justify-between items-end">
              <div>
                <h3 className="font-bold text-2xl md:text-3xl">IND <span className={goldText}>185/3</span></h3>
                <p className="text-sm text-gray-300">18.2 Overs (CRR: 10.1)</p>
              </div>
              <div className="text-right opacity-80">
                <p className="text-sm font-bold text-[#D4AF37]">AUS</p>
                <p className="text-xs">Yet to bat</p>
              </div>
            </div>
          </div>

          <div className="p-4 md:p-8 max-w-4xl mx-auto space-y-6">
            
            {/* 2. MATCH ODDS (WINNER) */}
            <div className={`${cardBg} rounded-md border ${subBorder} overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
              <div className="bg-[#1E3A8A]/30 p-3 border-b border-[#1E3A8A] flex justify-between items-center">
                <h2 className="font-bold flex items-center gap-2">
                  <Trophy size={16} className={goldText} /> Match Odds
                </h2>
                <Info size={14} className="text-gray-400 cursor-pointer hover:text-white" />
              </div>

              {/* Odds Headers */}
              <div className="grid grid-cols-12 p-2 border-b border-[#1E3A8A]/50 text-xs font-bold text-gray-400 text-center bg-[#051126]/50">
                <div className="col-span-6 text-left pl-2">Team</div>
                <div className="col-span-3 text-[#72bbef]">BACK</div>
                <div className="col-span-3 text-[#faa9ba]">LAY</div>
              </div>

              {/* India Odds */}
              <div className="grid grid-cols-12 p-2 border-b border-[#1E3A8A]/30 items-center hover:bg-[#1E3A8A]/20 transition">
                <div className="col-span-6 font-bold text-sm md:text-base pl-2">India</div>
                <div className="col-span-3 p-1">
                  <button className={`w-full ${backColor} font-bold py-2 rounded-sm flex flex-col items-center leading-tight shadow-md active:scale-95`}>
                    <span className="text-sm md:text-base">1.85</span>
                    <span className="text-[10px] font-normal opacity-80">100K</span>
                  </button>
                </div>
                <div className="col-span-3 p-1">
                  <button className={`w-full ${layColor} font-bold py-2 rounded-sm flex flex-col items-center leading-tight shadow-md active:scale-95`}>
                    <span className="text-sm md:text-base">1.86</span>
                    <span className="text-[10px] font-normal opacity-80">150K</span>
                  </button>
                </div>
              </div>

              {/* Australia Odds */}
              <div className="grid grid-cols-12 p-2 items-center hover:bg-[#1E3A8A]/20 transition">
                <div className="col-span-6 font-bold text-sm md:text-base pl-2">Australia</div>
                <div className="col-span-3 p-1">
                  <button className={`w-full ${backColor} font-bold py-2 rounded-sm flex flex-col items-center leading-tight shadow-md active:scale-95`}>
                    <span className="text-sm md:text-base">2.10</span>
                    <span className="text-[10px] font-normal opacity-80">50K</span>
                  </button>
                </div>
                <div className="col-span-3 p-1">
                  <button className={`w-full ${layColor} font-bold py-2 rounded-sm flex flex-col items-center leading-tight shadow-md active:scale-95`}>
                    <span className="text-sm md:text-base">2.12</span>
                    <span className="text-[10px] font-normal opacity-80">80K</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 3. FANCY MARKETS (SESSION / YES-NO) */}
            <div className={`${cardBg} rounded-md border ${subBorder} overflow-hidden shadow-[0_0_15px_rgba(0,0,0,0.5)]`}>
              <div className="bg-[#1E3A8A]/30 p-3 border-b border-[#1E3A8A] flex justify-between items-center">
                <h2 className="font-bold flex items-center gap-2">
                  <TrendingUp size={16} className={goldText} /> Fancy Market (Session)
                </h2>
                <AlertCircle size={14} className="text-gray-400 cursor-pointer hover:text-white" />
              </div>

              {/* Fancy Headers */}
              <div className="grid grid-cols-12 p-2 border-b border-[#1E3A8A]/50 text-xs font-bold text-gray-400 text-center bg-[#051126]/50">
                <div className="col-span-6 text-left pl-2">Market</div>
                <div className="col-span-3 text-[#faa9ba]">NO (Lay)</div>
                <div className="col-span-3 text-[#72bbef]">YES (Back)</div>
              </div>

              {/* Fancy 1: 20 Overs Runs */}
              <div className="grid grid-cols-12 p-2 border-b border-[#1E3A8A]/30 items-center hover:bg-[#1E3A8A]/20 transition">
                <div className="col-span-6 pl-2">
                  <p className="font-bold text-sm text-white">20 Over IND Runs</p>
                  <p className="text-[10px] text-gray-400">Min: 100 | Max: 100K</p>
                </div>
                <div className="col-span-3 p-1">
                  <button className={`w-full ${layColor} font-bold py-2 rounded-sm flex flex-col items-center leading-tight shadow-md active:scale-95`}>
                    <span className="text-sm md:text-base">205</span>
                    <span className="text-[10px] font-normal opacity-80">100</span>
                  </button>
                </div>
                <div className="col-span-3 p-1">
                  <button className={`w-full ${backColor} font-bold py-2 rounded-sm flex flex-col items-center leading-tight shadow-md active:scale-95`}>
                    <span className="text-sm md:text-base">206</span>
                    <span className="text-[10px] font-normal opacity-80">100</span>
                  </button>
                </div>
              </div>

              {/* Fancy 2: Fall of 4th Wicket */}
              <div className="grid grid-cols-12 p-2 items-center hover:bg-[#1E3A8A]/20 transition">
                <div className="col-span-6 pl-2">
                  <p className="font-bold text-sm text-white">Fall of 4th Wkt IND</p>
                  <p className="text-[10px] text-gray-400">Min: 100 | Max: 50K</p>
                </div>
                <div className="col-span-3 p-1">
                  <button className={`w-full ${layColor} font-bold py-2 rounded-sm flex flex-col items-center leading-tight shadow-md active:scale-95`}>
                    <span className="text-sm md:text-base">190</span>
                    <span className="text-[10px] font-normal opacity-80">110</span>
                  </button>
                </div>
                <div className="col-span-3 p-1">
                  <button className={`w-full ${backColor} font-bold py-2 rounded-sm flex flex-col items-center leading-tight shadow-md active:scale-95`}>
                    <span className="text-sm md:text-base">191</span>
                    <span className="text-[10px] font-normal opacity-80">90</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};