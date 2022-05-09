import { useState } from "react";
import logoIMG from "./assets/logo.png";
import "./styles.css";
import React from 'react';



function pag2() {
 
 
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            <div className="msg-menu">
        
              <span className="login-form-title"> Bem vindo (a) a Winx Assistência  </span>
              <span className="login-form-title"> Bem vindo (a) a Winx Assistência  </span>
              </div>
              <div className="container-tela-btn">
              <button className="tela1-btn1">Algo quebrou?</button>
              <button className="tela1-btn2">Minhas solicitações</button>
              <button className="tela1-btn3">Pagamentos</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default pag2;