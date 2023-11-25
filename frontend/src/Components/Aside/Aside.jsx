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
        <h1>SOC</h1>
        <ul>
            <div className='aside-wrapper'>
                <li>
                    <Link to="/home" className='aside-items'>
                    <IoHome className='items-icons'/> 
                    <p>Inicio</p>
                    </Link>                  
                </li>
                <li>
                    <Link to="/prof" className='aside-items'>
                    <FaChalkboardTeacher className='items-icons'/> 
                    <p>Professores</p>
                    </Link>                  
                </li>
                <li>
                    <Link className='aside-items'>
                        <FaCircleUser className='items-icons'/>
                        <p>Conta</p>
                    </Link>
                </li>
            </div>
            <div className='aside-wrapper'>
                <li className='aside-items'>
                    <CgLogOut className='items-icons'/> 
                    <p>Sair</p>
                </li>
            </div>
        </ul>
    </aside>
  )
}

export default Aside