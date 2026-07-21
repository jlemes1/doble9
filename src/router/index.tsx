import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../layouts/RootLayout';
import { Home } from '../pages/Home';
import { Shirts } from '../pages/Shirts';
import { About } from '../pages/About';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'shirts',
        element: <Shirts />,
      },
      {
        path: 'about',
        element: <About />,
      },
    ],
  },
]);
