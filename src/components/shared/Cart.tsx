import { useGlobalStore } from '../../store/global';
import { CartItem } from './CartItem';
import { useCartStore } from '../../store/cart';
import { Link } from 'react-router';
import { X } from 'lucide-react';

export const Cart = () => {
  const closeSheet = useGlobalStore((state) => state.closeSheet);

  const cartItems = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clearCart);
  const totalItemsInCart = useCartStore((state) => state.totalItemsInCart);

  return (
    <div className='flex flex-col h-full'>
      <div className='px-5 py-7 flex justify-between items-center border-b border-slate-200'>
        <span className='font-semibold text-2xl'>Carrito</span>
        <button onClick={closeSheet} className='cursor-pointer'>
          <X size={25} />
        </button>
      </div>

      {totalItemsInCart > 0 ? (
        <>
          <div className='p-7 overflow-auto flex-1'>
            <ul className='space-y-9'>
              {cartItems.map((item) => (
                <CartItem item={item} key={item.variantId} />
              ))}
            </ul>
          </div>

          <div className='mt-4 p-7'>
            <Link
              to='/checkout'
              className='w-full bg-black text-white py-3.5 rounded-full flex items-center justify-center gap-3'
            >
              Continuar con la compra
            </Link>

            <button
              className='mt-3 w-full text-black border border-black rounded-full py-3 cursor-pointer'
              onClick={clearCart}
            >
              Vaciar Carrito
            </button>
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center justify-center h-full gap-7'>
          <p className='text-sm font-medium tracking-tight'>
            Tu carrito esta vacío
          </p>
          <Link
            to='/shirts'
            className='py-4 bg-black rounded-full text-white px-7 text-xs uppercase tracking-widest font-semibold'
            onClick={closeSheet}
          >
            Empezar a comprar
          </Link>
        </div>
      )}
    </div>
  );
};
