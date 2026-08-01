import { useQuery } from '@tanstack/react-query';
import { getFilteredProducts } from '../../actions/product';

export const useFilteredProducts = ({
  page,
  brands,
  teams,
  leagues,
}: {
  page: number;
  brands: string[];
  teams: string[];
  leagues: string[];
}) => {
  // Re-ejecuta la query cada vez que cambia el queryKey (ej. al cambiar filtros o página)
  const { data, isLoading } = useQuery({
    queryKey: ['filteredProducts', page, brands, teams, leagues],
    queryFn: () => getFilteredProducts({ page, brands, teams, leagues }),
    retry: false,
  });

  return {
    data: data?.data,
    isLoading,
    totalProducts: data?.count,
  };
};
