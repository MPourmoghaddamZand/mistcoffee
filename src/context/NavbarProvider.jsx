import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext();
const NavbarProvider = ({ children }) => {
  const [navActive, setNavActive] = useState(true);

  return (
    <NavbarContext.Provider value={{ navActive, setNavActive }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => useContext(NavbarContext);

export default NavbarProvider;
