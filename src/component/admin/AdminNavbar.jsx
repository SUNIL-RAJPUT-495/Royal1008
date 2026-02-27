import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

export const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <header className="h-20 bg-[#0a192f] border-b border-[#1E3A8A] flex items-center justify-between px-4 md:px-8 shadow-md shrink-0">
      
      <div className="flex items-center gap-4">
        <button onClick={toggleSidebar} className="md:hidden text-[#D4AF37] p-2 hover:bg-[#1E3A8A] rounded-md transition">
          <Menu size={24} />
        </button>
        <h1 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white hidden sm:block">
          Admin <span className="text-[#D4AF37]">Portal</span>
        </h1>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        {/* Search Bar (Hidden on small mobile) */}
        <div className="hidden md:flex items-center bg-[#051126] border border-[#1E3A8A] rounded-md px-3 py-2">
          <Search size={18} className="text-gray-500" />
          <input type="text" placeholder="Search user or TXN..." className="bg-transparent border-none text-sm text-white focus:outline-none ml-2 w-48" />
        </div>

        {/* Notifications */}
        <button className="text-gray-400 hover:text-[#D4AF37] transition relative">
          <Bell size={22} />
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-red-600 rounded-full border-2 border-[#0a192f]"></span>
        </button>

        {/* Admin Avatar */}
        <div className="flex items-center gap-3 border-l border-[#1E3A8A] pl-4 md:pl-6">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-white leading-none">Super Admin</p>
            <p className="text-[10px] text-green-400 uppercase tracking-widest mt-1">Online</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-[#D4AF37] flex items-center justify-center text-black font-black text-lg shadow-[0_0_10px_rgba(212,175,55,0.5)]">
            A
          </div>
        </div>
      </div>
    </header>
  );
};