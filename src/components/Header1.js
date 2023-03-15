import React from "react";
import logoLogin from "../logoLogin.png";
import "../App.css";
import {
  Link,
} from "react-router-dom";

export default function header1() {
  return (
    <>
      <div className="logo-container">
        <div className="logo">
          <img className="logo-img" src={logoLogin} />
        </div>
        <div>
          <h2 className="logo-title">Entrar na sua conta</h2>
        </div>
        <div>
            <p className="logoContent">
                Ou 
                <Link to="/" className="logo-Content-Link"> fazer cadastro</Link>
            </p>
        </div>
      </div>
    </>
  );
}
