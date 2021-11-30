/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServico = /* GraphQL */ `
  mutation CreateServico(
    $input: CreateServicoInput!
    $condition: ModelServicoConditionInput
  ) {
    createServico(input: $input, condition: $condition) {
      id
      servico_realizado
      data_termino
      data_inicio
      status
      custo
      placa
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateServico = /* GraphQL */ `
  mutation UpdateServico(
    $input: UpdateServicoInput!
    $condition: ModelServicoConditionInput
  ) {
    updateServico(input: $input, condition: $condition) {
      id
      servico_realizado
      data_termino
      data_inicio
      status
      custo
      placa
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteServico = /* GraphQL */ `
  mutation DeleteServico(
    $input: DeleteServicoInput!
    $condition: ModelServicoConditionInput
  ) {
    deleteServico(input: $input, condition: $condition) {
      id
      servico_realizado
      data_termino
      data_inicio
      status
      custo
      placa
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEstoque = /* GraphQL */ `
  mutation CreateEstoque(
    $input: CreateEstoqueInput!
    $condition: ModelEstoqueConditionInput
  ) {
    createEstoque(input: $input, condition: $condition) {
      id
      nome
      quantidade
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEstoque = /* GraphQL */ `
  mutation UpdateEstoque(
    $input: UpdateEstoqueInput!
    $condition: ModelEstoqueConditionInput
  ) {
    updateEstoque(input: $input, condition: $condition) {
      id
      nome
      quantidade
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEstoque = /* GraphQL */ `
  mutation DeleteEstoque(
    $input: DeleteEstoqueInput!
    $condition: ModelEstoqueConditionInput
  ) {
    deleteEstoque(input: $input, condition: $condition) {
      id
      nome
      quantidade
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCliente = /* GraphQL */ `
  mutation CreateCliente(
    $input: CreateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    createCliente(input: $input, condition: $condition) {
      id
      nome
      email
      endereco
      telefone
      data_nascimento
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
  }
`;
export const updateCliente = /* GraphQL */ `
  mutation UpdateCliente(
    $input: UpdateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    updateCliente(input: $input, condition: $condition) {
      id
      nome
      email
      endereco
      telefone
      data_nascimento
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
  }
`;
export const deleteCliente = /* GraphQL */ `
  mutation DeleteCliente(
    $input: DeleteClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    deleteCliente(input: $input, condition: $condition) {
      id
      nome
      email
      endereco
      telefone
      data_nascimento
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
  }
`;
export const createVeiculo = /* GraphQL */ `
  mutation CreateVeiculo(
    $input: CreateVeiculoInput!
    $condition: ModelVeiculoConditionInput
  ) {
    createVeiculo(input: $input, condition: $condition) {
      id
      placa
      modelo
      fabricante
      clienteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateVeiculo = /* GraphQL */ `
  mutation UpdateVeiculo(
    $input: UpdateVeiculoInput!
    $condition: ModelVeiculoConditionInput
  ) {
    updateVeiculo(input: $input, condition: $condition) {
      id
      placa
      modelo
      fabricante
      clienteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteVeiculo = /* GraphQL */ `
  mutation DeleteVeiculo(
    $input: DeleteVeiculoInput!
    $condition: ModelVeiculoConditionInput
  ) {
    deleteVeiculo(input: $input, condition: $condition) {
      id
      placa
      modelo
      fabricante
      clienteID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
