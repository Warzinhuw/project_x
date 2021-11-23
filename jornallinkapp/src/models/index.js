// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Servico, Veiculo, Peca, Usuario } = initSchema(schema);

export {
  Servico,
  Veiculo,
  Peca,
  Usuario
};