import React, { useState } from 'react'
import './home.css'

import { FiMenu } from 'react-icons/fi'
import { AiOutlineClose } from 'react-icons/ai'

import { FaChalkboardTeacher } from 'react-icons/fa'
import { AiOutlineUser } from 'react-icons/ai'
import { LuSettings } from 'react-icons/lu'
import { CgLogOut } from 'react-icons/cg'

const Home = () => {
    // const [menu, setMenu] = useState("sideMenu hidden")

    // function abrirMenu(){
    //     setMenu("sideMenu")
    // }

    // function fecharMenu(){
    //     setMenu("sideMenu hidden")
    // }

    return (
        <div className='home'>
            <div>
                {/* <button onClick={abrirMenu}><FiMenu/></button> */}
                <div /*className={menu}*/ className='sideMenu'>
                    <div className='sideMenu__top'>
                    {/* <button onClick={fecharMenu} className='btnTransparente items'><AiOutlineClose className='itemsIcons'/></button> */}
                        <ul>
                            <li><button className='btnTransparente items'>
                                <FaChalkboardTeacher className='itemsIcons'/> 
                                <p className='itemsText'>Professores</p>
                            </button></li>
                        </ul>
                    </div>
                    <div className='sideMenu__bottom'>
                        <ul>
                            <li><button className='btnTransparente items'>
                                <AiOutlineUser className='itemsIcons'/> 
                                <p className='itemsText'>Conta</p>
                            </button></li>

                            <li><button className='btnTransparente items'>
                                <LuSettings className='itemsIcons'/> 
                                <p className='itemsText'>Configurações</p>
                            </button></li>

                            <li><button className='btnTransparente items'>
                                <CgLogOut className='itemsIcons'/> 
                                <p className='itemsText'>Sair</p>
                            </button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Home
