/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createServico = /* GraphQL */ `
  mutation CreateServico(
    $input: CreateServicoInput!
    $condition: ModelServicoConditionInput
  ) {
    createServico(input: $input, condition: $condition) {
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
export const updateServico = /* GraphQL */ `
  mutation UpdateServico(
    $input: UpdateServicoInput!
    $condition: ModelServicoConditionInput
  ) {
    updateServico(input: $input, condition: $condition) {
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
export const deleteServico = /* GraphQL */ `
  mutation DeleteServico(
    $input: DeleteServicoInput!
    $condition: ModelServicoConditionInput
  ) {
    deleteServico(input: $input, condition: $condition) {
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
export const createPeca = /* GraphQL */ `
  mutation CreatePeca(
    $input: CreatePecaInput!
    $condition: ModelPecaConditionInput
  ) {
    createPeca(input: $input, condition: $condition) {
      id
      nome
      qtd
      preco
      createdAt
      updatedAt
    }
  }
`;
export const updatePeca = /* GraphQL */ `
  mutation UpdatePeca(
    $input: UpdatePecaInput!
    $condition: ModelPecaConditionInput
  ) {
    updatePeca(input: $input, condition: $condition) {
      id
      nome
      qtd
      preco
      createdAt
      updatedAt
    }
  }
`;
export const deletePeca = /* GraphQL */ `
  mutation DeletePeca(
    $input: DeletePecaInput!
    $condition: ModelPecaConditionInput
  ) {
    deletePeca(input: $input, condition: $condition) {
      id
      nome
      qtd
      preco
      createdAt
      updatedAt
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
      dono
      usuarioID
      createdAt
      updatedAt
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
      dono
      usuarioID
      createdAt
      updatedAt
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
      dono
      usuarioID
      createdAt
      updatedAt
    }
  }
`;
export const createUsuario = /* GraphQL */ `
  mutation CreateUsuario(
    $input: CreateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    createUsuario(input: $input, condition: $condition) {
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
export const updateUsuario = /* GraphQL */ `
  mutation UpdateUsuario(
    $input: UpdateUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    updateUsuario(input: $input, condition: $condition) {
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
export const deleteUsuario = /* GraphQL */ `
  mutation DeleteUsuario(
    $input: DeleteUsuarioInput!
    $condition: ModelUsuarioConditionInput
  ) {
    deleteUsuario(input: $input, condition: $condition) {
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
