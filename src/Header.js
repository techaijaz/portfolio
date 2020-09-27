import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [scrolled, setScrolled] = useState();
  const [menuClass, setMenuClass] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handelOpenMenu = () => {
    setMenuClass(!menuClass);
  };

  return (
    <div className={`header ${scrolled ? "sticky" : ""}`}>
      <div className="header__maxWidth">
        <div className="header__logo">
          <Link to="/">portfolio.</Link>
        </div>
        <ul
          className={`header__menu ${
            menuClass ? "header__menu--openClose" : ""
          }`}
        >
          <li>
            <a onClick={handelOpenMenu} href="#home">
              Home
            </a>
          </li>
          <li>
            <a onClick={handelOpenMenu} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={handelOpenMenu} href="#works">
              Works
            </a>
          </li>
          <li>
            <a onClick={handelOpenMenu} href="#skills">
              Skills
            </a>
          </li>
          <li>
            <a onClick={handelOpenMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
        <div className="header__btnContainer">
          <IconButton onClick={handelOpenMenu}>
            {menuClass ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
