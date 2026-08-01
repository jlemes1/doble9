import { Separator } from '../ui/Separator';

const brands = ['Nike', 'Adidas', 'Puma', 'Kappa'];
const teams = [
  'Independiente',
  'Racing Club',
  'Atlético Madrid',
  'Valencia',
  'Roma',
  'Milan',
  'Juventus',
  'Francia',
  'Túnez',
  'Japón',
];
const leagues = ['Selecciones', 'La Liga', 'Liga Argentina', 'Serie A'];

type Props = {
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
  selectedTeams: string[];
  setSelectedTeams: (teams: string[]) => void;
  selectedLeagues: string[];
  setSelectedLeagues: (leagues: string[]) => void;
};

export const FilterContainer = ({
  selectedBrands,
  setSelectedBrands,
  selectedTeams,
  setSelectedTeams,
  selectedLeagues,
  setSelectedLeagues,
}: Props) => {
  // Agrega o remueve los filtros del estado según si ya estaba seleccionado
  const handleBrand = (brand: string) => {
    if (selectedBrands.includes(brand)) {
      setSelectedBrands(selectedBrands.filter((b) => b !== brand)); // Lo remueve
    } else {
      setSelectedBrands([...selectedBrands, brand]); // Lo agrega
    }
  };

  const handleTeam = (team: string) => {
    if (selectedTeams.includes(team)) {
      setSelectedTeams(selectedTeams.filter((t) => t !== team));
    } else {
      setSelectedTeams([...selectedTeams, team]);
    }
  };

  const handleLeague = (league: string) => {
    if (selectedLeagues.includes(league)) {
      setSelectedLeagues(selectedLeagues.filter((l) => l !== league));
    } else {
      setSelectedLeagues([...selectedLeagues, league]);
    }
  };
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
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrand(brand)}
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
                checked={selectedTeams.includes(team)}
                onChange={() => handleTeam(team)}
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
                checked={selectedLeagues.includes(league)}
                onChange={() => handleLeague(league)}
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
