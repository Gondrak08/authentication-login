import React from 'react';
import './Global.css';

import Routes from './routes/index';
import { AuthProvider } from './contexts/auth';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes/>
      </div>
    </AuthProvider>
  );
}

export default App;
