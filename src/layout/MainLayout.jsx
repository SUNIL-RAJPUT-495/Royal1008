import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { DashboardNavbar } from '../component/DashboardNavbar';
import { Sidebar } from '../component/Sidebar';

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#051126] flex flex-col">
      
      <DashboardNavbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      
      <div className="flex flex-1 pt-16 md:pt-20">
        
        <Sidebar isOpen={isSidebarOpen} closeSidebar={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1 w-full md:ml-64 p-4 md:p-6 transition-all duration-300">
           <Outlet /> 
        </main>
        ``

        {isSidebarOpen && (
          <div 
            onClick={() => setIsSidebarOpen(false)} 
            className="fixed inset-0 bg-black/70 z-30 md:hidden animate-fade-in"
          />
        )}
        
      </div>
    </div>
  );
};

export default MainLayout;