import React, { createContext, useState} from 'react';
import api from '../services/api';

interface AuthContextData{
    signed: boolean;
    Login(): Promise<void>;
    Register(): Promise<void>;
    user: object | null;
    name: string;
    setName: (active: string) => void;
    fName: string;
    setFName: (active: string) => void;
    lName: string;
    setLName: (active: string) => void;
    email: string;
    setEmail: (active: string) => void;
    pass: string;
    setPass: (active: string) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export default AuthContext;

export const AuthProvider: React.FC = ({ children }) => {
    
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>('');
    const [user, setUser] = useState<object | null>(null);
    const [name, setName] = useState<string>('');
    const [fName, setFName] = useState<string>('');
    const [lName, setLName] = useState<string>('');
    
    
    async function Register() {
        const params = {
            email: email,
            password: pass,
            name: fName + ' ' + lName
        }
        try {
            const response = await api.post("/register",
                params
            );
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
        } catch (err) {
            alert('Falha no login, tente novamente');
        }
    }

    return (
        <AuthContext.Provider value={{
            signed: Boolean(user),
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



