export const allShirts = [
  {
    id: '1a2b3c4d-0001',
    name: 'Argentina Home 2026',
    slug: 'argentina-home-2026',
    team: 'Argentina',
    brand: 'Adidas',
    league: 'Selección Nacional',
    season: '2026',
    type: 'Home',
    version: 'Player',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 149.99,
    stock: 12,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Camiseta oficial de la selección Argentina versión jugador temporada 2024.',
            },
          ],
        },
      ],
    },
    features: ['AEROREADY', 'Edición oficial', 'Material liviano'],
  },
  {
    id: '1a2b3c4d-0002',
    name: 'Real Madrid Home 2026',
    slug: 'real-madrid-home-2026',
    team: 'Real Madrid',
    brand: 'Adidas',
    league: 'La Liga',
    season: '2026',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 119.99,
    stock: 20,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Camiseta oficial del Real Madrid versión hincha temporada 2024.',
            },
          ],
        },
      ],
    },
    features: ['ClimaCool', 'Escudo bordado', 'Edición fan'],
  },
  {
    id: '1a2b3c4d-0003',
    name: 'Barcelona Away 2024',
    slug: 'barcelona-away-2024',
    team: 'FC Barcelona',
    brand: 'Nike',
    league: 'La Liga',
    season: '2024',
    type: 'Away',
    version: 'Fan',
    sizes: ['S', 'M', 'L'],
    price: 119.99,
    stock: 15,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Camiseta alternativa del FC Barcelona temporada 2024.',
            },
          ],
        },
      ],
    },
    features: ['Dri-FIT', 'Ligera', 'Respirable'],
  },
  {
    id: '1a2b3c4d-0004',
    name: 'Boca Juniors Home 2024',
    slug: 'boca-juniors-home-2024',
    team: 'Boca Juniors',
    brand: 'Adidas',
    league: 'Liga Argentina',
    season: '2024',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 109.99,
    stock: 25,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Camiseta titular de Boca Juniors temporada 2024.',
            },
          ],
        },
      ],
    },
    features: ['Escudo tejido', 'Tejido resistente', 'Edición club'],
  },
  {
    id: '1a2b3c4d-0005',
    name: 'Germany Home 2024',
    slug: 'germany-home-2024',
    team: 'Germany',
    brand: 'Adidas',
    league: 'Selección Nacional',
    season: '2024',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 129.99,
    stock: 18,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta titular de Alemania 2024.' },
          ],
        },
      ],
    },
    features: ['ClimaCool', 'Escudo bordado', 'Edición fan'],
  },

  {
    id: '1a2b3c4d-0006',
    name: 'Portugal Home 2026',
    slug: 'portugal-home-2026',
    team: 'Portugal',
    brand: 'Puma',
    league: 'Selección Nacional',
    season: '2026',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 129.99,
    stock: 14,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta oficial de Portugal 2024.' },
          ],
        },
      ],
    },
    features: ['Dri-FIT', 'Ligera', 'Respirable'],
  },

  {
    id: '1a2b3c4d-0007',
    name: 'River Plate Home 2026',
    slug: 'river-plate-home-2026',
    team: 'River Plate',
    brand: 'Adidas',
    league: 'Liga Argentina',
    season: '2026',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 119.99,
    stock: 22,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta titular de River Plate 2024.' },
          ],
        },
      ],
    },
    features: ['Escudo bordado', 'Tela respirable', 'Edición club'],
  },

  {
    id: '1a2b3c4d-0008',
    name: 'Fiorentina Home 2024',
    slug: 'fiorentina-home-2024',
    team: 'Fiorentina',
    brand: 'Kappa',
    league: 'Serie A',
    season: '2024',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 114.99,
    stock: 16,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta oficial de Fiorentina 2024.' },
          ],
        },
      ],
    },
    features: ['Tejido técnico', 'Ligera', 'Edición Serie A'],
  },
];

