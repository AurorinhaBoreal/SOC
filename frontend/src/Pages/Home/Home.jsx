import React, { useState } from 'react'
import '../../css/styles.css'
import HeaderHome from '../../Components/HeaderHome/HeaderHome'

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
    //<FaChalkboardTeacher className='itemsIcons'/> 
    //<AiOutlineUser className='itemsIcons'/> 
    //<LuSettings className='itemsIcons'/> 
    //<CgLogOut className='itemsIcons'/> 


    return (
        <div className='home'>
            <aside className='aside'>
                <h1>SOC</h1>
                <ul>
                    <div className='aside-wrapper'>
                        <li className='aside-items'>
                            <FaChalkboardTeacher className='items-icons'/> 
                            <p>Professores</p>
                        </li>
                        <li className='aside-items'>
                            <AiOutlineUser className='items-icons'/>
                            <p>Conta</p>
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
            <div className='container'>
                <HeaderHome/>
                <div className=''>

                </div>
            </div>
        </div>
  )
}

export default Home