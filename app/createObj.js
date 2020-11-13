const R = require('ramda');
const { pipe, map } = require('ramda');

const cities = require('../data/cities.json');

const createObj = pipe(
  R.dissoc('cost'),
  R.dissoc('temp'),
  R.dissoc('humidity'),
  R.dissoc('internetSpeed')
)


const cityArr = map(createObj)(cities) ;



console.log(cityArr);