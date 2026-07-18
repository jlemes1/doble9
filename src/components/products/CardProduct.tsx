import { Plus } from 'lucide-react';
import { Link } from 'react-router';
import type { Variant } from '../../types/product';
import { formatPrice } from '../../utils';

type Props = {
  img: string;
  name: string;
  price: number;
  slug: string;
  variants?: Variant[];
};

export const CardProduct = ({ img, name, price, slug }: Props) => {
  return (
    <div className='flex flex-col gap-6 relative'>
      <Link
        to={`shirts/${slug}`}
        className='flex relative group overflow-hidden'
      >
        <div className='flex h-87.5 w-full items-center justify-center py-2 lg:h-62.5'>
          <img src={img} alt={name} className='object-contain h-full w-full' />
        </div>

        <button className='bg-white border border-slate-200 absolute w-full bottom-0 py-3 rounded-3xl flex items-center justify-center gap-1 text-sm font-medium hover:bg-stone-100 translate-y-full transition-all duration-300 group-hover:translate-y-0'>
          <Plus />
          Añadir
        </button>
      </Link>

      <div className='flex flex-col gap-1 items-center'>
        <p className='text-[15px] font-medium'>{name}</p>
        <p className='text-[15px] font-medium'>{formatPrice(price)}</p>
      </div>
    </div>
  );
};
