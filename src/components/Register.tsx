
import React, { useState, useContext} from 'react'
import './Register.css'
import AuthContext from '../contexts/auth';








const Register: React.FC = () => {
    const context = useContext(AuthContext);
    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    const [checkedItem, setCheckedItem] = useState({
        checkedItems:new Map()
    })
   
    let fullName = fName + ' ' + lName

//   function handgleChange(e: any){
//       const item = e.target.name;
//       const isChecked = e.target.checked;
//       setCheckedItem(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
//     }

    function handleLogin() {
        if (fullName <= fullName[1]) {
            return context.Register() && context.setName(fullName);
        } else {
            console.log("Faltando nome")
        }
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
                        <input type="checkbox" name="name" id="validateOne" checked={false} />
                        <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                    </section>
                    <section id="checkbox">
                        <input type="checkbox" name="name" id="valideteTwo" checked={false} />
                        <span>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        </span>
                    </section>
                    <button type="submit" value="enviar" onClick={e => { e.preventDefault(); handleLogin()}} >Registre</button>
                </div>
            </div>
        </>
    )
}

export default Register;