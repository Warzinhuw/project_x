/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateEstoque = /* GraphQL */ `
  subscription OnCreateEstoque {
    onCreateEstoque {
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
export const onUpdateEstoque = /* GraphQL */ `
  subscription OnUpdateEstoque {
    onUpdateEstoque {
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
export const onDeleteEstoque = /* GraphQL */ `
  subscription OnDeleteEstoque {
    onDeleteEstoque {
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
export const onCreateServico = /* GraphQL */ `
  subscription OnCreateServico {
    onCreateServico {
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
export const onUpdateServico = /* GraphQL */ `
  subscription OnUpdateServico {
    onUpdateServico {
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
export const onDeleteServico = /* GraphQL */ `
  subscription OnDeleteServico {
    onDeleteServico {
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
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente {
    onCreateCliente {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente {
    onUpdateCliente {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente {
    onDeleteCliente {
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
export const onCreateVeiculo = /* GraphQL */ `
  subscription OnCreateVeiculo {
    onCreateVeiculo {
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
export const onUpdateVeiculo = /* GraphQL */ `
  subscription OnUpdateVeiculo {
    onUpdateVeiculo {
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
export const onDeleteVeiculo = /* GraphQL */ `
  subscription OnDeleteVeiculo {
    onDeleteVeiculo {
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
