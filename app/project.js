const { props, pipe, map, project, flatten, sum } = require('ramda');

const cities = require('../data/cities.json');

const simpleCities = project(['name', 'currency'])(cities);
console.log(simpleCities);


const totalInternetSpeeds = pipe(
  map(props(['internetSpeed'])),
  sum
)(cities)

console.log( totalInternetSpeeds);




