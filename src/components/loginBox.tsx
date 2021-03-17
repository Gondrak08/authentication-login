import './Login.css'

const LoginBox: React.FC = () => {
    return (
        <section>
            <div className="register-container">
                <h1>Login</h1>
                <form>
                    <input type="email" placeholder="Digite o seu email" className="text" name="email" id="email"  />
                
                    <input type="password" placeholder="Digite a sua senha" className="text" name="password" id="password" />
                    
                    <input type="submit" className="button" value="enviar"/>
                </form>
            </div>
        </section>
    )
}

export default LoginBox;
