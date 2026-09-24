import { createBrowserRouter } from 'react-router';
import { RootLayout } from '../layouts/RootLayout';
import { Home } from '../pages/Home';
import { Shirts } from '../pages/Shirts';
import { About } from '../pages/About';
import { Shirt } from '../pages/Shirt';
import { Login } from '../pages/Login';

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
        path: 'shirts/:slug',
        element: <Shirt />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
