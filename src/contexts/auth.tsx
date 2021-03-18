import axios from 'axios';

import React, { createContext, useState } from 'react';

interface AuthContextData{
    signed: boolean;
    Login(): Promise<void>;
    email: string;
    setEmail: (active: string) => void;
    pass: string;
    setPass: (active: string) => void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);
export default AuthContext;


export const AuthProvider: React.FC = ({ children }) => {
    
    const [email, setEmail] = useState<string>('');
    
    return (
        <>
        </>
    )
}
