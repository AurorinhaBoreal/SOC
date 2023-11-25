import React, { useState } from 'react'
import { CirclePicker } from 'react-color';
import '../../css/styles.css'
import Aside from '../../Components/Aside/Aside'
import Header from '../../Components/Header/Header'
import image from '../../Assets/profile.png'

import { IoMdClose } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import { FiUserPlus } from "react-icons/fi";

const Prof = () => {
  const [show, setShow] = useState("form-prof hidden")

  function profForm(){
    setShow("form-prof show")
  }

  function close(){
    setShow("from-prof hidden")
  }
  
  const [file, setFile] = useState(image)

  function getFile(event){
    setFile(URL.createObjectURL(event.target.files[0]))
  }

  const [currentColor, setCurrentColor] = useState("#aaa")
  const handleOnChange = (color) =>{
    setCurrentColor(color.hex)
    console.log(currentColor)
  }

  return (
    <div className='prof'>
        <Aside/>
        <div className="container">
          <Header>
            <button className='btn-criar'
            onClick={profForm}>Criar Professor +</button>
          </Header>
        </div>
        <div className={show} style={{boxShadow: `0 5px 5px 5px ${currentColor}`}}>
          <form className='form'>
            <div className='form-esquerdo'>
              <div className='input-foto'>
                <input type="file" id='foto' onChange={getFile}/>
                <img src={file} id='profile-pic'/>
                <label for='foto' id='input-file' accept="image/jpeg, image/png, image/jpg">Colocar Imagem</label>
              </div>
              <div className="input">
                <input type='text' required/>
                <p>Nome</p>
              </div>
              <div className='select-cores'>
                <h4 className='select-text'>Selecione a cor do card</h4>
                <div className='cores'>
                  <CirclePicker 
                  onChangeComplete={handleOnChange}/>
                </div>
              </div>
              <div className='btns-form'>
                <button className='btn-cancelar' type='button' onClick={close}>Cancelar</button>
                <button className='btn-submit' type='submit'>Salvar</button>
              </div>
            </div>
            <div className='form-direito'>
              <div className='select-materias'>
                  <h4 className='select-text'>Selecione as matérias</h4>
                  <div>
                    {/* Opções com base no banco de dados */}
                  </div>
              </div>
              <div className='select-dias'>
                <h4 className='select-text'>Selecione os dias</h4>
                  <div>
                    {/* Opções com base no banco de dados */}
                  </div>
              </div>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Prof