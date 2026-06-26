import { Outlet } from 'react-router';

export const RootLayout = () => {
  return (
    <>
      <div>Navbar</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};
