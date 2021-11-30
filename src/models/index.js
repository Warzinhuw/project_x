// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Servico, Estoque, Cliente, Veiculo } = initSchema(schema);

export {
  Servico,
  Estoque,
  Cliente,
  Veiculo
};