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
          <h1 className='form__title'>login</h1>
          <form className='flex'>
            <div className='form__div'>
              <div className='form__items input-cod'>
                <PiBarcodeBold className='icones'/>
                <div className='form__items__input'>
                  <input type="text" name="" id="" required/>
                  <p className='form__items__placeholder'>Cód. ETEC</p>
                </div>             
              </div>
              <div className='form__items input-login'>
                <BiSolidUser className='icones'/>
                <div className='form__items__input'>
                  <input type="text" name="" id="" required/>
                  <p className='form__items__placeholder'>Nome Usuário</p>
                </div>
              </div>
            </div>
            <div className="form__items input-senha">
              <RiLockPasswordLine className='icones'/>
              <div className='form__items__input'>
                <input type={mostrarSenha} name="" id="" required/>
                <p className='form__items__placeholder'>Senha</p>
              </div>
              <button className='btnTransparente' onClick={verSenha} type="button">{senhaView}</button>
            </div>
            <Link className="form__link" to="/cadastro">
              <p>Não tem uma conta? Crie agora mesmo</p>
            </Link>
            <button className='form__btn__submit'>Entrar</button>
          </form>
          <div className="form__extra flex">
            <div className="form__extra__hr">
              <hr className='form__hr'/>
              <p>Conheça mais</p>
            </div>
            <div className="form__redes-sociais">
              <a target="_blank" href="https://github.com/AurorinhaBoreal/SOC">
                <FaGithub className='form__redes-sociais__icon'/>
              </a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login