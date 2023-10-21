import React, { useState } from 'react'
import './cadastro.css'
import Header from '../../Components/Header/Header'

import { MdEmail } from 'react-icons/md'
import { PiBarcodeBold } from 'react-icons/pi'
import { BiSolidUser } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { RiLockPasswordFill } from 'react-icons/ri'
import { GrFormView } from 'react-icons/gr'
import { GrFormViewHide } from 'react-icons/gr'
import { Link } from 'react-router-dom'
import API from '../../API'

const Cadastro = () => {

  const [mostrarSenha, setMostrarSenha] = useState("password")
  const [senhaView, setSenhaView] = useState(<GrFormViewHide className='icones'/>)
  const [email, setEmail] = useState(null);
  const [codEtec, setCodEtec] = useState(null);
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [cPassword, setCPassword] = useState(null);
  
  async function handleRegister(e) {
    e.preventDefault();
    if (password !== cPassword ) {
      return alert("Senhas não coincidem!")
    }

    else if (password < 10) {
      return alert("Insira uma senha com mais de 10 digitos!")
    }

    const dataUser = {email, codEtec, login, password}

    try {
      await API.post('/cadastro', dataUser);

      alert("Usuário Cadastrado com sucesso!")
      setEmail("");
      setCodEtec("");
      setLogin("");
      setPassword("");
      setCPassword("");
      
    } catch(err) {
      alert(`Erro ao cadastrar. ${err}`)
    }
  }

  function verSenha(){
    setMostrarSenha("text")
    setSenhaView(<GrFormView className='icones'/>)

    if(mostrarSenha === "text"){
      setMostrarSenha("password")
      setSenhaView(<GrFormViewHide className='icones'/>)
    }
  }

  return (
    <div className='cadastro'>
        <Header/>
        <div className='info flex'>
          <h1>Bem-vindo ao SOC</h1>
          <h4>O sistema organizador de cronogramas(SOC) é uma ideia de TCC Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi neque, quo eum iure accusantium molestiae repellat ea ipsam distinctio soluta possimus ullam, nisi tempore rem labore, earum dolorum! Atque, accusantium!</h4>
        </div>
        <div className='formulario flex'>
          <h1>Cadastro</h1>
          <form onSubmit={handleRegister} className='formCad flex'>
            <div className='formInput emailInput'>
              <MdEmail className='icones'/>
              <input value={email} onChange={(e)=> setEmail(e.target.value)} type='email' name="" id="" placeholder='Email' required/>
            </div>
            <div className='impInfo'>
              <div className='formInput codInput'>
                <PiBarcodeBold className='icones'/>
                <input value={codEtec} onChange={(e)=> setCodEtec(e.target.value)} type="text" name="" id="" placeholder='Cód. ETEC' required/>
              </div>
              <div className='formInput rmInput'>
                <BiSolidUser className='icones'/>
                <input value={login} onChange={(e)=> setLogin(e.target.value)} type="text" name="" id="" placeholder='Login (ex: João123@)' required/>
              </div>
            </div>
            <div className="formInput senhaInput">
              <RiLockPasswordLine className='icones'/>
              <input value={password} onChange={(e)=> setPassword(e.target.value)} type={mostrarSenha} name="" id="" placeholder='Senha (min 10)' required/>
            </div>
            <div className="formInput repetirSenhaInput">
              <RiLockPasswordFill className='icones'/>
              <input value={cPassword} onChange={(e)=> setCPassword(e.target.value)} type={mostrarSenha} name="" id="" placeholder='Repetir Senha' required/>
              <button className='btnTransparente' onClick={verSenha} type="button">{senhaView}</button>
            </div>
            <Link className="link" to="/"><p>Já tem uma conta? Entre agora mesmo</p></Link>
            <button className='btnForm' type="submit">Cria conta</button>
          </form>
        </div>
    </div>
  )
}

export default Cadastro