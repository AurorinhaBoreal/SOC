import React, { useState } from 'react'
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

  return (
    <div className='prof'>
        <Aside/>
        <div className="container">
          <Header>
            <button className='btn-criar'
            onClick={profForm}>Criar Professor +</button>
          </Header>
        </div>
        <div className={show}>
          {/* <IoMdClose onClick={close} className='btn-fechar'/> */}
          <form className='form'>
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
              <h4 className='select-text'>Selecione uma cor</h4>
              <div className='cores'>
                <input type="radio" name='color' id='1' value='#00beef'/>
                <label for="1" className='cores azul'></label>
                <input type="radio" name='color' id='2' value='#f34'/>
                <label for="2" className='cores vermelho'></label>
                <input type="radio" name='color' id='3' value='#beff00'/>
                <label for="3" className='cores verde'></label>
                <input type="radio" name='color' id='4' value='#ff0'/>
                <label for="4" className='cores amarelo'></label>
                <input type="radio" name='color' id='5' value='be00ff'/>
                <label for="5" className='cores roxo'></label>

                <input type="color" name='color' id='newColor'/>
                <label for="newColor" className='cores new'><MdAdd /></label>
              </div>
            </div>
            <div>
              <h4 className='select-text'>Selecione as matérias</h4>
              <div></div>
            </div>
            <div className='btns-form'>
              <button className='btn-cancelar' type='button' onClick={close}>Cancelar</button>
              <button className='btn-submit' type='submit'>Salvar</button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Prof