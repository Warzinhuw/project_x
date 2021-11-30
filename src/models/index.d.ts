import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ServicoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EstoqueMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ClienteMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VeiculoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Servico {
  readonly id: string;
  readonly servico_realizado?: string;
  readonly data_termino?: string;
  readonly data_inicio?: string;
  readonly status?: number;
  readonly custo?: number;
  readonly placa?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Servico, ServicoMetaData>);
  static copyOf(source: Servico, mutator: (draft: MutableModel<Servico, ServicoMetaData>) => MutableModel<Servico, ServicoMetaData> | void): Servico;
}

export declare class Estoque {
  readonly id: string;
  readonly nome?: string;
  readonly quantidade?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Estoque, EstoqueMetaData>);
  static copyOf(source: Estoque, mutator: (draft: MutableModel<Estoque, EstoqueMetaData>) => MutableModel<Estoque, EstoqueMetaData> | void): Estoque;
}

export declare class Cliente {
  readonly id: string;
  readonly nome?: string;
  readonly email?: string;
  readonly endereco?: string;
  readonly telefone?: string;
  readonly data_nascimento?: string;
  readonly Veiculos?: (Veiculo | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Cliente, ClienteMetaData>);
  static copyOf(source: Cliente, mutator: (draft: MutableModel<Cliente, ClienteMetaData>) => MutableModel<Cliente, ClienteMetaData> | void): Cliente;
}

export declare class Veiculo {
  readonly id: string;
  readonly placa?: string;
  readonly modelo?: string;
  readonly fabricante?: string;
  readonly clienteID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Veiculo, VeiculoMetaData>);
  static copyOf(source: Veiculo, mutator: (draft: MutableModel<Veiculo, VeiculoMetaData>) => MutableModel<Veiculo, VeiculoMetaData> | void): Veiculo;
}