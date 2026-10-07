import { Link, NavLink } from 'react-router';
import { navbarLinks } from '../../constants/links';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Logo } from './Logo';
import { useGlobalStore } from '../../store/global';
import { useCartStore } from '../../store/cart';
import { useUser } from '../../hooks/auth/useUser';

export const Navbar = () => {
  const openSheet = useGlobalStore((state) => state.openSheet);
  const setActiveNavbarMobile = useGlobalStore(
    (state) => state.setActiveNavbarMobile,
  );

  const totalItemsInCart = useCartStore((state) => state.totalItemsInCart);

  const { session, isLoading } = useUser();

  return (
    <header className='bg-white text-black py-4 px-5 flex items-center justify-between border-b border-slate-200 lg:px-12'>
      <Logo />
      <nav className='space-x-5 hidden md:flex'>
        {navbarLinks.map((link) => (
          <NavLink
            key={link.id}
            to={link.href}
            className={({ isActive }) =>
              `${isActive ? 'text-red-600 underline' : ''} transition-all duration-300 font-medium hover:text-red-600 hover:underline`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </nav>

      <div className='flex gap-5 items-center'>
        <button className='cursor-pointer' onClick={() => openSheet('search')}>
          <Search />
        </button>

        {isLoading ? (
          <p>Cargando...</p>
        ) : session ? (
          <div className='relative'>
            <Link
              to='/account'
              className='border-2 border-slate-700 w-9 h-9 rounded-full grid place-items-center text-lg font-bold'
            >
              J
            </Link>
          </div>
        ) : (
          <Link to='/login'>
            <User size={25} />
          </Link>
        )}

        <button
          className='relative cursor-pointer'
          onClick={() => openSheet('cart')}
        >
          <span className='absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full'>
            {totalItemsInCart}
          </span>
          <ShoppingCart />
        </button>

        <button
          className='md:hidden'
          onClick={() => setActiveNavbarMobile(true)}
        >
          <Menu />
        </button>
      </div>
    </header>
  );
};
