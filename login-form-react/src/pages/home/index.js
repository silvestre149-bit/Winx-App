import { useState } from "react";
import { FiMenu, FiChevronLeft } from 'react-icons/fi';

import { Link } from "react-router-dom";

// import "./styles.css";
import logo from "../../assets/logo.png"

function Home() {
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
              <span className="login-form-title"> Bem vindo (a) a Winx Assistência Técnica! </span>
              </div>
            <div className="container-tela-btn">
              <Link to="/pagina5" className="tela1-btn1" >Algo quebrou?</Link>
              <Link to="/" className="tela1-btn2">Minhas solicitações</Link>
              <Link to="/" className="tela1-btn3">Pagamentos</Link>  
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Home;
