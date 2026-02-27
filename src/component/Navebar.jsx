import logo from '../assets/logo.png';
import React, { useState, useEffect } from 'react';
import { Crown, Menu, X, LogOut, User } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom'; // 🚨 Link import kiya

export const Navebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // 1. Check if user is logged in (Local storage mein token hai ya nahi)
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem('token'); // Token hata do
    setIsLoggedIn(false); // State update karo
    navigate('/'); // Home page par bhej do
  };

  const goldBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-extrabold uppercase tracking-wide border border-[#F3C669] shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all duration-300";
  const textGoldGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#F3C669] via-[#D4AF37] to-[#F3C669]";
  const goldBorder = "border-[#D4AF37]";

  return (
    <nav className={`fixed w-full z-50 bg-[#051126]/95 backdrop-blur-md border-b ${goldBorder} shadow-[0_4px_30px_rgba(212,175,55,0.1)]`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          
          {/* --- LOGO SECTION --- */}
          {/* Logo par click karne se home par jayega */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <div className={`relative h-14 w-14 rounded-full border-2 ${goldBorder} bg-black/40 shadow-[0_0_25px_rgba(212,175,55,0.5)] flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform`}>
              {logo ? (
                <img src={logo} alt="Royal Logo" className="h-full w-full object-cover" />
              ) : (
                <Crown className="h-8 w-8 text-[#D4AF37]" />
              )}
            </div>
            <span className="text-2xl font-bold tracking-wider text-white">
              ROYAL<span className={textGoldGradient}>1008</span>
            </span>
          </Link>

          {/* --- DESKTOP MENU --- */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-bold uppercase tracking-wide text-[#F3C669]">
            {/* 🚨 <a> tag hata kar <Link> lagaya gaya hai */}
            <Link to="/cricket" className="hover:text-white hover:drop-shadow-[0_0_5px_#D4AF37] transition-all">Sports Exchange</Link>
            <Link to="/inplay" className="hover:text-white hover:drop-shadow-[0_0_5px_#D4AF37] transition-all">In-Play</Link>
            <Link to="/casino" className="hover:text-white hover:drop-shadow-[0_0_5px_#D4AF37] transition-all">Live Casino</Link>
            <Link to="/promotions" className="hover:text-white hover:drop-shadow-[0_0_5px_#D4AF37] transition-all">Promotions</Link>

            {/* 2. CONDITIONAL BUTTONS (Login/Join OR Profile/Logout) */}
            {!isLoggedIn ? (
              // Agar user login NAHI hai toh ye dikhega
              <div className="flex space-x-4">
                <button 
                  onClick={() => navigate("/login")}
                  className={`px-6 py-2 border ${goldBorder} text-[#D4AF37] rounded-sm hover:bg-[#D4AF37] hover:text-black transition font-bold uppercase shadow-[0_0_10px_rgba(212,175,55,0.2)]`}
                >
                  Login
                </button>
                <button 
                  onClick={() => navigate("/login")}
                  className={`${goldBtnClass} px-6 py-2 rounded-sm`}
                >
                  Join Now
                </button>
              </div>
            ) : (
              // Agar user LOGIN HAI toh ye dikhega
              <div className="flex items-center space-x-4">
                {/* Optional: User Profile Button */}
                <button className="flex items-center gap-2 text-white hover:text-[#D4AF37] transition">
                   <User size={18} /> My Account
                </button>
                
                {/* Logout Button */}
                <button 
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600/20 text-red-500 border border-red-500/50 hover:bg-red-600 hover:text-white rounded-sm transition font-bold uppercase"
                >
                  <LogOut size={16} /> Logout
                </button>
              </div>
            )}
          </div>

          {/* --- MOBILE HAMBURGER ICON --- */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#D4AF37]">
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* --- MOBILE DROPDOWN MENU --- */}
      {isMenuOpen && (
        <div className={`md:hidden bg-[#051126] border-b ${goldBorder}`}>
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/cricket" onClick={() => setIsMenuOpen(false)} className="block py-3 border-b border-[#D4AF37]/30 text-[#F3C669] hover:text-white">Sports Exchange</Link>
            <Link to="/inplay" onClick={() => setIsMenuOpen(false)} className="block py-3 border-b border-[#D4AF37]/30 text-[#F3C669] hover:text-white">In-Play</Link>
            <Link to="/casino" onClick={() => setIsMenuOpen(false)} className="block py-3 border-b border-[#D4AF37]/30 text-[#F3C669] hover:text-white">Live Casino</Link>
            
            <div className="pt-4 flex flex-col gap-3">
              {!isLoggedIn ? (
                <>
                  <button onClick={() => { navigate("/login"); setIsMenuOpen(false); }} className={`w-full py-3 border ${goldBorder} text-[#D4AF37] font-bold rounded-sm uppercase`}>Login</button>
                  <button onClick={() => { navigate("/login"); setIsMenuOpen(false); }} className={`w-full py-3 rounded-sm ${goldBtnClass}`}>Join Now</button>
                </>
              ) : (
                <>
                  <button className={`w-full py-3 border ${goldBorder} text-[#D4AF37] font-bold rounded-sm uppercase`}>My Account</button>
                  <button onClick={() => { handleLogout(); setIsMenuOpen(false); }} className="w-full py-3 bg-red-600/20 text-red-500 border border-red-500/50 hover:bg-red-600 hover:text-white rounded-sm font-bold uppercase">Logout</button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};