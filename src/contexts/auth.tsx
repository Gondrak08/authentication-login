import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

interface AuthContextData{
    signed: boolean;
    Login(): Promise<void>;
    Register(): Promise<void>;
    user: object | null;
    name: string;
    fName: string;
    setFName: (active: string) => void;
    lName: string;
    setLName: (active: string) => void;
    setName: (active: string) => void;
    email: string;
    setEmail: (active: string) => void;
    pass: string;
    setPass: (active: string) => void;
    data: object | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export default AuthContext;
export const AuthProvider: React.FC = ({ children }) => {
    
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [user, setUser] = useState<object | null>(null);
    const [name, setName] = useState<string>('');
    const [data, setData] = useState({})
    
    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    
    
        async function Register() {
            const params = {
                email: email,
                password: pass,
                name: fName + lName
            }
            try {
                const response = await api.post("/register",
                    params
                );

                setUser(response.data);
               
                console.log(user)
                console.log(response);
               

            } catch (err) {
                alert('Falha no login, tente novamente');
            }
        }
  
    
   
    

    async function Login() {
        const params = {
            email: email,
            password: pass,
        }
        try {
            const response = await api.post("/login",
                params
            );

            setUser(response.data);
            api.defaults.headers.Authorization = `Bearer ${response.data.data}`
            console.log(user)
            console.log(response);
            // setData(response.data)

        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }



    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
            data,
            user,
            Login,
            Register,
            fName,
            setFName,
            lName,
            setLName,
            email,
            setEmail,
            pass,
            setPass,
            name,
            setName
        }}>
            {children}
        </AuthContext.Provider>
    )
}



