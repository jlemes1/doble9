import { FeatureGrid } from '../components/home/FeatureGrid';
import { ProductGrid } from '../components/home/ProductGrid';
import { popularShirts, recentShirts } from '../data/initialData';

export const Home = () => {
  return (
    <div>
      <FeatureGrid />
      <ProductGrid title='Nuevas camisetas' products={recentShirts} />
      <ProductGrid title='Camisetas populares' products={popularShirts} />
    </div>
  );
};
