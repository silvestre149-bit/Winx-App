import { useState } from "react";
import { FiMenu, FiChevronLeft } from 'react-icons/fi';

import { Link } from "react-router-dom";

// import "./styles.css";
import logo from "../../assets/logo.png";

function Pagina8() {
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
              <span className="login-form-title"> Digite o endereço do atendimento: </span>
              </div>
            <div className="wrap-input service-form">
              <div className="checkboxLine">
                <input type="checkbox" className="checkbox-input"/>
                <span>Residencial</span>
                <input type="checkbox" className="checkbox-input"/>
                <span>Comercial</span>
              </div>
                <h3>Endereço</h3>
                <input type="text" className="input"/>
                <h3>Telefone para contato</h3>
                <input type="text" className="input"/>
                <h3>Informação adicional</h3>
                <input type="text" className="input"/>

            </div>
            <div className="container-tela-btn">
              <button className="tela1-btn5">Próximo</button>
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

export default Pagina8;
