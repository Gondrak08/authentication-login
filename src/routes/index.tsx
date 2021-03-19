import React, { useContext } from 'react';
import AuthContext from '../contexts/auth';


import OpenRoutes from './OpenRoutes';
import PrivateRoutes from './PrivateRoutes';

const Routes: React.FC = () => {
    const { signed } = useContext(AuthContext)
    return signed ?  <PrivateRoutes /> : <OpenRoutes />;
}
export default Routes;