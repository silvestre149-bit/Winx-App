import { useState } from "react";
import { FiMenu, FiChevronLeft } from 'react-icons/fi';

import { Link } from "react-router-dom";

// import "./styles.css";
import logo from "../../assets/logo.png";

function Pagina9() {
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
              <span className="login-form-title"> De acordo com nosso sistema e nível de prioridade, escolha uma data disponível para atendimento técnico: </span>
              </div>
            <div className="wrap-input date-form">
              {[1,2,3,4].map(item => (
              <div className="date-option" key={item}>
                <div className="left-side">
                  <input type="checkbox"/>
                  <h3 className="date">25/04</h3>
                </div>
                <div className="right-side">
                  <h4 className="hour-text">Horário:</h4>
                  <h3 className="hour-value">15:00</h3>
                </div>
              </div>
              ))}
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

export default Pagina9;
