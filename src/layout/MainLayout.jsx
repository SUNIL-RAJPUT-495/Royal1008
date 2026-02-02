import { Outlet } from 'react-router-dom';
import { Navebar } from '../component/Navebar';
import { Sidebar } from '../component/Sidebar';

const MainLayout = () => {

  return (
    <>
    <Navebar/>
    <Sidebar/>
    <main className="flex-1 ml-0 md:ml-64  min-h-[calc(100vh-5rem)] transition-all duration-300">
          
           <Outlet /> 
        </main>
    
    
    </>
  );
};

export default MainLayout;