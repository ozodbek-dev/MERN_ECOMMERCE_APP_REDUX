import React from "react";
import { ReactNavbar } from "overlay-navbar";
import { navOptions } from "./navbarOptions";
import logo from '../../../images/logo.png';

const Header = () => {

  return (
    <>  
      <ReactNavbar  
       {...navOptions}
      />
    </>
  );
}

export default Header;