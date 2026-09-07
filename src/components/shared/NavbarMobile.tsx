import { X } from 'lucide-react';
import { useGlobalStore } from '../../store/global';
import { Link, NavLink } from 'react-router';
import { navbarLinks } from '../../constants/links';

export const NavbarMobile = () => {
  const setActiveNavbarMobile = useGlobalStore(
    (state) => state.setActiveNavbarMobile,
  );

  return (
    <div className='bg-white text-black h-screen w-full shadow-lg animate-slide-in-left z-50 flex justify-center py-32 fixed'>
      <button
        className='absolute top-5 right-5'
        onClick={() => setActiveNavbarMobile(false)}
      >
        <X size={30} className='text-black' />
      </button>

      <div className='flex flex-col gap-20'>
        <Link
          to='/'
          className='text-4xl font-bold tracking-tighter transition-all'
          onClick={() => setActiveNavbarMobile(false)}
        >
          <p className='uppercase'>
            Doble
            <span className='text-red-600'>9</span>
          </p>
        </Link>

        <nav className='flex flex-col items-center gap-5'>
          {navbarLinks.map((item) => (
            <NavLink
              to={item.href}
              key={item.id}
              className={({ isActive }) => `
                                ${
                                  isActive ? 'text-red-600 underline' : ''
                                } transition-all duration-300 font-semibold text-xl hover:text-red-600 hover:underline
                            `}
              onClick={() => setActiveNavbarMobile(false)}
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};
