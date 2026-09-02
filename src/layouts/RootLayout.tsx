import { Outlet, useLocation } from 'react-router';
import { Navbar } from '../components/shared/Navbar';
import { Footer } from '../components/shared/Footer';
import { Banner } from '../components/home/Banner';
import { useGlobalStore } from '../store/global';
import { Sheet } from '../components/shared/Sheet';

export const RootLayout = () => {
  const { pathname } = useLocation();

  const isSheetOpen = useGlobalStore((state) => state.isSheetOpen);

  return (
    <div className='h-screen flex flex-col'>
      <Navbar />

      {pathname === '/' && <Banner />}
      <main className='container mx-auto px-4 my-8 flex-1'>
        <Outlet />
      </main>

      {isSheetOpen && <Sheet />}

      <Footer />
    </div>
  );
};
