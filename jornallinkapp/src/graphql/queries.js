/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServico = /* GraphQL */ `
  query GetServico($id: ID!) {
    getServico(id: $id) {
      id
      pecas
      tipo_servico
      preco
      createdAt
      updatedAt
      veiculo {
        id
        placa
        modelo
        fabricante
        dono
        usuarioID
        createdAt
        updatedAt
      }
      cliente {
        id
        nome
        email
        telefone
        endereco
        nascimento
        createdAt
        updatedAt
        Veiculos {
          nextToken
        }
      }
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
        pecas
        tipo_servico
        preco
        createdAt
        updatedAt
        veiculo {
          id
          placa
          modelo
          fabricante
          dono
          usuarioID
          createdAt
          updatedAt
        }
        cliente {
          id
          nome
          email
          telefone
          endereco
          nascimento
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getPeca = /* GraphQL */ `
  query GetPeca($id: ID!) {
    getPeca(id: $id) {
      id
      nome
      qtd
      preco
      createdAt
      updatedAt
    }
  }
`;
export const listPecas = /* GraphQL */ `
  query ListPecas(
    $filter: ModelPecaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPecas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        qtd
        preco
        createdAt
        updatedAt
      }
      nextToken
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
      dono
      usuarioID
      createdAt
      updatedAt
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
        dono
        usuarioID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsuario = /* GraphQL */ `
  query GetUsuario($id: ID!) {
    getUsuario(id: $id) {
      id
      nome
      email
      telefone
      endereco
      nascimento
      createdAt
      updatedAt
      Veiculos {
        items {
          id
          placa
          modelo
          fabricante
          dono
          usuarioID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listUsuarios = /* GraphQL */ `
  query ListUsuarios(
    $filter: ModelUsuarioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsuarios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nome
        email
        telefone
        endereco
        nascimento
        createdAt
        updatedAt
        Veiculos {
          nextToken
        }
      }
      nextToken
    }
  }
`;
