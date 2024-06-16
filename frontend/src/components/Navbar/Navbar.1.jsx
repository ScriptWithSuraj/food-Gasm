import React from "react";
import { assets } from "../../assets/assets";

export const Navbar = () => {
  const navBarItems = ["home", "menu", "mobile-apss", "help"];
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar-menu">
        {navBarItems.map((item) => (
          <li className={menu === item ? "active" : ""}>{item}</li>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.selector_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};
