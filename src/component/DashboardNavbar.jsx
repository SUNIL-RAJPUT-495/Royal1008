import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Yahan maine 'Menu' icon add kiya hai
import { Crown, Wallet, PlusCircle, User, Bell, ChevronDown, LogOut, History, Menu } from 'lucide-react';
import logo from '../assets/logo.png'; 

// Prop mein 'toggleSidebar' receive karein
export const DashboardNavbar = ({ toggleSidebar }) => {
  const navigate = useNavigate();
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  // Dummy balance
  const walletBalance = "5,420.00"; 

  // --- ROYAL THEME STYLES ---
  const goldText = "text-[#D4AF37]";
  const textGoldGradient = "text-transparent bg-clip-text bg-gradient-to-r from-[#F3C669] via-[#D4AF37] to-[#F3C669]";
  const goldBorder = "border-[#D4AF37]";
  const depositBtnClass = "bg-gradient-to-b from-[#F3C669] via-[#D4AF37] to-[#8E6E1E] text-black font-extrabold uppercase tracking-wide px-3 py-1.5 md:px-4 md:py-2 rounded-sm shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:brightness-110 active:scale-95 transition-all flex items-center gap-1";

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 bg-[#051126] border-b ${goldBorder} shadow-[0_4px_20px_rgba(0,0,0,0.8)]`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* --- LEFT: MENU BUTTON & LOGO SECTION --- */}
          <div className="flex items-center gap-2 md:gap-3">
            
            {/* Mobile Menu Button - Sirf mobile par dikhega */}
            <button 
              onClick={toggleSidebar}
              className="md:hidden p-1 text-[#D4AF37] hover:bg-[#1E3A8A]/30 rounded transition-colors"
            >
              <Menu size={26} />
            </button>

            <Link to="/casino" className="flex items-center gap-2 md:gap-3 cursor-pointer">
              <div className={`relative h-10 w-10 md:h-12 md:w-12 rounded-full border border-[#D4AF37] bg-black/40 shadow-[0_0_15px_rgba(212,175,55,0.3)] flex items-center justify-center overflow-hidden`}>
                {logo ? (
                  <img src={logo} alt="Royal Logo" className="h-full w-full object-cover" />
                ) : (
                  <Crown className="h-6 w-6 text-[#D4AF37]" />
                )}
              </div>
              {/* Mobile par sirf 'R1008', Desktop par poora naam */}
              <span className="text-lg md:text-xl font-bold tracking-wider text-white">
                <span className="hidden md:inline">ROYAL</span><span className="md:hidden">R</span><span className={textGoldGradient}>1008</span>
              </span>
            </Link>
          </div>

          {/* --- RIGHT: WALLET & PROFILE SECTION --- */}
          <div className="flex items-center gap-2 md:gap-5">
            
            {/* Notification Bell (Optional) */}
            <button className="hidden md:flex text-gray-400 hover:text-[#D4AF37] transition relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-600 rounded-full border-2 border-[#051126]"></span>
            </button>

            {/* --- THE WALLET BOX --- */}
            <div className="flex items-center gap-2 bg-[#1E3A8A]/30 border border-[#1E3A8A] rounded-sm p-1 shadow-inner">
              
              {/* Balance Show */}
              <div className="flex flex-col justify-center px-2 md:px-3 text-right">
                <span className="text-[10px] md:text-xs text-gray-400 leading-none uppercase font-bold tracking-wider">Balance</span>
                <span className="text-sm md:text-base font-mono font-bold text-white leading-none mt-1">
                  ₹ <span className={goldText}>{walletBalance}</span>
                </span>
              </div>

              {/* Deposit Button */}
              <button 
                onClick={() => navigate('/deposit')}
                className={depositBtnClass}
              >
                <PlusCircle size={16} className="md:hidden" /> 
                <span className="hidden md:inline text-xs md:text-sm">Deposit</span> 
              </button>
            </div>

            {/* --- PROFILE DROPDOWN --- */}
            <div className="relative ml-1 md:ml-0">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center justify-center h-9 w-9 md:h-10 md:w-10 rounded-full border border-[#D4AF37]/50 bg-[#0a192f] hover:bg-[#1E3A8A]/50 transition text-[#D4AF37]"
              >
                <User size={18} className="md:hidden" />
                <User size={20} className="hidden md:block" />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-3 w-48 bg-[#0a192f] border border-[#D4AF37]/40 rounded-sm shadow-[0_10px_30px_rgba(0,0,0,0.8)] py-2 animate-fade-in">
                  
                  <div className="px-4 py-2 border-b border-[#1E3A8A]">
                    <p className="text-xs text-gray-400">Logged in as</p>
                    <p className="text-sm font-bold text-white truncate">Player_007</p>
                  </div>

                  <Link to="/profile" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-[#1E3A8A]/40 hover:text-[#D4AF37] transition">
                    <User size={16} /> My Profile
                  </Link>
                  <Link to="/bets" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-[#1E3A8A]/40 hover:text-[#D4AF37] transition">
                    <History size={16} /> My Bets
                  </Link>
                  <Link to="/wallet" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-[#1E3A8A]/40 hover:text-[#D4AF37] transition">
                    <Wallet size={16} /> Wallet Statement
                  </Link>

                  <div className="border-t border-[#1E3A8A] mt-1">
                    <button 
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-500/10 transition"
                    >
                      <LogOut size={16} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};