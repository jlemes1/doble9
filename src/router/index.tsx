import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../layouts/RootLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <div>Inicio</div>,
      },
      {
        path: 'shirts',
        element: <div>Camisetas</div>,
      },
      {
        path: 'about',
        element: <div>Nosotros</div>,
      },
    ],
  },
]);
