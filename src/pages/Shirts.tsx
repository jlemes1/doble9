import { ProductGrid } from '../components/home/ProductGrid';
import { FilterContainer } from '../components/products/FilterContainer';
import { Pagination } from '../components/shared/Pagination';
import { useFilteredProducts } from '../hooks/products/useFilteredProducts';
import { useState } from 'react';

export const Shirts = () => {
  // Estados para controlar la paginación y los filtros seleccionados
  const [page, setPage] = useState(1);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [selectedLeagues, setSelectedLeagues] = useState<string[]>([]);

  // Consulta los productos filtrados y paginados usando el hook personalizado
  const {
    data: products = [],
    isLoading,
    totalProducts,
  } = useFilteredProducts({
    page,
    brands: selectedBrands,
    teams: selectedTeams,
    leagues: selectedLeagues,
  });

  return (
    <>
      <h1 className='text-5xl font-semibold text-center mb-12'>Camisetas</h1>

      <div className='grid grid-cols-1 lg:grid-cols-4 gap-8 items-start'>
        <div className='lg:col-span-1'>
          <FilterContainer
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            selectedTeams={selectedTeams}
            setSelectedTeams={setSelectedTeams}
            selectedLeagues={selectedLeagues}
            setSelectedLeagues={setSelectedLeagues}
          />
        </div>

        {isLoading ? (
          <div className='col-span-2 flex items-center justify-center h-125'>
            <p className='text-2xl'>Cargando...</p>
          </div>
        ) : (
          <div className='lg:col-span-3'>
            <ProductGrid products={products} className='mb-32' />
            <Pagination
              page={page}
              setPage={setPage}
              totalItems={totalProducts}
            />
          </div>
        )}
      </div>
    </>
  );
};
