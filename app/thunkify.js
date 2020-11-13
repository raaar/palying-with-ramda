const R = require('ramda');

const thunk = R.thunkify((a, b) => a + b)(25, 17)

console.log(thunk()); //=> 42
