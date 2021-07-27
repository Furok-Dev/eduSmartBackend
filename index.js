const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello word');
});

app.listen(3000, () => {
  console.log('todo corriendo');
});
// contraseña mongodb: xkUd2TtnHk4bKZdc
