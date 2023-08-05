const TipoMarmita = require('../models/tipoMarmita');

async function criarTipoMarmita(tamanho, valor) {
  return await TipoMarmita.createTipoMarmita(tamanho, valor);
}

async function obterTiposMarmita() {
  return await TipoMarmita.getAllTipoMarmitas();
}

async function obterTipoMarmitaPorId(id) {
  return await TipoMarmita.getTipoMarmitaById(id);
}

async function atualizarTipoMarmita(id, tamanho, valor) {
  return await TipoMarmita.updateTipoMarmitaById(id, tamanho, valor);
}

async function excluirTipoMarmita(id) {
  return await TipoMarmita.deleteTipoMarmitaById(id);
}

module.exports = {
  criarTipoMarmita,
  obterTiposMarmita,
  obterTipoMarmitaPorId,
  atualizarTipoMarmita,
  excluirTipoMarmita
};
