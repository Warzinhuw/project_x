// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Servico, Veiculo, Usuario, Peca } = initSchema(schema);

export {
  Servico,
  Veiculo,
  Usuario,
  Peca
};