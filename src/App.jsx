import './css/style.css'
import './css/animations.css'
import './css/internos.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Usuario';
import { Veiculos } from './pages/Veiculos';
import Clientes from './pages/Clientes';
import Estoque from './pages/Estoque';
import Erro from './pages/Erro';

import { AddVeiculo } from './pages/Veiculos/AddVeiculo';
import { EditarVeiculo } from './pages/Veiculos/EditarVeiculo';
import { AddServico } from './pages/Servicos/AddServico';
import { EditarServico } from './pages/Servicos/EditarServico';
import { AddEstoque } from './pages/Estoque/AddEstoque';
import { EditarEstoque } from './pages/Estoque/EditarEstoque';

// import { withAuthenticator } from 'aws-amplify-react';

import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="veiculos/*" element={<Veiculos />} />
          <Route path="veiculos/add_veiculo/*" element={<AddVeiculo />} />
          <Route path="veiculos/editar_veiculo/*" element={<EditarVeiculo />} />
          <Route path="veiculos/add_servico/*" element={<AddServico />} />
          <Route path="veiculos/editar_servico/*" element={<EditarServico />} />
          <Route path="veiculos/add_estoque/*" element={<AddEstoque />} />
          <Route path="veiculos/editar_estoque/*" element={<EditarEstoque />} />
          <Route path="clientes/*" element={<Clientes />} />
          <Route path="estoque/*" element={<Estoque />} />
          <Route path="erro/*" element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;