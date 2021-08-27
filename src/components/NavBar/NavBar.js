import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../img/iconNavBar.png';

//import './Navbar.css';
import style from './NavBar.module.css';

export default function NavBar() {
    return (
        <div className={style.navContainer}>
        {/* <header className={style.navbar}> */}
            <div>
                <img className={style.logo} src={Logo} alt="" />
            </div>
            <nav>
                <ul className="list">
                    <h3 className="list-item">
                        <NavLink exact to="/" >Home</NavLink>
                        <NavLink to="/favs" >Favoritas</NavLink>
                    </h3>
                </ul>
            </nav>
        {/* </header> */}
       </div>
    )
}
