const express = require('express');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/greet', (req, res) => {
  res.send('Hello from Node.js API!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
