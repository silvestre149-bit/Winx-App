import { useState } from "react";
import { FiMenu, FiChevronLeft } from 'react-icons/fi';

import { Link } from "react-router-dom";

// import "./styles.css";
import logo from "../../assets/logo.png";

function Pagina4() {

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
              <span className="login-form-title"> Selecione o seu aparelho </span>
              </div>
            <div className="container-tela-btn">
              <Link to="/pagina5" className="tela1-btn1">Geladeira</Link>
              <Link to="/pagina5" className="tela1-btn1">Fogão</Link>
              <Link to="/pagina5" className="tela1-btn1">Máquina de Lavar</Link>
              <Link to="/pagina5" className="tela1-btn1">Micro-ondas</Link>
              <Link to="/pagina5" className="tela1-btn1">Lava-louças</Link>
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

export default Pagina4;
