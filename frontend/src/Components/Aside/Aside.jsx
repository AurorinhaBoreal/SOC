import React from 'react'

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { FaChalkboardTeacher } from 'react-icons/fa'
import { FaCircleUser } from "react-icons/fa6";
import { LuSettings } from 'react-icons/lu'
import { CgLogOut } from 'react-icons/cg'
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom'

const Aside = () => {
  return (
    <aside className='aside'>
        <h1 className='aside__logo'>SOC</h1>
        <ul className='aside__list'>
            <div className='aside__div'>
                <li className='aside__items'>
                    <Link to="/home" className='aside__items__link'>
                    <IoHome className='aside__icons'/> 
                    <p>Inicio</p>
                    </Link>                  
                </li>
                <li className='aside__items'>
                    <Link to="/prof" className='aside__items__link'>
                    <FaChalkboardTeacher className='aside__icons'/> 
                    <p>Professores</p>
                    </Link>                  
                </li>
                <li className='aside__items'>
                    <Link className='aside__items__link'>
                        <FaCircleUser className='aside__icons'/>
                        <p>Conta</p>
                    </Link>
                </li>
            </div>
            <div className='aside__div'>
                <li className='aside__items__link'>
                    <CgLogOut className='aside__icons'/> 
                    <p>Sair</p>
                </li>
            </div>
        </ul>
    </aside>
  )
}

export default Aside