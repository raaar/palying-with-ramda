const R = require('ramda');
const fs = require('fs');

const readF = path => fs.readFileSync(path, { encoding: 'utf-8'});

R.pipe(
    R.map(readF),
    R.map(R.replace(/Oct/g, "BREAK_HEREOct")),
    R.map(R.split('BREAK_HERE')),
    R.map(R.map(R.split('\n'))),
    R.map(R.drop(1)),
    R.map(R.map(R.dropLast(1))),
    R.map(R.map(R.take(2))),

    console.log
)([
  'data/bitcoin.csv', 
  'data/etherium.csv'
]);

// console.log("Foo", foo.length.length)