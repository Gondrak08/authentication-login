import React, {useState} from 'react';
import './home.css'

import {Link} from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope} from '@fortawesome/free-solid-svg-icons';

import LoginBox from '../../components/loginBox';
import RegisterBox from '../../components/Register'



const Home: React.FC = () => {
    const [ebutton, setEbutton] = useState<Boolean>(false);
    const [rbutton, setRbutton] = useState<Boolean>(false);

    let content;

    if (ebutton === true) {
        content = <LoginBox/>
    } else if(rbutton == true){
        content = <RegisterBox/>
    } else {
        content = <>
            <p className="l-title">Escolha uma das formas de login</p>
            <div className="buttons-container">

                <button className="bt blank">
                    <FontAwesomeIcon className="icon-bt" icon={faFacebookF} color="blue" size="2x" />
                    <p>Facebook</p>
                </button>
                <button className="bt blank">
                    <FontAwesomeIcon className="icon-bt" icon={faGoogle} color="red" size="2x" />
                    <p>Gmail</p>
                </button>
                <button className="bt blank" onClick={e => { e.preventDefault(); setEbutton(true) }}>
                    <FontAwesomeIcon className="icon-bt" icon={faEnvelope} color="purple" size="2x" />
                    <p>Entrar com Email</p>
                </button>
            </div>
            <p className="termos">Ao prosseguir você aceita nossos <a href="#">Termos e condições</a> e <a href="#">
                Política de Privacidade
            </a> </p>
        </>
    }

    
    return (
        <>
            <section style={{ display: 'flex', alignItems:'center',
            justifyContent:'center', height:'100vh'}}>
                <div className="d-container">
                    <div className="col-one">
                        <h1>Welcome to my company</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nesciunt rem ullam incidunt quo, saepe nostrum.</p>
                        <span>
                            Register-se
                        </span>
                        <div>
                            <button type="button" id="one" ><FontAwesomeIcon icon={faFacebookF} color="blue" size="2x" /><p>Facebook</p></button>
                            <button type="button" id="two" ><FontAwesomeIcon icon={faGoogle} color="red" size="2x" />  Gmail</button>
                            <button type="button" id="three" onClick={e => { e.preventDefault(); setRbutton(true)}} >Registre-se com o email</button>
                        </div>
                    </div>
                    <div className="col-two">
                        {content}
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;