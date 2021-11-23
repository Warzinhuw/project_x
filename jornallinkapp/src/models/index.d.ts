import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ServicoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type VeiculoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PecaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UsuarioMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Servico {
  readonly id: string;
  readonly pecas?: (string | null)[];
  readonly servico_realizado?: string;
  readonly data_registro?: string;
  readonly data_termino?: string;
  readonly custo?: number;
  readonly status?: number;
  readonly usuarioID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Servico, ServicoMetaData>);
  static copyOf(source: Servico, mutator: (draft: MutableModel<Servico, ServicoMetaData>) => MutableModel<Servico, ServicoMetaData> | void): Servico;
}

export declare class Veiculo {
  readonly id: string;
  readonly placa: string;
  readonly modelo: string;
  readonly usuarioID?: string;
  readonly dono: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Veiculo, VeiculoMetaData>);
  static copyOf(source: Veiculo, mutator: (draft: MutableModel<Veiculo, VeiculoMetaData>) => MutableModel<Veiculo, VeiculoMetaData> | void): Veiculo;
}

export declare class Peca {
  readonly id: string;
  readonly nome: string;
  readonly preco: number;
  readonly qtd?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Peca, PecaMetaData>);
  static copyOf(source: Peca, mutator: (draft: MutableModel<Peca, PecaMetaData>) => MutableModel<Peca, PecaMetaData> | void): Peca;
}

export declare class Usuario {
  readonly id: string;
  readonly nome: string;
  readonly email: string;
  readonly nascimento: string;
  readonly telefone: string;
  readonly tipo_usuario: boolean;
  readonly Veiculos?: (Veiculo | null)[];
  readonly Servicos?: (Servico | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Usuario, UsuarioMetaData>);
  static copyOf(source: Usuario, mutator: (draft: MutableModel<Usuario, UsuarioMetaData>) => MutableModel<Usuario, UsuarioMetaData> | void): Usuario;
}