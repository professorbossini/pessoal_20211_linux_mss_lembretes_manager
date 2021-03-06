const express = require ('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const lembretes = {};
contador = 0;

app.get('/lembretes', (req, res) => {
  //res.status(200).send({"resultado": "OK"});
  res.send(lembretes);
});

app.put ('/lembretes', (req, res) => {
  //{texto: "Fazer cafe"}
  const { texto }  = req.body;
  contador++;
  /*
    {
      1: {
        contador: 1, texto: Fazer cafe,
      }
      2: {
        contador: 2, texto, ver um filme
      }
    }
  */
  lembretes[contador] = {
    contador, texto
  }
  res.status(201).send(lembretes[contador]);
});

app.listen(4000, () => {
  console.log("Microsserviço de lembretes executando na porta 4000.")
});