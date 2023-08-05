const { TamanhoMarmita } = require('../models/tipoMarmita');

function validarDadosCliente(req, res, next) {
  const { nome, telefone } = req.body;

  if (!nome || !telefone) {
    return res.status(400).json({ error: 'Nome e telefone são obrigatórios.' });
  }

  next();
}

function validarDadosTipoMarmita(req, res, next) {
  const { tamanho, valor } = req.body;

  if (!tamanho || !valor) {
    return res.status(400).json({ error: 'Tamanho e valor são obrigatórios.' });
  }

  if (!Object.values(TamanhoMarmita).includes(tamanho)) {
    return res.status(400).json({ error: 'Tamanho de marmita inválido.' });
  }

  next();
}

function validarDadosRegistro(req, res, next) {
  const { idCliente, idTipoMarmita } = req.body;

  if (!idCliente || !idTipoMarmita) {
    return res.status(400).json({ error: 'ID do cliente e ID do tipo de marmita são obrigatórios.' });
  }

  next();
}

module.exports = {
  validarDadosCliente,
  validarDadosTipoMarmita,
  validarDadosRegistro,
};
