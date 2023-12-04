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
  const [show, setShow] = useState("form__prof hidden")

  function profForm(){
    setShow("form__prof show")
  }

  function close(){
    setShow("form__prof hidden")
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
            <button className='header__home__btn__criar'
            onClick={profForm}>Criar Professor +</button>
          </Header>
        </div>
        <div className={show} style={{boxShadow: `0 5px 5px 5px ${currentColor}`}}>
          <form>
            <div className='form__prof__esquerdo'>
              <div className='form__prof__input-foto'>
                <input type="file" id='foto' onChange={getFile}/>
                <img src={file} id='profile-pic'/>
                <label for='foto' id='input-file' accept="image/jpeg, image/png, image/jpg">Colocar Imagem</label>
              </div>
              <div className="form__prof__input">
                <input type='text' required/>
                <p className='form__prof__placeholder'>Nome</p>
              </div>
              <div className='form__prof__select-cores'>
                <h4 className='select-text'>Selecione a cor do card</h4>
                <div className='form__prof__select-cores__items'>
                  <CirclePicker 
                  onChangeComplete={handleOnChange}/>
                </div>
              </div>
              <div className='form__prof__btns'>
                <button className='form__prof__btns__cancelar' type='button' onClick={close}>Cancelar</button>
                <button className='form__prof__btns__submit' type='submit'>Salvar</button>
              </div>
            </div>
            <div className='form__prof__direito'>
              <div className='form__prof__select-dias'>
                <h4 className='select-text'>Selecione os dias</h4>
                  <div className='form__prof__div-dias'>
                    <div className='form__prof__input-dia'>
                      <input type="checkbox" name="seg" id="3" />
                      <label for="3">Segunda</label>
                    </div>
                    <div className='form__prof__input-dia'>
                      <input type="checkbox" name="seg" id="6" />
                      <label for="6">Terça</label>
                    </div>
                    <div className='form__prof__input-dia'>
                      <input type="checkbox" name="seg" id="9" />
                      <label for="9">Quarta</label>
                    </div>
                    <div className='form__prof__input-dia'>
                      <input type="checkbox" name="seg" id="12" />
                      <label for="12">Quinta</label>
                    </div>
                    <div className='form__prof__input-dia'>
                      <input type="checkbox" name="seg" id="15" />
                      <label for="15">Sexta</label>
                    </div>
                  </div>
              </div>
              <div className='select-materias'>
                  <h4 className='select-text'>Selecione as matérias</h4>
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