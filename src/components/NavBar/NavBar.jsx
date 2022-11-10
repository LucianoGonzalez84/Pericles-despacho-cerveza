import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';

// Estilos
import "./navbar.css";

function NavBar() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav__enlaces">
          <ul>
            <Link to='/'>Home</Link>
            <a href="#">Cervezas</a>
          </ul>
        </div>
        <Link to='/'>
          <img className="nav__logo" src="./img/logo.png" alt="logo" />
        </Link>
        <div className="nav__enlaces">
          <ul>
            <a href="#">Nosotros</a>
            <a href="#">Contacto</a>
          </ul>
        </div>
        <div className="nav__estilos">
          <Link to='/category/Ipa'>Ipa</Link>
          <Link to='/category/Negra'>Negra</Link>
          <Link to='/category/Roja'>Roja</Link>
          <Link to='/category/Rubia'>Rubia</Link>
          <Link to='/category/Sin Alcohol'>Sin Alcohol</Link>
          <Link to='/category/Trigo'>Trigo</Link>
        </div>
      </div>
      <CartWidget className='cartwidget' />
    </nav>
  );
}

export default NavBar;
