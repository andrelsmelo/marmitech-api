const { DataTypes } = require('sequelize');
const db = require('../database/db');
const Registro = require('./registro')

const Cliente = db.define('clientes', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefone: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

async function createCliente(nome, telefone) {
  try {
    const cliente = await Cliente.create({ nome, telefone });
    return cliente;
  } catch (error) {
    console.error(error)
    throw new Error('Error creating cliente:', error.message);
  }
}

async function getAllClientes() {
  try {
    const clientes = await Cliente.findAll();
    return clientes;
  } catch (error) {
    throw new Error('Error retrieving clientes:', error.message);
  }
}

async function getClienteById(id) {
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    return cliente;
  } catch (error) {
    return { error: error.message }
  }
}

async function updateClienteById(id, nome, telefone) {
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    cliente.nome = nome;
    cliente.telefone = telefone;
    await cliente.save();
    return cliente;
  } catch (error) {
    throw new Error('Error updating cliente:', error.message);
  }
}

async function deleteClienteById(id) {
  try {
    const cliente = await Cliente.findByPk(id);
    if (!cliente) {
      throw new Error('Cliente not found');
    }
    await cliente.destroy();
  } catch (error) {
    throw new Error('Error deleting cliente:', error.message);
  }
}

module.exports = {
  Cliente,
  createCliente,
  getAllClientes,
  getClienteById,
  updateClienteById,
  deleteClienteById
};
