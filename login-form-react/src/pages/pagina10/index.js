import { useState } from "react";
import { FiMenu, FiChevronLeft } from 'react-icons/fi';

import { Link } from "react-router-dom";

// import "./styles.css";
import logo from "../../assets/logo.png";

function Pagina10() {
   const [email, setEmail] = useState("");

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
              <span className="login-form-title"> Revise as informações e confirme os dados: </span>
              </div>
            <div className="wrap-input revision-form">
              <h1><span>Solicitante:</span> Gabriela Silva</h1>
              <h1><span>Solicitante:</span> Gabriela Silva</h1>
              <h1><span>Solicitante:</span> Gabriela Silva</h1>
              <h1><span>Solicitante:</span> Gabriela Silva</h1>
              <h1><span>Solicitante:</span> Gabriela Silva</h1>
              <h1><span>Solicitante:</span> Gabriela Silva</h1>
              <h1><span>Solicitante:</span> Gabriela Silva</h1>
            </div>
            <div className="container-tela-btn">
              <button className="tela1-btn5">Enviar Solicitação</button>
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

export default Pagina10;
