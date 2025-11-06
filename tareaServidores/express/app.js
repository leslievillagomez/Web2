//Servidor Express

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Holam soy el texto plano del servidor Express');
});
const port = 3006;

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`) ;
}); 