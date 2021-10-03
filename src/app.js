const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

app.use(morgan('dev'));

app.use(cors());

app.get('/status', (req, res) => {
  res.status(200).json({ status: 'ok', envs: process.env });
});

app.get('/favicon.ico', (req, res) => {
  res.sendStatus(204);
});

app.use('/api', routes);

app.all('*', (req, res) => {
  res.status(404).json({ message: 'route not found' });
});

// TODO: implement more generic error handler
app.use((err, req, res, next) => {
  res.status(400).json(...err);
});

module.exports = app;
