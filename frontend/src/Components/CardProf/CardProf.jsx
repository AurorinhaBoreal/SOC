import React from 'react'
import image from '../../Assets/profile.png'

const CardProf = (props) => {
  return (
    <div className='card-prof flex'>
        <div className='card-prof__top' style={{backgroundColor: `${props.corCard}`}}>
            <img src={image} alt="" className='card-prof__img'/>
        </div>
        <h1 className='card-prof__nome'>{props.nome}</h1>
        <div className='card-prof__div-materias'>
          <h4>{props.materia}</h4>
        </div>
        <div>
          <h4>{props.dia}</h4>
        </div>
    </div>
  )
}

export default CardProf