import { Link, NavLink } from 'react-router';
import { navbarLinks } from '../../constants/links';
import { Handbag, Menu, Search, User } from 'lucide-react';
import { Logo } from './Logo';

export const Navbar = () => {
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
        <button>
          <Search />
        </button>

        <div className='relative'>
          <Link to='/account'>
            <User />
          </Link>
        </div>

        <div className='relative'>
          <span className='absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full'>
            0
          </span>
          <Handbag />
        </div>

        <button className='md:hidden'>
          <Menu />
        </button>
      </div>
    </header>
  );
};
