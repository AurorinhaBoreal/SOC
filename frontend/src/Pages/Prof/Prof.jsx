import React, { useEffect, useState } from 'react'
import { CirclePicker } from 'react-color';
import '../../css/styles.css'
import API from '../../API';
import Aside from '../../Components/Aside/Aside'
import Header from '../../Components/Header/Header'
import CardProf from '../../Components/CardProf/CardProf'

import FormProf from '../../Components/FormProf/FormProf';

const Prof = () => {
  const [show, setShow] = useState("form__prof hidden")

  function profForm(){
    setShow("form__prof show")

    if(show == "form__prof show"){
      setShow("form__prof hidden")
    }
  }

  const [prof, setProf] = useState([])

  async function getProf(){
    const res = await API.get("/prof");
    setProf(res.data.message)
  }

  useEffect(() =>{
    getProf();
  }, [setProf])

  console.log(prof) 

  return (
    <div className='prof'>
      <Aside/>
      <div className="container">
        <Header>
          <button className='header__home__btn__criar'
            onClick={profForm}>Criar Professor +</button>
        </Header>
        <FormProf estilo={show}/>
        <div className='prof__div'>
          {
            prof.map((profs) =>{
              return(
                <CardProf 
                nome={profs.Nome} 
                corCard={profs.corCard} 
                materia={profs.Sigla} 
                dia={profs.Dia}/>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Prof