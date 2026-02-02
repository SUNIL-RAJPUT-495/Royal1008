import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { 
  Trophy, Activity, Gamepad2, Gift, Search, 
  ChevronRight, Flame, MonitorPlay, Clock, Palette 
} from 'lucide-react';

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const [activeTab, setActiveTab] = useState('Cricket');
  const navigate = useNavigate(); 

  const goldGlow = "shadow-[0_0_15px_rgba(212,175,55,0.2)]";

  const menuItems = [
    { name: 'In-Play', icon: <Activity size={18} />, count: 12, isLive: true, path: '/inplay' }, 
    { name: 'Cricket', icon: <Trophy size={18} />, count: 5, path: '/cricket' },
    { name: 'Football', icon: <Gamepad2 size={18} />, count: 42, path: '/football' },
    { name: 'Tennis', icon: <MonitorPlay size={18} />, count: 8, path: '/tennis' },
    
    // 2. New Color Prediction Option Added Here
    { name: 'Color Prediction', icon: <Palette size={18} />, count: 'HOT', path: '/colortrading' }, 

    { name: 'Casino', icon: <Gift size={18} />, count: null, path: '/casino' }, 
    
    { name: 'Horse Racing', icon: <Flame size={18} />, count: 3, path: '/horseracing' },
    { name: 'Greyhound', icon: <Clock size={18} />, count: 11, path: '/greyhound' },
  ];

  const handleNavigation = (item) => {
    setActiveTab(item.name);
    if (item.path) {
      navigate(item.path);
    }
    if (window.innerWidth < 768) { 
        setIsOpen(false); 
    }
  };

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={`
          fixed top-20 left-0 h-[calc(100vh-5rem)] w-64 bg-[#051126] border-r border-[#D4AF37]/30 
          transform transition-transform duration-300 ease-in-out z-40 overflow-y-auto
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0
          [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-[#051126] [&::-webkit-scrollbar-thumb]:bg-[#D4AF37]/50
        `}
      >
        
        <div className="p-4 border-b border-[#D4AF37]/20">
          <div className={`flex items-center bg-[#0a192f] border border-[#D4AF37]/30 rounded-full px-3 py-2 focus-within:border-[#D4AF37] focus-within:${goldGlow} transition-all`}>
            <Search size={16} className="text-gray-400" />
            <input 
              type="text" 
              placeholder="Search Events..." 
              className="bg-transparent border-none outline-none text-sm text-white ml-2 w-full placeholder-gray-500"
            />
          </div>
        </div>

        <div className="py-2">
          {menuItems.map((item) => (
            <div 
              key={item.name}
              onClick={() => handleNavigation(item)} 
              className={`
                group flex items-center justify-between px-4 py-3 cursor-pointer border-l-4 transition-all duration-200
                ${activeTab === item.name 
                  ? `border-[#D4AF37] bg-gradient-to-r from-[#D4AF37]/10 to-transparent` 
                  : 'border-transparent hover:bg-[#D4AF37]/5 hover:border-[#D4AF37]/50'}
              `}
            >
              <div className="flex items-center gap-3">
                <span className={`${activeTab === item.name ? 'text-[#D4AF37]' : 'text-gray-400 group-hover:text-[#D4AF37]'}`}>
                  {item.icon}
                </span>
                
                <span className={`text-sm font-medium tracking-wide ${activeTab === item.name ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                  {item.name}
                </span>
              </div>

              <div className="flex items-center gap-2">
                {item.isLive && (
                  <span className="animate-pulse bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    LIVE
                  </span>
                )}
                
                {/* Special styling for HOT tag or counts */}
                {item.count !== null && (
                  <span className={`text-xs font-bold ${
                    item.count === 'HOT' ? 'text-red-500 animate-pulse' : 
                    activeTab === item.name ? 'text-[#D4AF37]' : 'text-gray-500'
                  }`}>
                    {item.count}
                  </span>
                )}
                
                {(activeTab === item.name) && <ChevronRight size={14} className="text-[#D4AF37]" />}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 px-4">
          <h3 className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider mb-2 opacity-80">Quick Links</h3>
          <ul className="space-y-1">
            <li className="text-gray-400 text-sm hover:text-[#D4AF37] cursor-pointer py-1">My Bets</li>
            <li className="text-gray-400 text-sm hover:text-[#D4AF37] cursor-pointer py-1">Transaction History</li>
            <li className="text-gray-400 text-sm hover:text-[#D4AF37] cursor-pointer py-1">Rules & Regulations</li>
          </ul>
        </div>
      </aside>
    </>
  );
};