import React from 'react';
import '../../pages/App/style.css';
import Logo from '../../assets/logo.png';

export default function LogoNav() {
      return(
            <div>
                  <nav className="main-nav">
                        <div className="container">
                              <img src={Logo} alt="Logo" />
                              
                        </div>
                  </nav>
            </div>
      );
}