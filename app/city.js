const R = require('ramda');
const { pipe, map } = require('ramda');

const cities = require('../data/cities.json');

// Predicate Fn
const propsOverValue = R.curry((prop, value) => R.pipe(
  R.prop(prop),
  (h) => h > value  
));

const getWorstCities = R.allPass([
    propsOverValue('humidity', 60),
    propsOverValue('temp', 304)
]);

const setScore = (s) => {
  const { humidity = 0, cost = 0 } = s;

  const score = R.add(humidity, cost);
  const obj = { score }
  
  return R.merge(s, obj );
}

const setIsTerrible = R.ifElse(
  pipe(
    R.prop('score'),
    (v) => v > 3000
  ),
  R.merge({ isTerrible: true }),
  R.identity
)

const scoreCity = pipe(
  setScore,
  setIsTerrible,
  R.pick(['isTerrible', 'score', 'name', 'region'])
)

const worstCities = pipe(
  R.filter(getWorstCities),
  map(scoreCity)
)(cities);

console.log(worstCities);

