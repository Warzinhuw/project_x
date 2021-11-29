// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Estoque, Servico, Cliente, Veiculo, Note } = initSchema(schema);

export {
  Estoque,
  Servico,
  Cliente,
  Veiculo,
  Note
};