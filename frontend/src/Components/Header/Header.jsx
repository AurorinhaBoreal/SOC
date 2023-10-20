import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <h1>SOC</h1>
      </div>
      <nav className='navMenu'>
        <ul>
          <li className='navItems'><Link to="/" className='navItems'>Login</Link></li>
          <li className='navItems'><Link to="/cadastro" className='navItems'>Cadastro</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header