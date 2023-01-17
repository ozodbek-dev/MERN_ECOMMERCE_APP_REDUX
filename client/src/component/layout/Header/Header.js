import logo from "../../../images/logo.png";
import { Backdrop, SpeedDial, SpeedDialAction } from "@mui/material";
import { CartBtn, HeaderContainer } from "./Header.element";
import { useState } from "react";
import CottageIcon from "@mui/icons-material/Cottage";
import { Login, Menu, Search } from "@mui/icons-material";

import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import { useNavigate } from "react-router-dom";
import Cart from "../../Cart/Cart";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const {cartItems} = useSelector(state=>state.cart)
  const actions = [
    { icon: <CottageIcon />, name: "Home", func: homeFunc },
    {
      icon: <FormatListNumberedIcon />,
      name: "Products",
      func: productFunc,
    },
    { icon: <Search />, name: "Search", func: searchFunc },
    { icon: <Login />, name: "Login", func: loginFunc },
    { icon: <ShoppingCartIcon />, name: "Cart", func: cartFunc },
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
  function cartFunc() {
    navigate("/cart");
  }
  return (
    <HeaderContainer>
      {cartItems.length ? (
        <CartBtn to="/cart">
          <ShoppingCartIcon />
          <span>{cartItems.length}</span>
        </CartBtn>
      ):null}

      <Backdrop open={open} />

      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        direction="down"
        open={open}
        className="navMenu"
        icon={
          <span className="navbtnicon">
            <Menu />
          </span>
        }
      >
        {actions.map((action) => (
          <SpeedDialAction
            icon={action.icon}
            key={action.name}
            onClick={action.func}
            tooltipTitle={action.name}
            tooltipOpen={true}
            tooltipPlacement="right"
          />
        ))}
      </SpeedDial>
    </HeaderContainer>
  );
};

export default Header;
