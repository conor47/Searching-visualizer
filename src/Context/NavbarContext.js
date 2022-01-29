import React, { useState, useContext } from 'react';
import sublinks from '../Data/sublinks';

const NavbarContext = React.createContext();

const NavbarProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [page, setPage] = useState({ page: '', links: [] });
  const [location, setLocation] = useState({});

  const openSubmenu = (text, coordinates) => {
    const page = sublinks.find((link) => link.page === text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  };
  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
  };

  return (
    <NavbarContext.Provider
      value={{
        isSubmenuOpen,
        openSubmenu,
        closeSubmenu,
        page,
        location,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
// make sure use
export const useNavbarContext = () => {
  return useContext(NavbarContext);
};

export { NavbarContext, NavbarProvider };
