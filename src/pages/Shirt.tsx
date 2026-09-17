import { Minus, Plus, Truck } from 'lucide-react';
import { ProductDescription } from '../components/one-product/ProductDescription';
import { Separator } from '../components/ui/Separator';
import { formatPrice } from '../utils';
import { useProduct } from '../hooks/products/useProduct';
import { useParams } from 'react-router';
import { useState } from 'react';
import type { Variant } from '../types/product';
import { GridImages } from '../components/one-product/GridImages';
import { useCounterStore } from '../store/counter';
import { useCartStore } from '../store/cart';
import { useGlobalStore } from '../store/global';

export const Shirt = () => {
  const { slug } = useParams<{ slug: string }>();

  const { product, isLoading, isError } = useProduct(slug || '');

  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<Variant | null>(null);

  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  const addItem = useCartStore((state) => state.addItem);

  const addToCart = () => {
    if (selectedVariant) {
      addItem({
        variantId: selectedVariant.id,
        productId: product?.id || '',
        name: product?.name || '',
        image: product?.images[0] || '',
        price: product?.price || 0,
        size: selectedVariant.size,
        quantity: count,
      });
    }
  };

  const openSheet = useGlobalStore((state) => state.openSheet);

  //const isOutOfStock = selectedVariant?.stock === 0;

  if (isLoading)
    return (
      <div className='col-span-2 flex items-center justify-center h-125'>
        <p className='text-2xl'>Cargando...</p>
      </div>
    );

  if (!product || isError)
    return (
      <div className='flex justify-center items-center h-[80vh]'>
        <p>Producto no encontrado</p>
      </div>
    );

  return (
    <>
      <div className='h-fit flex flex-col md:flex-row gap-16 mt-8'>
        <GridImages images={product.images} />
        <div className='flex-1 space-y-5'>
          <h1 className='text-3xl font-bold tracking-tight'>{product.name}</h1>

          <div className='flex gap-5 items-center'>
            <span className='tracking-wide text-lg font-semibold'>
              {formatPrice(product.price)}
            </span>
          </div>

          <Separator />

          <div className='space-y-3'>
            <label htmlFor='size-select' className='text-sm font-medium block'>
              Talle:
            </label>

            <select
              id='size-select'
              value={selectedSize || ''}
              onChange={(e) => {
                const size = e.target.value;

                setSelectedSize(size);

                const variant = product.variants.find(
                  (variant) => variant.size === size,
                );

                setSelectedVariant(variant || null);
              }}
              className='px-5 py-3 border border-slate-200 rounded-full text-sm outline-none cursor-pointer hover:border-slate-400 w-fit'
            >
              <option value='' disabled>
                Seleccionar talle
              </option>

              {product.variants.map((variant) => (
                <option
                  key={variant.id}
                  value={variant.size}
                  disabled={variant.stock === 0}
                >
                  {variant.size}
                  {variant.stock === 0 ? ' - Agotado' : ''}
                </option>
              ))}
            </select>
          </div>

          <div className='space-y-3'>
            <p className='text-sm font-medium'>Cantidad:</p>

            <div className='flex gap-8 px-5 py-3 border border-slate-200 w-fit rounded-full'>
              <button
                onClick={decrement}
                disabled={count === 1}
                className='cursor-pointer disabled:cursor-not-allowed'
              >
                <Minus size={15} />
              </button>
              <span className='text-slate-500 text-sm'>{count}</span>
              <button onClick={increment} className='cursor-pointer'>
                <Plus size={15} />
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-3'>
            <button
              disabled={!selectedVariant || selectedVariant.stock === 0}
              className='bg-[#f3f3f3] uppercase font-semibold tracking-widest text-xs py-4 rounded-full transition-all duration-300 hover:bg-[#e2e2e2] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer'
              onClick={() => {
                addToCart();
                openSheet('cart');
              }}
            >
              Agregar al carrito
            </button>
          </div>

          <div className='flex pt-2'>
            <div className='flex flex-col gap-1 flex-1 items-center'>
              <Truck size={35} />
              <p className='text-xs font-semibold'>Envío gratis</p>
            </div>
          </div>
        </div>
      </div>

      <ProductDescription content={product.description} />
    </>
  );
};
