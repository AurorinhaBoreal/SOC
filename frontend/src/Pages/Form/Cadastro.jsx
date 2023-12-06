import React, { useState } from 'react'
import '../../css/styles.css'
import logo from '../../Assets/logo branca.png'
import API from '../../API'

import { MdEmail } from 'react-icons/md'
import { PiBarcodeBold } from 'react-icons/pi'
import { BiSolidUser } from 'react-icons/bi'
import { RiLockPasswordLine } from 'react-icons/ri'
import { RiLockPasswordFill } from 'react-icons/ri'
import { GrFormView } from 'react-icons/gr'
import { GrFormViewHide } from 'react-icons/gr'
import { Link } from 'react-router-dom'

const Cadastro = () => {

  const [mostrarSenha, setMostrarSenha] = useState("password")
  const [senhaView, setSenhaView] = useState(<GrFormViewHide className='form__items__icones'/>)

  function verSenha(){
    setMostrarSenha("text")
    setSenhaView(<GrFormView className='form__items__icones'/>)

    if(mostrarSenha == "text"){
      setMostrarSenha("password")
      setSenhaView(<GrFormViewHide className='form__items__icones'/>)
    }
  }

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

  return (
    <div className='cadastro'>
        <div className='form'>
          <div className="form__esquerdo">
            <div className='form__form'>
              <h1 className='form__title'>Cadastro</h1>
              <form className='flex' 
              onSubmit={handleRegister}>
                <div className='form__items emailInput'>
                  <MdEmail className='form__items__icones'/>
                  <div className="form__items__input">
                      <input type="text" name="" id="" required
                      value={email} onChange={(e)=> setEmail(e.target.value)}/>
                      <p className='form__items__placeholder'>Email</p>
                  </div>
                </div>
                <div className='form__div'>
                  <div className='form__items codInput'>
                    <PiBarcodeBold className='form__items__icones'/>
                    <div className="form__items__input">
                      <input type="text" name="" id="" required
                      value={codEtec} onChange={(e)=> setCodEtec(e.target.value)}/>
                      <p className='form__items__placeholder'>Cód. ETEC</p>
                    </div>
                  </div>
                  <div className='form__items rmInput'>
                    <BiSolidUser className='form__items__icones'/>
                    <div className="form__items__input">
                      <input type="text" name="" id="" required
                      value={login} onChange={(e)=> setLogin(e.target.value)}/>
                      <p className='form__items__placeholder'>Nome Usuário</p>
                    </div>             
                  </div>
                </div>
                <div className="form__items senhaInput">
                  <RiLockPasswordLine className='form__items__icones'/>
                  <div className="form__items__input">
                    <input type={mostrarSenha} name="" id="" required
                    value={password} onChange={(e)=> setPassword(e.target.value)}/>
                    <p className='form__items__placeholder'>Senha min. 8 caracteres</p>
                  </div>
                </div>
                <div className="form__items repetirSenhaInput">
                  <RiLockPasswordFill className='form__items__icones'/>
                  <div className="form__items__input">
                    <input type={mostrarSenha} name="" id="" required
                    value={cPassword} onChange={(e)=> setCPassword(e.target.value)}/>
                    <p className='form__items__placeholder'>Repetir Senha</p>
                  </div>
                  <button className='btnTransparente' onClick={verSenha} type="button">{senhaView}</button>
                </div>
                <Link className="form__link" to="/"><p>Já tem uma conta? Entre agora mesmo</p></Link>
                <button className='form__btn__submit' type="submit">Cria conta</button>
              </form>
            </div>
          </div>
          <div className="form__direito">
            <header className='form__direito__header'>
              <img src={logo}/>
            </header>
            <div className='form__direito__conteudo'>
              <h1 className='form__direito__texto'>Seja Bem Vindo <br />
              ao SOC</h1>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Cadastro