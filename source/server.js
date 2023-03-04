'use strict';

const express = require('express');
const success = require('./routes/success.js')
const clientError = require('./routes/client_error.js')

// Constants
const PORT = process.env.port || 8080;
const HOST = process.env.hostname || '0.0.0.0';

// console.log(process.env.hostnam);

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/layla', (req, res) => {
    res.send('Hello, Layla');
});

app.use('/success', success);
app.use('/clientError', clientError);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});