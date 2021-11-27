import './css/style.css'
import './css/animations.css'
import './css/internos.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Usuario } from './paginas/Usuario';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);


function App() {
  return (
    <>
      <Usuario />
    </>
  );
}

export default App;