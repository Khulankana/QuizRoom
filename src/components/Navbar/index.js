import React from "react";
import { Link } from "react-router-dom";
import "../../pages/App/style.css";
import Logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <div className="container">
        <img src={Logo} alt="Logo" />
        <ul>
          <li>
            <Link className="register" to="/register">
              Бүртгүүлэх
            </Link>
          </li>
          <li>
            <Link className="login" to="/userLogin">
              Нэвтрэх
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
