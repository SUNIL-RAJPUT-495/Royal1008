import logo from '../assets/logo.png';
import React, { useState } from 'react';
import { Crown, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';



export const Navebar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const navigate = useNavigate();
    
  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-extrabold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300";
  const textGoldGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#F3C669] via-[#D4AF37] to-[#F3C669]";

  const goldBorder = "border-[#D4AF37]";
  const subGoldBorder = "border-[#D4AF37]/40";
  return (
     <nav className={`fixed w-full z-50 bg-[#051126]/95 backdrop-blur-md border-b ${goldBorder} shadow-[0_4px_30px_rgba(212,175,55,0.1)]`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-24">

              <div className="flex items-center gap-3 cursor-pointer group">
                <div className={`relative h-14 w-14 rounded-full border-2 ${goldBorder} bg-black/40 shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform`}>
                 
                  {logo ? (
                    <img
                      src={logo}
                      alt="Royal Logo"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <Crown className="h-8 w-8 text-[#D4AF37]" />
                  )}
                </div>

                <span className="text-2xl font-bold tracking-wider text-white">
                  ROYAL<span className={textGoldGradient}>1008</span>
                </span>
              </div>

              <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wide text-[#F3C669]">
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_5px_#D4AF37] transition-all"onClick={()=>{navigate("/cricket")}}>Sports Exchange</a>
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_5px_#D4AF37] transition-all" onClick={()=>{navigate("/inplay")}}>In-Play</a>
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_5px_#D4AF37] transition-all" onClick={()=>{navigate("/casino")}}>Live Casino</a>
                <a href="#" className="hover:text-white hover:drop-shadow-[0_0_5px_#D4AF37] transition-all" onClick={()=>{navigate("/promotions")}}>Promotions</a>

                <button className={`px-6 py-2 border ${goldBorder} text-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-black transition font-bold uppercase shadow-[0_0_10px_rgba(212,175,55,0.2)]`} onClick={()=>navigate("/login")}>
                  Login
                </button>
                <button className={`${goldBtnClass} px-6 py-2 rounded-sm`}>
                  Join Now
                </button>
              </div>

              <div className="md:hidden">
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#D4AF37]">
                  {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
              </div>
            </div>
          </div>

          {isMenuOpen && (
            <div className={`md:hidden bg-[#051126] border-b ${goldBorder}`}>
              <div className="px-4 pt-2 pb-6 space-y-2">
                <a href="#" className="block py-3 border-b border-[#D4AF37]/30 text-[#F3C669] hover:text-white" >Sports Exchange</a>
                <a href="#" className="block py-3 border-b border-[#D4AF37]/30 text-[#F3C669] hover:text-white" onClick={()=>{}}>Live Casino</a>
                <div className="pt-4 flex flex-col gap-3">
                  <button className={`w-full py-3 border ${goldBorder} text-[#D4AF37] font-bold rounded-sm uppercase`}>Login</button>
                  <button className={`w-full py-3 rounded-sm ${goldBtnClass}`}>Join Now</button>
                </div>
              </div>
            </div>
          )}
        </nav>)
};