const { 
  __,
  pipe, 
  when, 
  propSatisfies, 
  append, 
  join, 
  gt,
  take,
  curry
 } = require('ramda');

const truncate = curry((n) => 
  when(
    propSatisfies(gt(__, n), 'length'),
    pipe(take(n), append('…'), join(''))
 )
)

const truncateName = truncate(4)('Jennifer');

console.log(truncateName);