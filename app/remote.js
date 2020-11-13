const table = require('text-table');
const R = require('ramda');
const percentile = require('../lib/percentile');

const cities = require('../data/cities.json');

const KtoC = (temp) => Math.round(temp - 273.15);

const manipulateCities = R.curry((fn, city) => {
  return R.merge(city, { temp: fn(city.temp)})
})

const groupedByPropReducer = (acc, city) => {
  const { cost = 0, internetSpeed = 0 } = city;

  return R.merge(acc, {
    cost: R.append(cost, acc.cost),
    internetSpeed: R.append(internetSpeed, acc.internetSpeed)
  })
}

const costObj = R.pipe(
  R.map(manipulateCities(KtoC)),
  R.reduce(groupedByPropReducer, {})
)(cities)


const calculateScore = (costWeight = 0, internetWeight) => {
  return function calculateScoreCity(city) {
    const { cost = 0, internetSpeed = 0 } = city;
    const costPercentile = percentile(costObj.cost, cost);
    const internetPercentile = percentile(costObj.internetSpeed, internetSpeed);
  
    const score = costWeight * (1.0 - costPercentile) + internetWeight + internetPercentile;

    return R.merge(city, {  score })
  }
}

const filterByWeather = (city) => {
  const { temp = 0, humidity = 0 } = city;

  return temp > 30 && humidity < 70
}

const cityToArray = (city) => {
  const { name, country, score, cost, temp, internetSpeed} = city;
  return [name, country, score, cost, temp, internetSpeed];
}

const interestingProps = ["Name", "Country", "Score", "Cost", "Temperature", "Internet"];
const cityScoring = calculateScore(100, 20);

const topCities = R.pipe(
  R.map(manipulateCities(KtoC)),
  R.map(cityScoring),
  R.filter(filterByWeather),
  R.sortWith([R.descend(city => city.score)]),
  R.take(3),
  R.map(cityToArray),
  R.prepend(interestingProps),
  table
)(cities)


console.log("TOP", topCities);

const f = R.cond([
  [R.equals('Raf'), R.always('Hello Raf') ],
  [R.equals('Jane'), R.always('Hello Jane') ],
  [R.T, R.always("Unknown pearson")] 
])

console.log(f());