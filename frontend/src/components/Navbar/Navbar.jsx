import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
export const Navbar = () => {
  const navBarItems = ["home", "menu", "mobile-apss", "help"];
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="" />
      <ul className="navbar-menu">
        {navBarItems.map((item) => (
          <li
            key={item}
            className={menu === item ? "active" : ""}
            onClick={() => {
              setMenu(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button>sign in</button>
      </div>
    </div>
  );
};
