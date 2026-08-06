import { useQuery } from '@tanstack/react-query';
import { getRecentProducts } from '../../actions/product';

export const useHomeProducts = () => {
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['recentProducts'],
    queryFn: getRecentProducts,
  });

  return {
    products,
    isLoading,
  };
};
