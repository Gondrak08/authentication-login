import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Feed from '../pages/Feed/index';

const PrivateRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route path="/private" component={Feed} />
        </BrowserRouter>
    )
}

export default PrivateRoutes;