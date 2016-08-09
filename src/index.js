import uniqueRandomArray from 'unique-random-array';
import petNames from './pet-names.json';

var getRandomItem = uniqueRandomArray(petNames);

module.exports = {
  all: petNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
