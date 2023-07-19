import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Header from 'components/Header/Header';

const Layout = () => {
  return (
    <Wrapper>
      <Header />

      <Suspense fallback="Loading...">
        <Outlet />
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
