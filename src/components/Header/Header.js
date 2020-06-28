import React from "react";
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
      <img
        src="https://cdn.pixabay.com/photo/2020/03/19/14/03/youtube-4947565__340.jpg"
        alt="YuoTube"
      />
    </header>
  );
};

export default Header;
