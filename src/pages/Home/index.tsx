import React, {useState} from 'react';
import './home.css'

import GmLogo from '../../assets/icon_mail.svg'
import FbLogo from '../../assets/icon_facebook.svg'
import EmLogo from '../../assets/icon_mail.svg'

import {Link} from 'react-router-dom'
import LoginBox from '../../components/loginBox';

const Home: React.FC = () => {
    const [ebutton, setEbutton] = useState<Boolean>(false);

    let content;

    if (ebutton === true) {
        content = <LoginBox/>
    } else {
        content = <>
            <p className="l-title">Escolha uma das formas de login</p>
            <div className="buttons-container">

                <button className="bt blank">
                    <img className="icon-bt" src={FbLogo} alt="Facebook Logo" />
                    <p>Facebook</p>
                </button>
                <button className="bt blank">
                    <img className="icon-bt" src={GmLogo} alt="Gmail Logo" />
                    <p>Gmail</p>
                </button>
                <button className="bt blank" onClick={e => { e.preventDefault(); setEbutton(true) }}>
                    <img className="icon-bt" src={EmLogo} alt="Email logo" />
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