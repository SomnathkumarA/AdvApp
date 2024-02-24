import React from 'react';
import NavbarPage from './NavbarPage';


const Layout = ({ children }) => {
  return (
    <div>
      <NavbarPage />
      {children}
    </div>
  );
};

export default Layout;
