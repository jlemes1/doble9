import { Minus, Plus, Trash2 } from 'lucide-react';
import { formatPrice } from '../../utils';
import { useCartStore } from '../../store/cart';

export type TCartItem = {
  variantId: string;
  productId: string;
  name: string;
  size: string;
  price: number;
  quantity: number;
  image: string;
};

type Props = {
  item: TCartItem;
};

export const CartItem = ({ item }: Props) => {
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const increment = () => {
    updateQuantity(item.variantId, item.quantity + 1);
  };

  const decrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.variantId, item.quantity - 1);
    }
  };

  return (
    <li className='flex justify-between items-center gap-5'>
      <div className='flex'>
        <img
          src={item.image}
          alt={item.name}
          className='w-20 h-20 object-contain'
        />
      </div>

      <div className='flex-1 space-y-3'>
        <div className='flex justify-between'>
          <p className='font-semibold'>{item.name}</p>
          <p className='text-sm font-medium text-gray-600 mt-1'>
            {formatPrice(item.price)}
          </p>
        </div>

        <div className='flex gap-3'>
          <span className='font-semibold text-sm text-gray-600'>
            Talle: {item.size}
          </span>
        </div>

        <div className='flex gap-4'>
          <div className='flex items-center gap-5 px-2 py-1 border border-slate-200 w-fit rounded-full'>
            <button
              className='cursor-pointer'
              onClick={decrement}
              disabled={item.quantity === 1}
            >
              <Minus size={15} />
            </button>
            <span className='text-slate-500 text-sm'>{item.quantity}</span>
            <button className='cursor-pointer' onClick={increment}>
              <Plus size={15} />
            </button>
          </div>

          <button
            className='underline font-medium text-[10px] cursor-pointer'
            onClick={() => removeItem(item.variantId)}
          >
            <Trash2 size={17} />
          </button>
        </div>
      </div>
    </li>
  );
};
