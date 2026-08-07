import { FeatureGrid } from '../components/home/FeatureGrid';
import { ProductGrid } from '../components/home/ProductGrid';
import { useHomeProducts } from '../hooks/products/useHomeProducts';

export const Home = () => {
  const { products, isLoading } = useHomeProducts();

  return (
    <div>
      <FeatureGrid />
      {isLoading ? (
        <div className='col-span-2 flex items-center justify-center h-125'>
          <p className='text-2xl'>Cargando...</p>
        </div>
      ) : (
        <ProductGrid title='Nuevas camisetas' products={products} />
      )}
    </div>
  );
};
