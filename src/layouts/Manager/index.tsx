// import { Outlet } from 'react-router-dom';

import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { NavBar } from './components/NavBar';
import { Sidebar } from './components/Sidebar';

const ManagerLayout = () => {
  return (
    <>
      <Sidebar />
      <main className='ease-soft-in-out xl:ml-68.5 relative h-full max-h-screen rounded-xl transition-all duration-200'>
        <NavBar />
        {/* cards */}
        <Outlet />
        {/* end cards */}
        <Footer />
      </main>
    </>
  );
};

export default ManagerLayout;
