const Registro = require('../models/registro');

async function criarRegistro(clienteId, tipoMarmitaId) {
  return Registro.createRegistro(clienteId, tipoMarmitaId);
}

async function obterRegistros() {
  return Registro.getAllRegistros();
}

async function obterRegistroPorId(id) {
  return Registro.getRegistroById(id);
}

async function atualizarRegistro(id, clienteId, tipoMarmitaId) {
  return Registro.updateRegistroById(id, clienteId, tipoMarmitaId);
}

async function excluirRegistro(id) {
  return Registro.deleteRegistroById(id);
}

module.exports = {
  criarRegistro,
  obterRegistros,
  obterRegistroPorId,
  atualizarRegistro,
  excluirRegistro,
};