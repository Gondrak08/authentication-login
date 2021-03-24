import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '../pages/Home/index';
import Redirecting from '../pages/Redirect'
const OpenRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/redirect" component={Redirecting} />
        </BrowserRouter>
    )
}

export default OpenRoutes;