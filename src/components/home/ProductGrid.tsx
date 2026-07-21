import { CardProduct } from '../products/CardProduct';
import type { Product } from '../../types/product';

type Props = {
  title?: string;
  products: Product[];
  className?: string;
};

export const ProductGrid = ({
  products,
  title,
  className = 'my-32',
}: Props) => {
  return (
    <div className={className}>
      {title && (
        <h2 className='text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl'>
          {title}
        </h2>
      )}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
        {products.map((product) => (
          <CardProduct
            key={product.id}
            name={product.name}
            price={product.price}
            img={product.images[0]}
            slug={product.slug}
          />
        ))}
      </div>
    </div>
  );
};
