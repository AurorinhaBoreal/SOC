import React, { useEffect, useState } from 'react'
import { CirclePicker } from 'react-color';
import API from '../../API';
import image from '../../Assets/profile.png'

const FormProf = (props) => {

    const [hidden, setHidden] = useState(null);

    function close(){
        setHidden("none")
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

    const [name, setName] = useState(null);
    const [colorCard, setColorCard] = useState(null);

    async function handleProfCreation(e) {
        e.preventDefault();
        if (name < 1) {
        return alert("Insira um nome!")
        }

        const dataProf = {name, colorCard}

        try {
        await API.post('/prof', dataProf);

        alert("Professor Cadastrado com sucesso!")
        setName("");
        setColorCard("");

        } catch(err) {
        alert(`Erro ao cadastrar. ${err}`)
        }
    }

    const [materia, setMateria] = useState([])

    async function getMateria(){
        const res = await API.get("/materias");
        setMateria(res.data.message)
    }

    useEffect(() =>{
        getMateria();
    }, [setMateria])

    console.log(materia)

    return (
        <div className={props.estilo} style={{boxShadow: `0 5px 5px 5px ${currentColor}`, display: `${hidden}`}}>
            <form onSubmit={handleProfCreation}>
            <div className='form__prof__esquerdo'>
                <div className='form__prof__input-foto'>
                <input type="file" id='foto' onChange={getFile}/>
                <img src={file} id='profile-pic' alt='default-pic'/>
                <label for='foto' id='input-file' accept="image/jpeg, image/png, image/jpg">Colocar Imagem</label>
                </div>
                <div className="form__prof__input">
                <input type='text' required 
                value={name} onChange={(e)=> setName(e.target.value)}/>
                <p className='form__prof__placeholder'>Nome</p>
                </div>
                <div className='form__prof__select-cores'>
                <h4 className='select-text'>Selecione a cor do card</h4>
                <div className='form__prof__select-cores__items'>
                    <CirclePicker 
                    onChangeComplete={handleOnChange}
                    value={colorCard} onChange={()=> setColorCard(currentColor)}/>
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
                        <input type="checkbox" name="seg" id="seg" value="3"/>
                        <label for="seg">Segunda</label>
                    </div>
                    <div className='form__prof__input-dia'>
                        <input type="checkbox" name="ter" id="ter" value="6"/>
                        <label for="ter">Terça</label>
                    </div>
                    <div className='form__prof__input-dia'>
                        <input type="checkbox" name="qua" id="qua" value="9"/>
                        <label for="qua">Quarta</label>
                    </div>
                    <div className='form__prof__input-dia'>
                        <input type="checkbox" name="qui" id="qui" value="12"/>
                        <label for="qui">Quinta</label>
                    </div>
                    <div className='form__prof__input-dia'>
                        <input type="checkbox" name="sex" id="sex" value="15"/>
                        <label for="sex">Sexta</label>
                    </div>
                    </div>
                </div>
                <div className='form__prof__select-materias'>
                    <h4 className='select-text'>Selecione as matérias</h4>
                    <div className='form__prof__div-materias'>
                    {
                        materia.map((materias) =>{
                        return(
                            <div className='form__prof__input-materias'>
                            <input type="checkbox" name="seg" id={materias.id} />
                            <label for={materias.id}>{materias.nome}</label>
                            </div>
                        )
                        })
                    }
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}

export default FormProf