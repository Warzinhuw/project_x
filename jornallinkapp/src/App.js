import React, { useState, useEffect } from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import awsconfig from './aws-exports'
import { API } from 'aws-amplify';
import { listUsuarios } from './graphql/queries';
import { createUsuario, deleteUsuario } from './graphql/mutations';

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

const initialFormState = { nome: '', email: '', telefone: "teste" , nascimento: "04/08/1997"}

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchUsuarios();
  }, []);

  async function fetchUsuarios() {
    const apiData = await API.graphql({ query: listUsuarios });
    setUsuarios(apiData.data.listUsuarios.items);
  }

  async function createUsuarioTeste() {
    if (!formData.nome || !formData.email) return;
    await API.graphql({ query: createUsuario, variables: { input: formData } });
    setUsuarios([ ...usuarios, formData ]);
    setFormData(initialFormState);
    console.log(usuarios);
  }

  async function deleUsuarioTeste({ id }) {
    const newUsuariosArray = usuarios.filter(usuario => usuario.id !== id);
    setUsuarios(newUsuariosArray);
    await API.graphql({ query: deleteUsuario, variables: { input: { id } }});
  }

  return (
    <div className="App">
      <h1>Teste usuarios</h1>
      <input
        onChange={e => setFormData({ ...formData, 'nome': e.target.value})}
        placeholder="Nome"
        value={formData.nome}
      />
      <input
        onChange={e => setFormData({ ...formData, 'email': e.target.value})}
        placeholder="Email"
        value={formData.email}
      />
      <button onClick={createUsuarioTeste}>Create usuário</button>
      <div style={{marginBottom: 30}}>
        {
          usuarios.map(usuario => (
            <div key={usuario.id || usuario.name}>
              <h2>{usuario.name}</h2>
              <p>{usuario.email}</p>
              <button onClick={() => deleUsuarioTeste(usuario)}>Delete usuario</button>
            </div>
          ))
        }
      </div>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);

