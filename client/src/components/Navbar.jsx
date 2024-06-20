import React, { useState } from "react";

import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

const Navbar = () => {
  const { isRegister, LogoutUser } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav">
      <div className="nav__container">
        <h2 className="nav__h2">
          <Link to="/">
            <img
              src="./images/b-house.png"
              alt="logo"
              className="h-[150px] w-[150px]"
            />
          </Link>
        </h2>
        <div
          className="nav__icon nav__icon--menu"
          id="menu-btn"
          onClick={handleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav__ul nav__ul--desktop`}>
          <li className="nav__li" onClick={handleMenu}>
            <a href="#promotions">Promotions</a>
          </li>
          <li className="nav__li" onClick={handleMenu}>
            <a href="#menu">Menu</a>
          </li>
          <li className="nav__li" onClick={handleMenu}>
            <a href="#about">About</a>
          </li>
          <li className="nav__li" onClick={handleMenu}>
            <a href="#book">Book Table</a>
          </li>
        </ul>
        {isRegister ? (
          <div
            className="nav__icon nav__icon--user"
            onClick={() => {
              LogoutUser();
              handleMenu();
            }}
          >
            <FaUser />
          </div>
        ) : (
          <div className="nav__icon nav__icon--user" onClick={handleMenu}>
            <Link to="/login">
              <FaUser />
            </Link>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <ul className="nav__ul nav__ul--open" id="nav-ul">
          {isRegister ? (
            <li
              className="nav__li "
              onClick={() => {
                LogoutUser();
                handleMenu();
              }}
            >
              <FaUser size={27} color="white" />
            </li>
          ) : (
            <li className="nav__li" onClick={handleMenu}>
              <Link to="/login">
                <FaUser size={27} />
              </Link>
            </li>
          )}
          <li className="nav__li" onClick={handleMenu}>
            <a href="#promotions">Promotions</a>
          </li>
          <li className="nav__li" onClick={handleMenu}>
            <a href="#menu">Menu</a>
          </li>
          <li className="nav__li" onClick={handleMenu}>
            <a href="#about">About</a>
          </li>
          <li className="nav__li" onClick={handleMenu}>
            <a href="#book">Book Table</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
