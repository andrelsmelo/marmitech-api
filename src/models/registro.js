const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Cliente = require('./cliente');
const TipoMarmita = require('./tipoMarmita');

const Registro = db.define('registros', {
  clienteId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cliente,
      key: 'id'
    }
  },
  tipoMarmitaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: TipoMarmita,
      key: 'id'
    }
  }
});

async function criarRegistro(clienteId, tipoMarmitaId) {
  try {
    const cliente = await Cliente.getClienteById(clienteId);
    if (!cliente) {
      throw new Error('Cliente not found');
    }

    const tipoMarmita = await TipoMarmita.getTipoMarmitaById(tipoMarmitaId);
    if (!tipoMarmita) {
      throw new Error('Tipo de marmita not found');
    }

    const registro = await Registro.createRegistro(clienteId, tipoMarmitaId);
    return registro;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating registro:', error.message);
  }
}

async function obterRegistros() {
  try {
    const registros = await Registro.getAllRegistros();
    return registros;
  } catch (error) {
    throw new Error('Error retrieving registros:', error.message);
  }
}

async function obterRegistroPorId(id) {
  try {
    const registro = await Registro.getRegistroById(id);
    if (!registro) {
      throw new Error('Registro not found');
    }
    return registro;
  } catch (error) {
    throw new Error('Error retrieving registro by ID:', error.message);
  }
}

async function atualizarRegistro(id, clienteId, tipoMarmitaId) {
  try {
    const registro = await Registro.updateRegistroById(id, clienteId, tipoMarmitaId);
    if (!registro) {
      throw new Error('Registro not found');
    }
    return registro;
  } catch (error) {
    throw new Error('Error updating registro:', error.message);
  }
}

async function excluirRegistro(id) {
  try {
    const registro = await Registro.deleteRegistroById(id);
    if (!registro) {
      throw new Error('Registro not found');
    }
    return true;
  } catch (error) {
    throw new Error('Error deleting registro:', error.message);
  }
}

module.exports = {
  criarRegistro,
  obterRegistros,
  obterRegistroPorId,
  atualizarRegistro,
  excluirRegistro,
};
