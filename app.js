const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/api/greet', (req, res) => {
  res.send('Hello from Node.js API!');
});
