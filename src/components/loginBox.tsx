import React, { useContext } from 'react';
import './Login.css'
import AuthContext from '../contexts/auth';


const LoginBox: React.FC = () => {
    const context = useContext(AuthContext);
    
    function handleLogin() {  
        context.Login();
        console.log(context);
    }

    return (
        <section>
            <div className="register-container">
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Digite o seu email" className="input" name="email" id="email" onChange={e => { e.preventDefault(); context.setEmail(e.target.value)}}  />
                        
                    <input type="password" placeholder="Digite a sua senha" className="input" name="password" id="password" onChange={e => { e.preventDefault(); context.setPass(e.target.value)}}/>   

                    <input type="submit"  className="button" value="enviar" onClick={e => { e.preventDefault(); handleLogin() }} />
                    
                </form>
            </div>
        </section>
    )
}

export default LoginBox;
