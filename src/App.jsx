import './css/style.css'
import './css/animations.css'
import './css/internos.css'
import '@aws-amplify/ui/dist/style.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Usuario } from './pages/Usuario';
import { Veiculos } from './pages/Veiculos';
import { Servicos } from './pages/Servicos';
import Clientes from './pages/Clientes';
import Estoque from './pages/Estoque';
import Erro from './pages/Erro';

import { AddVeiculo } from './pages/Veiculos/AddVeiculo';
import { EditarVeiculo } from './pages/Veiculos/EditarVeiculo';
import { AddServico } from './pages/Servicos/AddServico';
import { EditarServico } from './pages/Servicos/EditarServico';
import { AddEstoque } from './pages/Estoque/AddEstoque';
import { EditarEstoque } from './pages/Estoque/EditarEstoque';

import { withAuthenticator } from '@aws-amplify/ui-react';

import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Usuario />} />
          <Route path="veiculos/*" element={<Veiculos />} />
          <Route path="clientes/*" element={<Clientes />} />
          <Route path="estoque/*" element={<Estoque />} />
          <Route path="servicos/*" element={<Servicos />} />
          <Route path="erro/*" element={<Erro />} />

          <Route path="veiculos/add_veiculo/*" element={<AddVeiculo />} />
          <Route path="veiculos/editar_veiculo/*" element={<EditarVeiculo />} />
          <Route path="servicos/add_servico/*" element={<AddServico />} />
          <Route path="servicos/editar_servico/*" element={<EditarServico />} />
          <Route path="estoque/add_estoque/*" element={<AddEstoque />} />
          <Route path="estoque/editar_estoque/*" element={<EditarEstoque />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default withAuthenticator(App);