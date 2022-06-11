const sum = (val1, val2) => console.log(`${val1} + ${val2} = ${val1 + val2}`)

const sub = (val1, val2) => console.log(`${val1} - ${val2} = ${val1 - val2}`)

const mul = (val1, val2) => console.log(`${val1} * ${val2} = ${val1 * val2}`)

const div = (val1, val2) => console.log(`${val1} / ${val2} = ${val1 / val2}`)

module.exports = {
  sum,
  sub,
  mul,
  div
}