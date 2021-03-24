
import React, { useState, useContext} from 'react'
import './Register.css'
import AuthContext from '../contexts/auth';
import { useHistory } from "react-router-dom";

const Register: React.FC = () => {
    const context = useContext(AuthContext);
    
    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    const [isFirstBoxClicked, setIsFirstBoxClicked] = useState<Boolean>(false);
    const [isSecondBoxClicked, setIsSecondBoxClicked] = useState<Boolean>(false);
    const [isRegistred, setRegistred] = useState<Boolean>(false)
  


    let fullName = fName + ' ' + lName
    async function handleLogin(e: any) {
        if (fullName <= fullName[1] && isFirstBoxClicked === true && isSecondBoxClicked === true) {
             context.Register() && context.setName(fullName) 
             setRegistred(true)
        } else {
            alert("Registro incorreto. Por Favor corriga os seus dados")
        }
        
        // if (fullName <= fullName[1] && isFirstBoxClicked === true && isSecondBoxClicked === true) {
        //     return (context.Register() && context.setName(fullName), handleClick())

        // }
        // else {
        //     alert("Faltando nome")
        // }
        
    }
  
    let history = useHistory();

    function handleClick() {
        history.push("/redirect");
    }

    if (isRegistred === true) {
        handleClick()
    }

    return (
        <>
            <div className="registration-container">
                <span>Registre-se</span>
                <div className="registration-form">
                    <input type="text" placeholder="Nome" id="text" onChange={e =>{setFName(e.target.value)}} />
                    <input type="text" placeholder="Sobrenome" id="text" onChange={e=>{setLName(e.target.value)}} />
                    <input type="email" placeholder="Email" id="text" onChange={e=>{context.setEmail(e.target.value)}} />
                    <input type="password" placeholder="Password" id="text" onChange={
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
                    <button type="submit" value="enviar" onClick={e => { e.preventDefault(); handleLogin(e)}} >Registre</button>
                </div>
            </div>
        </>
    )
}

export default Register;