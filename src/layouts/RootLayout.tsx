import { Outlet, useLocation } from 'react-router';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Banner } from '../components/home/Banner';

export const RootLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />

      {pathname === '/' && <Banner />}
      <main className='container mx-auto px-4 my-8 flex-1'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
