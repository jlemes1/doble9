import { ProductGrid } from '../components/home/ProductGrid';
import { FilterContainer } from '../components/products/FilterContainer';
import { allShirts } from '../data/initialData';

export const Shirts = () => {
  return (
    <>
      <h1 className='text-5xl font-semibold text-center mb-12'>Camisetas</h1>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-start'>
        <div className='lg:col-span-1'>
          <FilterContainer />
        </div>

        <div className='lg:col-span-3'>
          <ProductGrid products={allShirts} className='mb-32' />
        </div>
      </div>
    </>
  );
};
