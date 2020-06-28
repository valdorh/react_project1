/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import './LeftSideNav.css'
import style from "./LeftSideNav.module.css"

const LeftSideNav = () => {
  return (
    <nav className={style.nav}>
      <div className={style.menuItem}>
        <a href="/profile">Profile</a>
      </div>
      <div className={style.menuItem}>
        <a href="/dialogs">Message</a>
      </div>
      <div className={style.menuItem}>
        <a >News</a>
      </div>
      <div className={style.menuItem}>
        <a >Music</a>
      </div>
      <div className={style.menuItem}>
        <a >Setting</a>
      </div>
    </nav>
  );
};
export default LeftSideNav;