export const recentShirts = [
  {
    id: '1a2b3c4d-0001',
    name: 'Argentina Home 2026',
    slug: 'argentina-home-2026',
    team: 'Argentina',
    brand: 'Adidas',
    league: 'Selección Nacional',
    season: '2026',
    type: 'Home',
    version: 'Player',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 149.99,
    stock: 12,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Camiseta oficial de la selección Argentina versión jugador temporada 2024.',
            },
          ],
        },
      ],
    },
    features: ['AEROREADY', 'Edición oficial', 'Material liviano'],
  },
  {
    id: '1a2b3c4d-0002',
    name: 'Real Madrid Home 2026',
    slug: 'real-madrid-home-2026',
    team: 'Real Madrid',
    brand: 'Adidas',
    league: 'La Liga',
    season: '2026',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 119.99,
    stock: 20,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Camiseta oficial del Real Madrid versión hincha temporada 2024.',
            },
          ],
        },
      ],
    },
    features: ['ClimaCool', 'Escudo bordado', 'Edición fan'],
  },
  {
    id: '1a2b3c4d-0006',
    name: 'Portugal Home 2026',
    slug: 'portugal-home-2026',
    team: 'Portugal',
    brand: 'Puma',
    league: 'Selección Nacional',
    season: '2026',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 129.99,
    stock: 14,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta oficial de Portugal 2024.' },
          ],
        },
      ],
    },
    features: ['Dri-FIT', 'Ligera', 'Respirable'],
  },

  {
    id: '1a2b3c4d-0007',
    name: 'River Plate Home 2026',
    slug: 'river-plate-home-2026',
    team: 'River Plate',
    brand: 'Adidas',
    league: 'Liga Argentina',
    season: '2026',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 119.99,
    stock: 22,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta titular de River Plate 2024.' },
          ],
        },
      ],
    },
    features: ['Escudo bordado', 'Tela respirable', 'Edición club'],
  },
];

export const popularShirts = [
  {
    id: '1a2b3c4d-0001',
    name: 'Argentina Home 2026',
    slug: 'argentina-home-2026',
    team: 'Argentina',
    brand: 'Adidas',
    league: 'Selección Nacional',
    season: '2026',
    type: 'Home',
    version: 'Player',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 149.99,
    stock: 12,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            {
              type: 'text',
              text: 'Camiseta oficial de la selección Argentina versión jugador temporada 2024.',
            },
          ],
        },
      ],
    },
    features: ['AEROREADY', 'Edición oficial', 'Material liviano'],
  },
  {
    id: '1a2b3c4d-0005',
    name: 'Germany Home 2024',
    slug: 'germany-home-2024',
    team: 'Germany',
    brand: 'Adidas',
    league: 'Selección Nacional',
    season: '2024',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 129.99,
    stock: 18,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta titular de Alemania 2024.' },
          ],
        },
      ],
    },
    features: ['ClimaCool', 'Escudo bordado', 'Edición fan'],
  },
  {
    id: '1a2b3c4d-0006',
    name: 'Portugal Home 2026',
    slug: 'portugal-home-2026',
    team: 'Portugal',
    brand: 'Puma',
    league: 'Selección Nacional',
    season: '2026',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL'],
    price: 129.99,
    stock: 14,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta oficial de Portugal 2024.' },
          ],
        },
      ],
    },
    features: ['Dri-FIT', 'Ligera', 'Respirable'],
  },

  {
    id: '1a2b3c4d-0007',
    name: 'River Plate Home 2026',
    slug: 'river-plate-home-2026',
    team: 'River Plate',
    brand: 'Adidas',
    league: 'Liga Argentina',
    season: '2026',
    type: 'Home',
    version: 'Fan',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    price: 119.99,
    stock: 22,
    created_at: new Date().toISOString(),
    images: ['https://ui.shadcn.com/placeholder.svg'],
    description: {
      type: 'doc',
      content: [
        {
          type: 'paragraph',
          content: [
            { type: 'text', text: 'Camiseta titular de River Plate 2024.' },
          ],
        },
      ],
    },
    features: ['Escudo bordado', 'Tela respirable', 'Edición club'],
  },
];
