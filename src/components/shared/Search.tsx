import { X, Search as SearchIcon } from 'lucide-react';
import { useState } from 'react';
import { useGlobalStore } from '../../store/global';
import { formatPrice } from '../../utils';
import { searchProducts } from '../../actions/product';
import { useNavigate } from 'react-router';
import type { Product } from '../../types/product';

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const closeSheet = useGlobalStore((state) => state.closeSheet);
  const navigate = useNavigate();

  const handleSearch = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (searchTerm.trim()) {
      const products = await searchProducts(searchTerm);
      setSearchResults(products);
    }
  };

  return (
    <>
      <div className='py-5 px-7 flex gap-10 items-center border-b border-slate-200'>
        <form
          className='flex gap-3 items-center flex-1'
          onSubmit={handleSearch}
        >
          <SearchIcon size={22} />
          <input
            type='text'
            placeholder='Buscar'
            className='outline-none w-full text-sm '
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </form>
        <button onClick={closeSheet}>
          <X size={25} className='text-black cursor-pointer' />
        </button>
      </div>

      <div className='p-5'>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((product) => (
              <li className='py-2 group' key={product.id}>
                <button
                  className='flex items-center gap-3 cursor-pointer'
                  onClick={() => {
                    navigate(`/shirts/${product.slug}`);
                    closeSheet();
                  }}
                >
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className='h-20 w-20 object-contain p-3'
                  />

                  <div className='flex flex-col gap-1'>
                    <p className='text-sm font-semibold group-hover:underline'>
                      {product.name}
                    </p>

                    <p className='text-sm font-medium text-gray-600'>
                      {formatPrice(product.price)}
                    </p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p className='text-sm text-gray-600'>No se encontraron resultados</p>
        )}
      </div>
    </>
  );
};
