import { Link } from 'react-router';

export const Banner = () => {
  return (
    <div className='bg-red-600 text-white flex flex-col items-center gap-8 px-4 py-20'>
      <h1 className='text-4xl lg:text-6xl font-bold '>Elegí tu camiseta</h1>

      <Link
        to='/shirts'
        className='bg-gray-900 hover:bg-gray-950 text-white font-semibold rounded-lg py-3 px-6 transition-all duration-300'
      >
        Ver camisetas
      </Link>
    </div>
  );
};
