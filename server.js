'use strict';

const express = require('express');
const success = require('./routes/success.js')

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/layla', (req, res) => {
    res.send('Hello, Layla');
});

app.use('/success', success);

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});