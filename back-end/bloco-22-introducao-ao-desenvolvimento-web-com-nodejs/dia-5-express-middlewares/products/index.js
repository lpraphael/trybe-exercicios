const express = require('express');
const rescue = require('express-rescue');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json());

app.post('/sales', (req, res, next) => {
  
})