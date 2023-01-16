import logo from "../../../images/logo.png";
import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { HeaderContainer } from "./Header.element";
import { useState } from "react";
import CottageIcon from '@mui/icons-material/Cottage';
import { Login, Menu, Search } from "@mui/icons-material";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const actions = [
    { icon: <CottageIcon />, name: "Home", func: homeFunc },
    {
      icon: <ProductionQuantityLimitsIcon />,
      name: "Products",
      func: productFunc,
    },
    { icon: <Search />, name: "Search", func: searchFunc },
    { icon: <Login />, name: "Login", func: loginFunc },
  ];

  function loginFunc() {
    navigate("/login");
  }

  function homeFunc() {
    navigate("/");
  }

  function productFunc() {
    navigate("/products");
  }

  function searchFunc() {
    navigate("/search");
  }
  return (
    <HeaderContainer>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        direction="right"
        open={open}
        className="navMenu"
        icon={
          <span className="navbtnicon">
            <Menu/>
          </span>
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            icon={action.icon}
            key={action.name}
            onClick={action.func}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </HeaderContainer>
  );
};

export default Header;
