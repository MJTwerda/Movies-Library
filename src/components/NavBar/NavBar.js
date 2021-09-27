import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../img/iconNavBar.png';
import style from './NavBar.module.css';

export default function NavBar() {
  return (
    <div className={style.navContainer}>
      <div >
        <img className={style.logo} src={Logo} alt="" />
      </div>
      <ul className={style.listNav}>
        <Link exact to="/" className={style.linkItem} >
          <li>Menú</li>
        </Link>
        <Link to="/favs" className={style.linkItem} >
          <li>Favoritas</li>
        </Link>
      </ul>
    </div>
  )
}
