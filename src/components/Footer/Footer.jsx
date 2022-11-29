import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBeer } from '@fortawesome/free-solid-svg-icons';

// Estilos
import "./footer.css";

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__copyright'>
                <p>©<span>2022</span>Pericles</p>
            </div>
            <div className='footer__logo'>
                <Link to='/'>
                    <img className="nav__logo" src="./img/logo.png" alt="logo" />
                </Link>
            </div>
            <div className="footer__redes">
                <div>
                    <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faBeer} /></a>
                    <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faBeer} /></a>
                    <a href="https://web.whatsapp.com/"><FontAwesomeIcon icon={faBeer} /></a>
                </div>                
            </div> 
        </div>
    )
}

export default Footer

    