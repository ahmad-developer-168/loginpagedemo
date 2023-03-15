import React from 'react'
import { useState } from 'react'
import {
  Link,
} from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [psderor, setPsderor] = useState('');
  const [emaileror, setEmaileror] = useState('');
  function validatePswrd(){
    const lenghtPsd= document.getElementById('pswrd').value.length;
    if(lenghtPsd<1){
      setPsderor("Esse campo é obrigatório");
      document.getElementById("pswrd").style.borderColor = 'red';
    }
    else{
      setPsderor("");
      document.getElementById("pswrd").style.borderColor = '#d2d6dc';
    }
  }
  function validateEmail(){
    const lenghtEmail= document.getElementById('email').value.length;
    if(lenghtEmail<1){
      setEmaileror("Esse campo é obrigatório");
      document.getElementById("email").style.borderColor = 'red';
    }
    else{
      setEmaileror("");
      document.getElementById("email").style.borderColor = '#d2d6dc';
    }
  }
  function validateField(){
    validateEmail();
    validatePswrd();
  }
  return (
    <>
      <div>
        <div className="formContainer">
            <form className="form" onSubmit={(event) => event.preventDefault()}>
                <div>
                   <label className="email-label" htmlFor="email">E-mail</label>
                   <input id="email" onBlur={validateEmail} className="email-input" type="email" name="email" value={email} onChange={e => setEmail(e.target.value)}/>
                  <div className="validationMsg">{emaileror}</div>
                </div>
                <div className="password-container">
                    <label className="email-label" htmlFor="u-password">Senha</label>
                    <input id="pswrd" onBlur={validatePswrd} className="email-input" value={password} onChange={e => setPassword(e.target.value)} type="password" name="u-password" />
                    <div className="validationMsg" id="psdError">{psderor}</div>
                </div>
                <div className="forgot-password-container">
                     <div className="forgot-password">
                        <Link to="/" className="forgot-password-lnk">Esqueceu a senha?</Link>
                     </div>
                </div>
                <div className="btnContainer">
                    <button className="btn-enter" onClick={validateField}>Entrar</button>
                </div>
            </form>
        </div>
      </div>
    </>
  )
}
