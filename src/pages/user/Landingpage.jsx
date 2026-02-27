import React, { useState } from 'react';
import { Crown, Trophy, Smartphone, ShieldCheck, Menu, X, ChevronRight, PlayCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


import { Navebar } from '../../component/Navebar';

export const Landingpage = () => {
 const navigate = useNavigate();



  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-extrabold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300";
  const textGoldGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#F3C669] via-[#D4AF37] to-[#F3C669]";


  const goldBorder = "border-[#D4AF37]";
  const subGoldBorder = "border-[#D4AF37]/40"; 

  return (
    <>
      <div className="min-h-screen bg-[#051126] text-white font-sans selection:bg-[#D4AF37] selection:text-black">

       <Navebar/>

        <div className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
          

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-[#423308] via-[#051126] to-[#000000] -z-10"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded border ${goldBorder} bg-[#000000]/60 text-[#D4AF37] text-xs font-bold uppercase mb-6 shadow-[0_0_15px_rgba(212,175,55,0.3)] animate-pulse`}>
              <Trophy size={14} /> #1 Premium Betting Platform
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white uppercase drop-shadow-2xl">
              Play Like a <span className={textGoldGradient}>King</span>.
              <br /> Win Like a Legend.
            </h1>
            <p className="text-[#E5E7EB] text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium">
              Experience the thrill of premium cricket betting and live casino games with instant withdrawals and 24/7 VIP support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className={`${goldBtnClass} px-10 py-4 text-lg rounded-sm`} onClick={()=>{navigate("/casino")}}>
                Start Betting Now
              </button>
              <button className={`px-8 py-4 bg-[#051126] border border-[#D4AF37] text-[#D4AF37] font-bold text-lg rounded-sm hover:bg-[#D4AF37] hover:text-black transition flex items-center justify-center gap-2 uppercase shadow-[0_0_10px_rgba(212,175,55,0.2)]`}>
                <Smartphone size={20} /> Download App
              </button>
            </div>
          </div>
        </div>

        {/* --- LIVE TICKER (Gold Bar) --- */}
        <div className="bg-gradient-to-r from-[#8E6E1E] via-[#D4AF37] to-[#8E6E1E] py-2 overflow-hidden whitespace-nowrap relative border-y-2 border-[#FDE68A]">
          <div className="animate-marquee inline-block text-[#051126] font-extrabold text-sm md:text-base uppercase tracking-wider">
            🏏 IND vs AUS: India (1.85) Draw (5.00) Australia (2.10) &nbsp;&nbsp; • &nbsp;&nbsp;
            ⚽ MAN UTD vs LIV: Man Utd (2.40) Draw (3.20) Liv (2.80) &nbsp;&nbsp; • &nbsp;&nbsp;
            🎾 DJOKOVIC vs ALCARAZ: Djokovic (1.90) Alcaraz (1.90) &nbsp;&nbsp; • &nbsp;&nbsp;
            🎰 JACKPOT ALERT: Mega Moolah at ₹10,00,00,000
          </div>
        </div>

        {/* --- GAME CATEGORIES --- */}
        <div className="max-w-7xl mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase text-white">
            <span className={`border-b-4 border-[#D4AF37] pb-2 ${textGoldGradient}`}>Our Royal Games</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cards now use 'subGoldBorder' instead of blue border */}
            {/* Card 1: Cricket */}
            <div className={`group relative rounded-sm overflow-hidden cursor-pointer bg-[#0a192f] border ${subGoldBorder} hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300`}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1531415074984-61e663d3f94f?auto=format&fit=crop&q=80&w=800" alt="Cricket" className="w-full h-64 object-cover group-hover:scale-110 transition duration-500 opacity-80 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className={`text-2xl font-bold text-white mb-2 uppercase italic group-hover:text-[#D4AF37] transition`}>Cricket Exchange</h3>
                <p className="text-gray-300 text-sm mb-4">Best odds on IPL, World Cup & T20 Leagues.</p>
                <button className={`${goldBtnClass} w-full py-2 text-sm rounded-sm flex items-center justify-center gap-2 shadow-none`}>
                  BET NOW <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Card 2: Casino */}
            <div className={`group relative rounded-sm overflow-hidden cursor-pointer bg-[#0a192f] border ${subGoldBorder} hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300`}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&q=80&w=800" alt="Casino" className="w-full h-64 object-cover group-hover:scale-110 transition duration-500 opacity-80 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className={`text-2xl font-bold text-white mb-2 uppercase italic group-hover:text-[#D4AF37] transition`}>Live Casino</h3>
                <p className="text-gray-300 text-sm mb-4">Roulette, Baccarat, Andar Bahar & Teen Patti.</p>
                <button className={`${goldBtnClass} w-full py-2 text-sm rounded-sm flex items-center justify-center gap-2 shadow-none`}>
                  PLAY NOW <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {/* Card 3: Football/Sports */}
            <div className={`group relative rounded-sm overflow-hidden cursor-pointer bg-[#0a192f] border ${subGoldBorder} hover:border-[#D4AF37] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-300`}>
              <div className="absolute inset-0 bg-gradient-to-t from-[#051126] via-transparent to-transparent z-10"></div>
              <img src="https://images.unsplash.com/photo-1579952363873-27f3bde9be2e?auto=format&fit=crop&q=80&w=800" alt="Football" className="w-full h-64 object-cover group-hover:scale-110 transition duration-500 opacity-80 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-6 z-20 w-full">
                <h3 className={`text-2xl font-bold text-white mb-2 uppercase italic group-hover:text-[#D4AF37] transition`}>Global Sports</h3>
                <p className="text-gray-300 text-sm mb-4">Football, Tennis, Horse Racing & More.</p>
                <button className={`${goldBtnClass} w-full py-2 text-sm rounded-sm flex items-center justify-center gap-2 shadow-none`}>
                  BET NOW <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- FEATURES SECTION --- */}
        {/* Changed border to Gold */}
        <div className="bg-[#020617] py-20 border-t border-[#D4AF37]/30">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className={`p-6 bg-[#0a192f] rounded-sm border ${subGoldBorder} hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 group`}>
              <div className={`w-16 h-16 bg-[#051126] border ${goldBorder} rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform`}>
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white uppercase group-hover:text-[#D4AF37]">100% Secure</h3>
              <p className="text-gray-400">Advanced encryption ensures your data and funds are always safe.</p>
            </div>
            <div className={`p-6 bg-[#0a192f] rounded-sm border ${subGoldBorder} hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 group`}>
              <div className={`w-16 h-16 bg-[#051126] border ${goldBorder} rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform`}>
                <Trophy size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white uppercase group-hover:text-[#D4AF37]">Fast Withdrawals</h3>
              <p className="text-gray-400">Get your winnings instantly into your bank account or UPI.</p>
            </div>
            <div className={`p-6 bg-[#0a192f] rounded-sm border ${subGoldBorder} hover:border-[#D4AF37] hover:-translate-y-2 transition-all duration-300 group`}>
              <div className={`w-16 h-16 bg-[#051126] border ${goldBorder} rounded-full flex items-center justify-center mx-auto mb-4 text-[#D4AF37] shadow-[0_0_15px_rgba(212,175,55,0.2)] group-hover:scale-110 transition-transform`}>
                <PlayCircle size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2 text-white uppercase group-hover:text-[#D4AF37]">24/7 Support</h3>
              <p className="text-gray-400">Our VIP support team is always ready to assist you via WhatsApp.</p>
            </div>
          </div>
        </div>

        {/* --- FOOTER --- */}
        <footer className={`bg-[#051126] py-10 text-center md:text-left border-t border-[#D4AF37]/50`}>
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <Crown className="h-5 w-5 text-[#D4AF37]" />
                <span className="text-xl font-bold text-white">ROYAL<span className={textGoldGradient}>1008</span></span>
              </div>
              <p className="text-gray-400 text-sm mt-2">© 2024 Royal1008. All Rights Reserved.</p>
            </div>

            <div className="flex gap-6 text-[#F3C669] text-sm font-medium">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Responsible Gaming</a>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 mt-8 pt-8 border-t border-[#D4AF37]/20 text-center">
            <p className="text-xs text-gray-500">
              18+ Only. Gambling involves risk. Please gamble responsibly.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};