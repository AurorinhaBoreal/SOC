import React, { useState } from 'react'
import '../../css/styles.css'
import NavForm from '../../Components/NavForm/NavForm'

import { PiBarcodeBold } from 'react-icons/pi'
import { BiSolidUser } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GrFormView } from 'react-icons/gr'
import { GrFormViewHide } from 'react-icons/gr'
import { Link } from 'react-router-dom'

import { FaGithub } from "react-icons/fa";

const Login = () => {

  const [mostrarSenha, setMostrarSenha] = useState("password")
  const [senhaView, setSenhaView] = useState(<GrFormViewHide className='icones'/>)

  function verSenha(){
    setMostrarSenha("text")
    setSenhaView(<GrFormView className='icones'/>)

    if(mostrarSenha == "text"){
      setMostrarSenha("password")
      setSenhaView(<GrFormViewHide className='icones'/>)
    }
  }

  return (
    <div className='login'>
        <NavForm/>
        <div className='form flex'>
          <h1>login</h1>
          <form className='flex'>
            <div className='input-wrapper'>
              <div className='form-input input-cod'>
                <PiBarcodeBold className='icones'/>
                <div className='input'>
                  <input type="text" name="" id="" required/>
                  <p>Cód. ETEC</p>
                </div>             
              </div>
              <div className='form-input input-login'>
                <BiSolidUser className='icones'/>
                <div className="input">
                  <input type="text" name="" id="" required/>
                  <p>Nome Usuário</p>
                </div>
              </div>
            </div>
            <div className="form-input input-senha">
              <RiLockPasswordLine className='icones'/>
              <div className="input">
                <input type={mostrarSenha} name="" id="" required/>
                <p>Senha</p>
              </div>
              <button className='btnTransparente' onClick={verSenha} type="button">{senhaView}</button>
            </div>
            <Link className="link" to="/cadastro"><p>Não tem uma conta? Crie agora mesmo</p></Link>
            <button className='form-btn'>Entrar</button>
          </form>
          <div className="extra flex">
            <div className="hr">
              <hr />
              <p>Conheça mais</p>
            </div>
            <div className="link-extra">
              <a target="_blank" href="https://github.com/AurorinhaBoreal/SOC">
                <FaGithub className='link-icon'/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login