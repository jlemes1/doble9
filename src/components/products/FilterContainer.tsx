import { Separator } from '../ui/Separator';

const brands = ['Nike', 'Adidas', 'Puma', 'Kappa'];
const teams = [
  'River Plate',
  'Boca Juniors',
  'Real Madrid',
  'Barcelona',
  'Fiorentina',
  'Argentina',
  'Portugal',
  'Alemania',
];
const leagues = ['Selecciones', 'La Liga', 'Liga Argentina', 'Serie A'];

export const FilterContainer = () => {
  return (
    <div className='p-5 border border-slate-200 rounded-lg h-fit'>
      <h3 className='font-semibold text-xl mb-4'>Filtros</h3>

      <Separator />

      <div className='flex flex-col gap-3'>
        <h3 className='text-lg font-medium text-black'>Marca</h3>

        <div className='flex flex-col gap-2'>
          {brands.map((brand) => (
            <label key={brand} className='inline-flex items-center'>
              <input
                type='checkbox'
                className='text-black border-black focus:ring-black accent-black'
              />
              <span className='ml-2 text-black text-sm cursor-pointer'>
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div className='flex flex-col gap-3'>
        <h3 className='text-lg font-medium text-black'>Equipo</h3>

        <div className='flex flex-col gap-2'>
          {teams.map((team) => (
            <label key={team} className='inline-flex items-center'>
              <input
                type='checkbox'
                className='text-black border-black focus:ring-black accent-black'
              />
              <span className='ml-2 text-black text-sm cursor-pointer'>
                {team}
              </span>
            </label>
          ))}
        </div>
      </div>

      <Separator />

      <div className='flex flex-col gap-3'>
        <h3 className='text-lg font-medium text-black'>Liga</h3>

        <div className='flex flex-col gap-2'>
          {leagues.map((league) => (
            <label key={league} className='inline-flex items-center'>
              <input
                type='checkbox'
                className='text-black border-black focus:ring-black accent-black'
              />
              <span className='ml-2 text-black text-sm cursor-pointer'>
                {league}
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
