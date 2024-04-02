import React, { useState } from "react";
import css from "./navbar.module.css";
import {  NavLink } from "react-router-dom";

const NavBar = () => {
  const [isMenuOpen, setMenuOPen] = useState(false);

  const handleMenuClose = () => {
    setMenuOPen(!isMenuOpen);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.nav}>
          <div className={css.menu_icon_box}>
            <span
              onClick={handleMenuClose}
              className={`material-symbols-outlined ${css.nav_menu_icon}`}
            >
              menu
            </span>
          </div>
          {/* <NavLink to="/mentor">Hello</NavLink> */}

          <div className={css.mainNav}>
            <div>
              <img src="logo.jpg" alt="" />
            </div>
            <div className={css.center_box}>
              <div className={css.nav_item_box}>
                <NavLink div className={css.nav_item} to="/">
                  <span>Home</span>
                </NavLink>
                <NavLink className={css.nav_item} to="mentor">
                  <span>Mentor</span>
                </NavLink>
                <NavLink className={css.nav_item} to="about">
                  <sp>About</sp>
                </NavLink>
                <NavLink className={css.nav_item} to="contact-us">
                  <span>Contact Us</span>
                </NavLink>
                <NavLink className={css.nav_item} to="talk">
                  <span>Talk</span>
                </NavLink>
              </div>
            </div>

            <div>
              <button className={css.login_button}>Login</button>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={handleMenuClose}
        style={{ display: isMenuOpen === true ? "block" : "none" }}
        className={`${css.sidebar}`}
      >
        <div className={css.sidebar_logo_box}>
          <div className={css.siderbar_logo}>LOGO</div>
          <div className={css.menu_close_icon}>
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
        <div className={css.sidebar_item}>Home</div>
        <div className={css.sidebar_item}>Mentors</div>
        <div className={css.sidebar_item}>About</div>
        <div className={css.sidebar_item}>Contact Us</div>
        <div className={css.sidebar_item}>Talk to Us</div>
        <div className={css.sidebar_btn_box}>
          <button className={css.login_button}>Login</button>
        </div>
      </div>

      <div
        className="overlay"
        onClick={handleMenuClose}
        style={{
          display: isMenuOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 500, // Ensure it's above other content but below sidebar
        }}
      />
    </>
  );
};

export default NavBar;
