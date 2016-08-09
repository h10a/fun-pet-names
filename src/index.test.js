import {expect} from 'chai';
import petNames from './index';

describe('pet-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(petNames.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `Luke Skywalker`', function() {
      expect(petNames.all).to.include('Luke Skywalker');
    });
  });

  describe('random', function() {
    it('should return a random item from the petNames.all', function() {
      var randomItem = petNames.random();
      expect(petNames.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = petNames.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(petNames.all).to.include(item);
      });
    });
  });
});
