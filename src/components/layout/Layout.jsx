import React from 'react';
import { Outlet } from 'react-router-dom';

import NavLayout from './NavLayout';
import Footer from './Footer';

const Layout = () => {
  return (
    <div>
      <header>
        <NavLayout />
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
