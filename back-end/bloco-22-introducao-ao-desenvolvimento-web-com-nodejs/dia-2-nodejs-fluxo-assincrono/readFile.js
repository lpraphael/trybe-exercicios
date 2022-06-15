const { stringify } = require('querystring');

const fs = require('fs').promises;

const simpsons = './simpsons.json';

function readAll() {
  fs.readFile(simpsons, 'utf8')
  .then((data) => {
    const content = JSON.parse(data);
    const values = content.map(({ id, name }) => `${id} - ${name}` )
    values.forEach((value) => {console.log(value)});
  })
  .catch((err) => console.log(`não foi possível ler o arquivo, erro: ${err.message}`))
}

async function searchById(id) {
  const content = await fs.readFile(simpsons, 'utf8')
  const data = JSON.parse(content);
  const idInfo = data.find((e) => Number(e.id) === id)
  if(!idInfo) {
    throw new Error(`id não encontrado`)
  }
  return idInfo
}

async function filteredSimpsons() {
  const content = await fs.readFile(simpsons, 'utf8');
  const data = JSON.parse(content);
  const newData = data.filter((e) => e.id !== '6' && e.id !== '10')
  await fs.writeFile(simpsons, JSON.stringify(newData))
}

async function filteredFamily() {
  const content = await fs.readFile(simpsons, 'utf8');
  const data = JSON.parse(content);
  const familyIds = [1, 2, 3, 4];
  const newData = data.filter((e) => familyIds.includes(Number(e.id)))
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(newData))
}

async function addToFamily() {
  const content = await fs.readFile('./simpsonsFamily.json', 'utf8');
  const data = JSON.parse(content);
  data.push({id: '8', name:'Nelson Muntz'})
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(data))
}

function main () {
  addToFamily()
  // filteredFamily();
  // searchById(1).then((simpson) => console.log(simpson));;
  // readAll()
}

main();
