// https://dev.to/devinholloway/functional-lenses-in-javascript-with-ramda-4li7

const { compose, set, view, lensProp, lensPath, pipe, lensIndex } = require('ramda');

const user = require('../data/user.json');

const firstNameLens = lensPath(['name', 'first']);
const lastNameLens = lensPath(['name', 'last']);

const workPhones = lensPath(['phones', 'work']);
const primaryWorkPhone = lensIndex(0)
const phoneNumberLens = lensProp('number');

const workPhoneLens = compose(
  workPhones,
  primaryWorkPhone,
  phoneNumberLens
)

const myWorkNumber = view(workPhoneLens, user)

function setName(first = '', last = '') {
  return pipe(
    set(firstNameLens, first),
    set(lastNameLens, last)
  );
}

const updatedUser = setName('Tom', "Gooog")(user);

console.log("Compose lens", myWorkNumber);
console.log("Updated user", updatedUser);