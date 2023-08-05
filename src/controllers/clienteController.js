const Cliente = require('../models/cliente');

async function criarCliente(nome, telefone) {
  return await Cliente.createCliente(nome, telefone);
}

async function obterClientes() {
  return await Cliente.getAllClientes();
}

async function obterClientePorId(id) {
  return await Cliente.getClienteById(id);
}

async function atualizarCliente(id, nome, telefone) {
  return await Cliente.updateClienteById(id, nome, telefone);
}

async function excluirCliente(id) {
  return await Cliente.deleteClienteById(id);
}

module.exports = {
  criarCliente,
  obterClientes,
  obterClientePorId,
  atualizarCliente,
  excluirCliente,
};
