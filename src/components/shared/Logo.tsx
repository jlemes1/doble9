import { Link } from 'react-router';

export const Logo = () => {
  return (
    <Link
      to='/'
      className={`text-2xl font-bold tracking-tighter transition-all`}
    >
      <p className='hidden lg:block'>
        DOBLE
        <span className='text-red-600'>9</span>
      </p>

      <p className='lg:hidden flex text-4xl'>
        <span>D</span>
        <span className='text-red-600'>9</span>
      </p>
    </Link>
  );
};
