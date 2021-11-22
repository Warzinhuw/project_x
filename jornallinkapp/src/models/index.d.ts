import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ServicoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VeiculoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsuarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PecaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Servico {
  readonly id: string;
  readonly pecas?: string[];
  readonly tipo_servico: string;
  readonly veiculo: Veiculo;
  readonly preco: number;
  readonly cliente: Usuario;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Servico, ServicoMetaData>);
  static copyOf(source: Servico, mutator: (draft: MutableModel<Servico, ServicoMetaData>) => MutableModel<Servico, ServicoMetaData> | void): Servico;
}

export declare class Veiculo {
  readonly id: string;
  readonly placa: string;
  readonly modelo: string;
  readonly fabricante: string;
  readonly dono: string;
  readonly usuarioID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Veiculo, VeiculoMetaData>);
  static copyOf(source: Veiculo, mutator: (draft: MutableModel<Veiculo, VeiculoMetaData>) => MutableModel<Veiculo, VeiculoMetaData> | void): Veiculo;
}

export declare class Usuario {
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly telefone: string;
  readonly endereco?: string;
  readonly nascimento: string;
  readonly Veiculos?: (Veiculo | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Usuario, UsuarioMetaData>);
  static copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario, UsuarioMetaData>) => MutableModel<Usuario, UsuarioMetaData> | void): Usuario;
}

export declare class Peca {
  readonly id: string;
  readonly nome: string;
  readonly qtd: number;
  readonly preco: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Peca, PecaMetaData>);
  static copyOf(source: Peca, mutator: (draft: MutableModel<Peca, PecaMetaData>) => MutableModel<Peca, PecaMetaData> | void): Peca;
}