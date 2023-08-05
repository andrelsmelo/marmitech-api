const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const {
  validarDadosCliente,
  validarDadosTipoMarmita,
  validarDadosRegistro,
} = require('./middlewares/validations');

const clienteController = require('./controllers/clienteController');
const tipoMarmitaController = require('./controllers/tipoMarmitaController');
const registroController = require('./controllers/registroController');

app.use(bodyParser.json());

app.post('/clientes', validarDadosCliente, (req, res) => {
  const { nome, telefone } = req.body;
  const novoCliente = clienteController.criarCliente(nome, telefone);
  res.json(novoCliente);
});

app.get('/clientes', async (req, res) => {
  const todosClientes = await clienteController.obterClientes();
  res.json(todosClientes);
});

app.get('/clientes/:id', async (req, res) => {
  const { id } = req.params;
  const clientePorId = await clienteController.obterClientePorId(id);
  if (!clientePorId) {
    return res.status(404).json({ error: 'Cliente não encontrado.' });
  }
  res.json(clientePorId);
});

app.put('/clientes/:id', validarDadosCliente, (req, res) => {
  const { id } = req.params;
  const { nome, telefone } = req.body;
  const clienteAtualizado = clienteController.atualizarCliente(id, nome, telefone);
  if (!clienteAtualizado) {
    return res.status(404).json({ error: 'Cliente não encontrado.' });
  }
  res.json(clienteAtualizado);
});

app.delete('/clientes/:id', (req, res) => {
  const { id } = req.params;
  const clienteExcluido = clienteController.excluirCliente(id);
  if (!clienteExcluido) {
    return res.status(404).json({ error: 'Cliente não encontrado.' });
  }
  res.json({ message: 'Cliente excluído com sucesso.' });
});

app.post('/tipos-marmita', validarDadosTipoMarmita, (req, res) => {
  const { tamanho, valor } = req.body;
  const novoTipoMarmita = tipoMarmitaController.criarTipoMarmita(tamanho, valor);
  res.json(novoTipoMarmita);
});

app.get('/tipos-marmita', (req, res) => {
  const todosTiposMarmita = tipoMarmitaController.obterTiposMarmita();
  res.json(todosTiposMarmita);
});

app.get('/tipos-marmita/:id', (req, res) => {
  const { id } = req.params;
  const tipoMarmitaPorId = tipoMarmitaController.obterTipoMarmitaPorId(id);
  if (!tipoMarmitaPorId) {
    return res.status(404).json({ error: 'Tipo de marmita não encontrado.' });
  }
  res.json(tipoMarmitaPorId);
});

app.put('/tipos-marmita/:id', validarDadosTipoMarmita, (req, res) => {
  const { id } = req.params;
  const { tamanho, valor } = req.body;
  const tipoMarmitaAtualizado = tipoMarmitaController.atualizarTipoMarmita(id, tamanho, valor);
  if (!tipoMarmitaAtualizado) {
    return res.status(404).json({ error: 'Tipo de marmita não encontrado.' });
  }
  res.json(tipoMarmitaAtualizado);
});

app.delete('/tipos-marmita/:id', (req, res) => {
  const { id } = req.params;
  const tipoMarmitaExcluido = tipoMarmitaController.excluirTipoMarmita(id);
  if (!tipoMarmitaExcluido) {
    return res.status(404).json({ error: 'Tipo de marmita não encontrado.' });
  }
  res.json({ message: 'Tipo de marmita excluído com sucesso.' });
});

app.post('/registros', validarDadosRegistro, (req, res) => {
  const { idCliente, idTipoMarmita } = req.body;
  const novoRegistro = registroController.criarRegistro(idCliente, idTipoMarmita);
  if (!novoRegistro) {
    return res.status(404).json({ error: 'Cliente ou tipo de marmita não encontrado.' });
  }
  res.json(novoRegistro);
});

app.get('/registros', (req, res) => {
  const todosRegistros = registroController.obterRegistros();
  res.json(todosRegistros);
});

app.get('/registros/:id', (req, res) => {
  const { id } = req.params;
  const registroPorId = registroController.obterRegistroPorId(id);
  if (!registroPorId) {
    return res.status(404).json({ error: 'Registro não encontrado.' });
  }
  res.json(registroPorId);
});

app.put('/registros/:id', validarDadosRegistro, (req, res) => {
  const { id } = req.params;
  const { idCliente, idTipoMarmita } = req.body;
  const registroAtualizado = registroController.atualizarRegistro(id, idCliente, idTipoMarmita);
  if (!registroAtualizado) {
    return res.status(404).json({ error: 'Registro não encontrado.' });
  }
  res.json(registroAtualizado);
});

app.delete('/registros/:id', (req, res) => {
  const { id } = req.params;
  const registroExcluido = registroController.excluirRegistro(id);
  if (!registroExcluido) {
    return res.status(404).json({ error: 'Registro não encontrado.' });
  }
  res.json({ message: 'Registro excluído com sucesso.' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada.' });
});

module.exports = {app, port}
