
import './Register.css'

const Register: React.FC = () => {
    return (
        <>
            <div className="registration-container">
                <span>Registre-se</span>
                <div className="registration-form">
                    <input type="text" placeholder="Nome" id="text" />
                    <input type="text" placeholder="Sobrenome" id="text" />
                    <input type="email" placeholder="Email" id="text" />
                    <input type="password" placeholder="Password" id="text" />
                   
                    <section id="checkbox">
                        <input type="checkbox" />
                        <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                    </section>
                    <section id="checkbox">
                        <input type="checkbox" />
                        <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                    </section>

                    <button type="submit" >Registre</button>
                </div>
            </div>
        </>
    )
}

export default Register;