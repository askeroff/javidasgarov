import * as React from 'react';

import Header from '../header/Header';

import './layout.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
