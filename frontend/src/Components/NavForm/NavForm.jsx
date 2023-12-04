import React from 'react'
import '../../css/styles.css'
import { Link } from 'react-router-dom'

import logo from '../../Assets/Logo SOC.png'

const NavForm = () => {
  return (
    <header className='header__form'>
      <div className='header__form__logo'>
        <img src={logo} alt="Logo SOC" className='header__form__logo'/>
      </div>
      <nav className='header__form__nav'>
        <ul className='header__form__list'>
          <li className='header__form__items'>
            <Link to="/" className='header__form__items__link'>Login</Link>
          </li>
          <li className='header__form__items'>
            <Link to="/cadastro" className='header__form__items__link'>Cadastro</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavForm