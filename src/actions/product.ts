import { supabase } from '../supabase/client';

export const getProducts = async () => {
  const { data: products, error } = await supabase
    .from('products')
    .select('*, variants (*)')
    .order('created_at', { ascending: false });

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return products;
};

export const getFilteredProducts = async ({
  page = 1,
  brands = [],
  teams = [],
  leagues = [],
}) => {
  const itemsPerPage = 10;
  // Calcula el rango de filas para la paginación (ej: página 1 trae de 0 a 9)
  const from = (page - 1) * itemsPerPage;
  const to = from + itemsPerPage - 1;

  let query = supabase
    .from('products')
    .select('*, variants (*)', { count: 'exact' })
    .order('created_at', { ascending: false })
    .range(from, to);

  // Filtra por marcas si se seleccionó al menos una
  if (brands.length > 0) {
    query = query.in('brand', brands);
  }

  // Filtra por equipos si se seleccionó al menos uno
  if (teams.length > 0) {
    query = query.in('team', teams);
  }

  // Filtra por ligas si se seleccionó al menos una
  if (leagues.length > 0) {
    query = query.in('league', leagues);
  }

  const { data, error, count } = await query;

  if (error) {
    console.log(error.message);
    throw new Error(error.message);
  }

  return { data, count };
};
