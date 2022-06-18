const fs = require('fs/promises');

function getSimpsons() {
  return fs.readFile('./simpsons.js', 'utf-8')
  .then((content) => JSON.parse(content));
}

function setSimpsons(newSimpsons) {
  return fs.writeFile('./simpsons.json', JSON.stringfy(newSimpsons));
}

module.exports = {
  getSimpsons,
  setSimpsons
}