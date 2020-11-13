const { pipe, map, evolve, toUpper, propOr, defaultTo } = require('ramda')
const data = require('../data/names');

const validateUser = {
  name: pipe(
    toUpper
  ),
  age: Number
}

const usrs = map(evolve(validateUser))(data);

console.log(usrs)
