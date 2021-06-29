import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { AlignRightOutlined } from "@ant-design/icons";

import "./navbar.component.scss";
import ViuLogo from "@/app/assets/images/viu-logo.png";

import { loadMenu } from "./mock/mock_nav";

const buildMenu = function buildMenu(items) {
  return (
    <ul className="menu">
      {items.map(item => (
        <li key={item.id} className="menu__item">
          <Link to={"/"} className="menu__link">
            {item.name}
          </Link>
          {item.children && item.children.length > 0
            ? buildMenu(item.children)
            : null}
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    loadMenu().then(items => setMenuItems(items));
  }, []);

  return (
    <nav className="navbar">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="navbar-brand">
          <Link to={"/"}>
            <img src={ViuLogo} alt={"VIU Alumni"} />{" "}
            <span>VIET HUNG ALUMNI</span>
          </Link>
        </div>
        <div className="menu-mobile d-md-none">
          <AlignRightOutlined />
        </div>
        <div className="menu-wrap d-none d-md-block">
          {buildMenu(menuItems)}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
