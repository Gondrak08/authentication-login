import React, { createContext, useState } from 'react';
import api from '../services/api';
import axios from 'axios';
interface AuthContextData{
    signed: boolean;
    Login(): Promise<void>;
    user: object | null;
    email: string;
    setEmail: (active: string) => void;
    pass: string;
    setPass: (active: string) => void;
    data: object | null;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
    
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [user, setUser] = useState<object | null>(null);
    const [signed, setSigned] = useState<boolean>(false);
    const [data, setData] = useState({})
    

    const params = {
        email: email,
        password: pass,
    }

    async function Login() {

        try {
            const response = await api.post("/login", 
                params
            );

            setUser(response.data.user);
            api.defaults.headers.Authorization = `Bearer ${response.data.token}`
            console.log(user)
            console.log(response);
            // setData(response.data)

        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }
    
    return (
        <AuthContext.Provider value={{ signed: Boolean(user), user, Login, email, setEmail, pass, setPass, data }}>
            {children}
        </AuthContext.Provider>
    )
}



export default AuthContext;