import React, { createContext, useState } from 'react';
import api from '../services/api';
import axios from 'axios';
interface AuthContextData{
    signed: boolean;
    Login(): Promise<void>;
    Register(): Promise<void>;
    user: object | null;
    name: string;
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
    async function Register() {
        const params = {
            name: name,
            email: email,
            password: pass,
        }
        try {
            const response = await api.post("/register", 
                params
            );
            // setData(response)
            console.log(response)
        } catch (err) {
            alert('Falha no registro, tente novamente')
        }
    }
    
    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
            user,
            Login,
            Register,
            email,
            setEmail,
            pass,
            setPass,
            data,
            name,
            setName
        }}>
            {children}
        </AuthContext.Provider>
    )
}



