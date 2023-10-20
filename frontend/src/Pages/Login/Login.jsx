import React, { useState } from 'react'
import './login.css'
import Header from '../../Components/Header/Header'

import { PiBarcodeBold } from 'react-icons/pi'
import { BiSolidUser } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { GrFormView } from 'react-icons/gr'
import { GrFormViewHide } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Login = () => {

  const [mostrarSenha, setMostrarSenha] = useState("password")
  const [senhaView, setSenhaView] = useState(<GrFormViewHide className='icones'/>)

  function verSenha(){
    setMostrarSenha("text")
    setSenhaView(<GrFormView className='icones'/>)

    if(mostrarSenha === "text"){
      setMostrarSenha("password")
      setSenhaView(<GrFormViewHide className='icones'/>)
    }
  }

  return (
    <div className='login'>
        <Header/>
        <div className='info flex'>
          <h1>Bem-vindo ao SOC</h1>
          <h4>O sistema organizador de cronogramas(SOC) é uma ideia de TCC Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi neque, quo eum iure accusantium molestiae repellat ea ipsam distinctio soluta possimus ullam, nisi tempore rem labore, earum dolorum! Atque, accusantium!</h4>
        </div>
        <div className='formulario flex'>
          <h1>login</h1>
          <form className='formLogin flex'>
            <div className='impInfo'>
              <div className='formInput codInput'>
                <PiBarcodeBold className='icones'/>
                <input type="text" name="" id="" placeholder='Cód. ETEC'/>
              </div>
              <div className='formInput rmInput'>
                <BiSolidUser className='icones'/>
                <input type="text" name="" id="" placeholder='Login'/>
              </div>
            </div>
            <div className="formInput senhaInput">
              <RiLockPasswordLine className='icones'/>
              <input type={mostrarSenha} name="" id="" placeholder='Senha'/>
              <button className='btnTransparente' onClick={verSenha} type="button">{senhaView}</button>
            </div>
            <Link className="link" to="/cadastro"><p>Não tem uma conta? Crie agora mesmo</p></Link>
            <button className='btnForm'>Entrar</button>
          </form>
        </div>
    </div>
  )
}

export default Login