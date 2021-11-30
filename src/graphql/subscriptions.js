/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateServico = /* GraphQL */ `
  subscription OnCreateServico {
    onCreateServico {
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
export const onUpdateServico = /* GraphQL */ `
  subscription OnUpdateServico {
    onUpdateServico {
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
export const onDeleteServico = /* GraphQL */ `
  subscription OnDeleteServico {
    onDeleteServico {
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
export const onCreateEstoque = /* GraphQL */ `
  subscription OnCreateEstoque {
    onCreateEstoque {
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
export const onUpdateEstoque = /* GraphQL */ `
  subscription OnUpdateEstoque {
    onUpdateEstoque {
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
export const onDeleteEstoque = /* GraphQL */ `
  subscription OnDeleteEstoque {
    onDeleteEstoque {
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
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente {
    onCreateCliente {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente {
    onUpdateCliente {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente {
    onDeleteCliente {
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
export const onCreateVeiculo = /* GraphQL */ `
  subscription OnCreateVeiculo {
    onCreateVeiculo {
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
export const onUpdateVeiculo = /* GraphQL */ `
  subscription OnUpdateVeiculo {
    onUpdateVeiculo {
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
export const onDeleteVeiculo = /* GraphQL */ `
  subscription OnDeleteVeiculo {
    onDeleteVeiculo {
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
