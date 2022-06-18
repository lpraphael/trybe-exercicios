const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json())

app.get('/ping', handlePongRequest);

app.get('/simpsons', (req, res) => {
  
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({message: `Hello, ${name}!`});
});

app.post('greetings', (req, res) => {
  const { name, age } = req.body;

  if(age <= 17) {
    return res.status(401).json({message: 'Unauthorized'})
  }
  
  return res.status(200).json({message: `Hello ${name}!`});
});

app.put('/user/:name/:age', (req, res) => {
  const { name, age } = req.params;

  return res.status(200)
  .json({message: `seu nome é ${name} e você tem ${age} anos de idade`});
});

app.listen(3002, () => {
  console.log('aplicação rodando na portao 3002')
})

function handlePongRequest(_req, res) {
  res.status(200).json({message: 'pong'})
}