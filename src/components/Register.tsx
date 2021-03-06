
import React, { useState, useContext} from 'react'
import './Register.css'
import AuthContext from '../contexts/auth';
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
    const context = useContext(AuthContext);
    const [isFirstBoxClicked, setIsFirstBoxClicked] = useState<Boolean>(false);
    const [isSecondBoxClicked, setIsSecondBoxClicked] = useState<Boolean>(false);
    let history = useHistory();
    
    const redirect = async() => {
         history.push('/redirect')
    }
    async function registerSubmit() {
        if (isFirstBoxClicked === true && isSecondBoxClicked === true) {
            context.Register()
            redirect()
        } else {
            alert('marque as caixas abaixo')
        }
    }


    return (
        <>
            <div className="registration-container">
                <span>Registre-se</span>
                <div className="registration-form">
                    <input type="text" placeholder="Nome" id="text" autoComplete="off" onChange={e =>{context.setFName(e.target.value)}} />
                    <input type="text" placeholder="Sobrenome" id="text" autoComplete="off" onChange={e=>{context.setLName(e.target.value)}} />
                    <input type="email" placeholder="Email" id="text" autoComplete="off" onChange={e=>{context.setEmail(e.target.value)}} />
                    <input type="password" placeholder="Password" id="text" autoComplete="off" onChange={
                        e=>{context.setPass(e.target.value)}
                    } />
                    <section id="checkbox">
                        <input type="checkbox" name="name" id="validateOne" onClick={e => { setIsFirstBoxClicked(!isFirstBoxClicked) }}  />
                        <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                    </section>
                    <section id="checkbox">
                        <input type="checkbox" name="name" id="valideteTwo" onClick={e => { setIsSecondBoxClicked(!isSecondBoxClicked) }} />
                        <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                    </section>
                    <button type="submit" value="enviar" onClick={e => { e.preventDefault(); registerSubmit()}} >Registre</button>
                </div>
            </div>
        </>
    )
}

export default Register;