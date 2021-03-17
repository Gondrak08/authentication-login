import './Login.css'

const LoginBox: React.FC = () => {
    return (
        <section>
            <div className="register-container">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Email" className="text" id="email"  />
                
                    <input type="text" placeholder="password" className="text" id="password" />
                    
                    <input type="submit" className="button" value="enviar"/>
                </form>
            </div>
        </section>
    )
}

export default LoginBox;
