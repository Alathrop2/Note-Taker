const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.get('/', (req, res) => res.send(''));

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
