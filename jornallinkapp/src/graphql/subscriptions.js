/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServico = /* GraphQL */ `
  subscription OnCreateServico {
    onCreateServico {
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
export const onUpdateServico = /* GraphQL */ `
  subscription OnUpdateServico {
    onUpdateServico {
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
export const onDeleteServico = /* GraphQL */ `
  subscription OnDeleteServico {
    onDeleteServico {
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
export const onCreatePeca = /* GraphQL */ `
  subscription OnCreatePeca {
    onCreatePeca {
      id
      nome
      qtd
      preco
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePeca = /* GraphQL */ `
  subscription OnUpdatePeca {
    onUpdatePeca {
      id
      nome
      qtd
      preco
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePeca = /* GraphQL */ `
  subscription OnDeletePeca {
    onDeletePeca {
      id
      nome
      qtd
      preco
      createdAt
      updatedAt
    }
  }
`;
export const onCreateVeiculo = /* GraphQL */ `
  subscription OnCreateVeiculo {
    onCreateVeiculo {
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
export const onUpdateVeiculo = /* GraphQL */ `
  subscription OnUpdateVeiculo {
    onUpdateVeiculo {
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
export const onDeleteVeiculo = /* GraphQL */ `
  subscription OnDeleteVeiculo {
    onDeleteVeiculo {
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
export const onCreateUsuario = /* GraphQL */ `
  subscription OnCreateUsuario {
    onCreateUsuario {
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
export const onUpdateUsuario = /* GraphQL */ `
  subscription OnUpdateUsuario {
    onUpdateUsuario {
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
export const onDeleteUsuario = /* GraphQL */ `
  subscription OnDeleteUsuario {
    onDeleteUsuario {
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
