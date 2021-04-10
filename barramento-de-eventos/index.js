const express = require ('express');
const axios = require ('axios');

const app = express();
app.use(express.json());

const eventos = []

app.post ('/eventos', (req, res) => {
  const evento = req.body;
  //console.log(evento);
  eventos.push(evento);
  //envia o evento para o microsserviço de lembretes
  axios.post('http://192.168.1.161:4000/eventos', evento);
  //envia o evento para o microsserviço de observações
  axios.post('http://192.168.1.161:5000/eventos', evento);
  //envia o evento para o microsserviço de consulta
  axios.post('http://192.168.1.161:6000/eventos', evento);
  //envia o evento para o microsserviço de Classificação
  axios.post('http://192.168.1.161:7000/eventos', evento);
  res.status(200).send({msg: 'ok'});
});

app.get('/eventos', (req, res) => {
  res.send(eventos);
})

app.listen(10000, () => console.log('Microsserviço Event Bus. Porta 10000.'))