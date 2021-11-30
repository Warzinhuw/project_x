/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getEstoque = /* GraphQL */ `
  query GetEstoque($id: ID!) {
    getEstoque(id: $id) {
      id
      nome
      qtd
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listEstoques = /* GraphQL */ `
  query ListEstoques(
    $filter: ModelEstoqueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEstoques(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        qtd
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEstoques = /* GraphQL */ `
  query SyncEstoques(
    $filter: ModelEstoqueFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEstoques(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nome
        qtd
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getServico = /* GraphQL */ `
  query GetServico($id: ID!) {
    getServico(id: $id) {
      id
      placa
      servico_realizado
      data_termino
      custo
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listServicos = /* GraphQL */ `
  query ListServicos(
    $filter: ModelServicoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServicos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        placa
        servico_realizado
        data_termino
        custo
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncServicos = /* GraphQL */ `
  query SyncServicos(
    $filter: ModelServicoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncServicos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        placa
        servico_realizado
        data_termino
        custo
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getCliente = /* GraphQL */ `
  query GetCliente($id: ID!) {
    getCliente(id: $id) {
      id
      nome
      email
      endereco
      nascimento
      telefone
      Veiculos {
        items {
          id
          placa
          modelo
          fabricante
          clienteID
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          veiculoServicoId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listClientes = /* GraphQL */ `
  query ListClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        email
        endereco
        nascimento
        telefone
        Veiculos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncClientes = /* GraphQL */ `
  query SyncClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncClientes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nome
        email
        endereco
        nascimento
        telefone
        Veiculos {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVeiculo = /* GraphQL */ `
  query GetVeiculo($id: ID!) {
    getVeiculo(id: $id) {
      id
      placa
      modelo
      fabricante
      clienteID
      Servico {
        id
        placa
        servico_realizado
        data_termino
        custo
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      veiculoServicoId
    }
  }
`;
export const listVeiculos = /* GraphQL */ `
  query ListVeiculos(
    $filter: ModelVeiculoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVeiculos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        placa
        modelo
        fabricante
        clienteID
        Servico {
          id
          placa
          servico_realizado
          data_termino
          custo
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        veiculoServicoId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVeiculos = /* GraphQL */ `
  query SyncVeiculos(
    $filter: ModelVeiculoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVeiculos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        placa
        modelo
        fabricante
        clienteID
        Servico {
          id
          placa
          servico_realizado
          data_termino
          custo
          status
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        veiculoServicoId
      }
      nextToken
      startedAt
    }
  }
`;
