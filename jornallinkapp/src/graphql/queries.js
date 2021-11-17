/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsuario = /* GraphQL */ `
  query GetUsuario($id: ID!) {
    getUsuario(id: $id) {
      id
      nome
      email
      endereco
      nascimento
      telefone
      createdAt
      updatedAt
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
        endereco
        nascimento
        telefone
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
