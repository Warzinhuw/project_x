import React from 'react';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import Amplify from '@aws-amplify/core'
import { Auth } from '@aws-amplify/auth'
import awsconfig from './aws-exports'
import  { Redirect } from 'react-router-dom'

Amplify.configure(awsconfig)
Auth.configure(awsconfig)

function App() {
  return (
    document.location.href = "../paginas/usuarios.html"
  );
}

export default withAuthenticator(App);

