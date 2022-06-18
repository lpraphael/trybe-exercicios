const express = require('express');
const bodyParser = require('body-parser');
const { getSimpsons, setSimpsons } = require('./fs-utils');


const app = express();
app.use(bodyParser.json())

app.get('/ping', handlePongRequest);

app.get('/simpsons', async (_req, res) => {
  try {
    const simpsons = await getSimpsons();
    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end()
  }
})

app.post('/simpsons', async (req, res) => {
  try{
    const { id, name } = req.body;

    const simpsons = await simpsons();

    if(simpsons.some((char) => char.id === id)) {
      return res.status(409).json({message: 'id already exists'})
    }

    simpsons.push({ id, name });

    await setSimpsons(simpsons);

    return res.status(204).end();
  } catch (error) {
    return res.status(500).end();
  }
})

app.get('/simpsons/:id', async (req, res) => {
  try {
    const simpsons = await getSimpsons();
    
    const simpson = simpsons.find((e) => e.id === req.params.id);
    
    if(!simpson) {
      return res.status(404).json({message: 'simpson not found'});
    }
    
    return res.status(202).json(simpson);
  } catch (err) {
    return res.status(500).end();
  }
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