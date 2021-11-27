import './css/style.css'
import './css/animations.css'
import './css/internos.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Usuario } from './pages/Usuario';
// import Amplify from 'aws-amplify';
// import awsconfig from './aws-exports';
// import { Routes } from 'react-router';
// Amplify.configure(awsconfig);
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Home from './pages/Usuario';
import Veiculos from './pages/Veiculos';
import Clientes from './pages/Clientes';
import Estoque from './pages/Estoque';
import Erro from './pages/Erro';

function App() {
  return (
    <>
      <Header />
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="veiculos/*" element={<Veiculos />} />
          <Route path="clientes/*" element={<Clientes />} />
          <Route path="estoque/*" element={<Estoque />} />
          <Route path="erro/*" element={<Erro />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

// export default withAuthenticator(App);
export default App;