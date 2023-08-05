const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Registro = require('./registro')

const TipoMarmita = db.define('tipoMarmitas', {
  tamanho: {
    type: DataTypes.ENUM('P', 'M', 'G'),
    allowNull: false
  },
  valor: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  }
});

async function createTipoMarmita(tamanho, valor) {
  try {
    const tipoMarmita = await TipoMarmita.create({ tamanho, valor });
    return tipoMarmita;
  } catch (error) {
    console.error(error);
    throw new Error('Error creating tipo de marmita:', error.message);
  }
}

async function getAllTipoMarmitas() {
  try {
    const tiposMarmita = await TipoMarmita.findAll();
    return tiposMarmita;
  } catch (error) {
    throw new Error('Error retrieving tipos de marmita:', error.message);
  }
}

async function getTipoMarmitaById(id) {
  try {
    const tipoMarmita = await TipoMarmita.findByPk(id);
    if (!tipoMarmita) {
      throw new Error('Tipo de marmita not found');
    }
    return tipoMarmita;
  } catch (error) {
    throw new Error('Error retrieving tipo de marmita by ID:', error.message);
  }
}

async function updateTipoMarmitaById(id, tamanho, valor) {
  try {
    const tipoMarmita = await TipoMarmita.findByPk(id);
    if (!tipoMarmita) {
      throw new Error('Tipo de marmita not found');
    }

    tipoMarmita.tamanho = tamanho;
    tipoMarmita.valor = valor;
    await tipoMarmita.save();
    return tipoMarmita;
  } catch (error) {
    throw new Error('Error updating tipo de marmita:', error.message);
  }
}

async function deleteTipoMarmitaById(id) {
  try {
    const tipoMarmita = await TipoMarmita.findByPk(id);
    if (!tipoMarmita) {
      throw new Error('Tipo de marmita not found');
    }
    await tipoMarmita.destroy();
  } catch (error) {
    throw new Error('Error deleting tipo de marmita:', error.message);
  }
}

module.exports = {
  TipoMarmita,
  createTipoMarmita,
  getAllTipoMarmitas,
  getTipoMarmitaById,
  updateTipoMarmitaById,
  deleteTipoMarmitaById
};
