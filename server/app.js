require('dotenv').config();
const bodyParser = require('body-parser');
const compression = require('compression');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
app.use(cors());

app.use(compression());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api', require('./routes/auth'));
app.use('/api', require('./routes/lists'));
app.use('/api', require('./routes/bookmarks'));

app.use(express.static(path.resolve(__dirname, '..', 'build')));

app.get('*', (req, res) => {
  console.log('hello from *')
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

// eslint-disable-next-line
app.use((err, _req, res, _next) => {
  if (err.status) {
    return res.status(err.status).send(err);
  }

  if (err.output && err.output.statusCode) {
    return res
      .status(err.output.statusCode)
      .set('Content-Type', 'text/plain')
      .send(err.message);
  }

  //eslint-disable-next-line
  console.error(err.stack);
  res.sendStatus(500);
});

module.exports = app;
