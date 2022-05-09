import { useState } from "react";
import { FiMenu, FiChevronLeft } from 'react-icons/fi';

import { Link } from "react-router-dom";

// import "./styles.css";
import logo from "../../assets/logo.png";

function Pagina5() {

  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">  
          <div className="topo">
            <button type="button">
              <FiMenu className="icon"/>
            </button>
          </div>
          <form className="login-form">
            <div className="msg-menu">
              <span className="login-form-title">
                <img src={logo} alt="logo" />
              </span>
              <span className="login-form-title"> Selecione a marca </span>
              </div>
            <div className="container-tela-btn">
              <Link to="/pagina7" className="tela1-btn1">Brastemp</Link>
              <Link to="/pagina7" className="tela1-btn2">Consul</Link>
              <Link to="/pagina7" className="tela1-btn3">LG</Link>
              <Link to="/pagina7" className="tela1-btn4">Electrolux</Link>
              <Link to="/pagina6" className="tela1-btn5">Outra</Link>
              
            </div>
          </form>
          <div className="bottom">
            <button type="button">
            <FiChevronLeft className="icon"/>
            <h1>Voltar</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagina5;
