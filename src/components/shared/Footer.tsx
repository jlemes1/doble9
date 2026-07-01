import { ChevronRight } from 'lucide-react';
import { Logo } from './Logo';
import { Link } from 'react-router';
import { socialLinks } from '../../constants/links';

export const Footer = () => {
  return (
    <footer className='bg-gray-950 flex justify-between gap-10 text-slate-200 text-sm flex-wrap py-16 px-12 mt-10 md:flex-nowrap '>
      <Logo />

      <div className='flex flex-col gap-4 flex-1'>
        <p className='font-semibold tracking-tighter uppercase'>
          Quedate al tanto de todo!
        </p>

        <div className='border border-gray-700 flex items-center gap-2 px-3 py-2 rounded-xl'>
          <input
            type='email'
            placeholder='Email'
            className='pl-2 bg-gray-950 text-slate-200 w-full focus:outline-none'
          />
          <button>
            <ChevronRight />
          </button>
        </div>
        <div className='flex'>
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target='_blank'
              rel='noreferrer'
              className='text-slate-300'
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-2 flex-1'>
        <nav className='flex flex-col gap-2 text-sm uppercase font-semibold'>
          <Link to='/shirts'>Camisetas</Link>
          <Link to='/about'>Nosotros</Link>
        </nav>
      </div>

      <div className='flex flex-col gap-2 flex-1'>
        <p className='font-semibold tracking-tighter uppercase'>
          Envíos a todo el país
        </p>
      </div>
    </footer>
  );
};
