import { getAutomaticTypeDirectiveNames } from 'typescript';
import './Login.css'

const LoginBox: React.FC = () => {
    return (
        <section>
            <div className="register-container">
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Digite o seu email" className="input" name="email" id="email"  />
                        
                    <input type="password" placeholder="Digite a sua senha" className="input" name="password" id="password" />
                       

                    <input type="submit" className="button" value="enviar" onChange={e => { e.preventDefault() }} />
                    
                </form>
            </div>
        </section>
    )
}
    // Amoipiras, Massacarás, Pontás, Aracujás. 
export default LoginBox;
