import Style from './style.module.css';
import { Link } from "react-router-dom";
import React from 'react';
import { propsHeader } from './props.interface';

function Header({
    logoPath, logoText
}:propsHeader){
    return(
      <header className={Style.header}>
      {logoPath && 
          <div className={Style.logo} style={{ backgroundImage: `url(${logoPath})` }}></div>
      }
      {logoText && <div className={Style.logo}>{logoText}</div>}
      <div className={Style.nav}>
          <div className={Style.navigator}>1</div>
          <div className={Style.user}>2</div>
      </div>
  </header>
);
}
export default Header;