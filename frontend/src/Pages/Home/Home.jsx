import React, { useState } from 'react'
import '../../css/styles.css'
import Aside from '../../Components/Aside/Aside'
import Header from '../../Components/Header/Header'

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
            <Aside/>
            <div className='container'>
                <Header>
                    <button className='btn-criar'>Criar Horário +</button>
                </Header>
                <div className=''>

                </div>
            </div>
        </div>
  )
}

export default Home