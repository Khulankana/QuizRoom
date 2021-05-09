import React from 'react';
import '../../pages/App/style.css';
import {Link} from 'react-router-dom'
import Logo from '../../assets/logo.png';

export default function LogoNav() {
      return(
            <div>
                  <nav className="main-nav">
                        <div className="container">
                              <img src={Logo} alt="Logo" />
                              <ul>
                                    <li><Link className="login" to="/"> Гарах</Link></li>
                              </ul>
                        </div>
                  </nav>
            </div>
      );
}