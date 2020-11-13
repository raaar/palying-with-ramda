const { reduceBy, props, pipe, map, project, flatten, sum } = require('ramda');

const cities = require('../data/cities.json');

function toGrade({ internetSpeed  }) {
  
  return  internetSpeed >= 40 ? 'A' : 
          internetSpeed >= 30 ? 'B' :
          internetSpeed >= 20 ? 'C' : 'D'
}

function groupFn(acc, { name }) {
  return acc.concat(name);
}

const gradedSpeed = reduceBy(
  groupFn,
  [],
  toGrade,
  cities
)

console.log(gradedSpeed);