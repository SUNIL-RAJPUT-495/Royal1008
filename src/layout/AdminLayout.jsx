import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { AdminSidebar } from '../component/admin/AdminSidebar';
import { AdminNavbar } from '../component/admin/AdminNavbar';

export const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020813] text-white flex overflow-hidden font-sans">
      
      {/* Sidebar Component */}
      <AdminSidebar 
        isOpen={isSidebarOpen} 
        closeSidebar={() => setIsSidebarOpen(false)} 
      />

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div 
          onClick={() => setIsSidebarOpen(false)} 
          className="fixed inset-0 bg-black/70 z-40 md:hidden animate-fade-in" 
        />
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        
        {/* Navbar Component */}
        <AdminNavbar toggleSidebar={() => setIsSidebarOpen(true)} />

        {/* Dynamic Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#020813]">
          <Outlet /> {/* Yahan aapka Dashboard, Users ya Deposits page aayega */}
        </main>
        
      </div>
    </div>
  );
};