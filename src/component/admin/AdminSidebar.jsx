import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, ArrowDownToLine, ArrowUpFromLine, Settings, LogOut, X } from 'lucide-react';

export const AdminSidebar = ({ isOpen, closeSidebar }) => {
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: <LayoutDashboard size={20} /> },
    { name: 'Users', path: '/admin/users', icon: <Users size={20} /> },
    { name: 'Deposits', path: '/admin/deposits', icon: <ArrowDownToLine size={20} />, badge: 3 },
    { name: 'Withdrawals', path: '/admin/withdrawals', icon: <ArrowUpFromLine size={20} />, badge: 5 },
    { name: 'Settings', path: '/admin/settings', icon: <Settings size={20} /> },
  ];

  return (
    <aside 
      className={`fixed md:static inset-y-0 left-0 z-50 w-64 bg-[#051126] border-r border-[#1E3A8A] transform transition-transform duration-300 ease-in-out flex flex-col shadow-[4px_0_24px_rgba(0,0,0,0.5)]
      ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
    >
      {/* Logo Section */}
      <div className="h-20 flex items-center justify-center border-b border-[#1E3A8A] px-4 relative shrink-0">
        <h2 className="text-2xl font-black tracking-widest text-white">
          ROYAL<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F3C669] via-[#D4AF37] to-[#F3C669]">1008</span>
        </h2>
        <span className="absolute bottom-2 right-4 text-[10px] bg-red-600 text-white px-2 py-0.5 rounded uppercase font-bold tracking-widest shadow-lg">Admin</span>
        
        {/* Mobile Close Button */}
        <button onClick={closeSidebar} className="md:hidden absolute right-4 text-gray-400 hover:text-white">
          <X size={24} />
        </button>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4 ml-2">Main Menu</p>
        
        {menuItems.map((item) => {
          const isActive = location.pathname.includes(item.path);
          return (
            <Link 
              key={item.name}
              to={item.path}
              onClick={closeSidebar} // Mobile pe click karne ke baad band ho jaye
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all font-bold ${isActive ? 'bg-[#D4AF37] text-black shadow-md' : 'text-gray-400 hover:bg-[#1E3A8A]/30 hover:text-[#D4AF37]'}`}
            >
              {item.icon} {item.name}
              {item.badge && (
                <span className="ml-auto bg-red-500 text-white text-[10px] px-2 py-0.5 rounded-full">{item.badge}</span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-[#1E3A8A] shrink-0">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-md text-red-400 hover:bg-red-500/10 hover:text-red-500 transition-all font-bold">
          <LogOut size={20} /> Logout
        </button>
      </div>
    </aside>
  );
};