import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

const navLink = [
  { label: "Explore", href: "/product-listing" },
  { label: "Login", href: "/login" },
  { label: "Cart", href: "/cart" },
];

const NavLinks = () => {
  return (
    <div className="navLink-container">
      {navLink.map((item, index) => {
        return (
          <NavLink className="drawer-nav" key={index} to={item.href}>
            {item.label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
