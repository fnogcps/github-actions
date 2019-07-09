var chai = require('chai');
var assert = chai.assert;

const e = require('./solution.js');

describe('Extract City Facts (unit tests)\n', () => {
  it('[Test 1] Expected: "Manila has a population of 1,780,148 and is situated in Asia"', () =>
    assert.strictEqual(
      e.cityFacts({name: 'Manila', population: '1,780,148', continent: 'Asia'}),
      'Manila has a population of 1,780,148 and is situated in Asia',
    ));
  it('[Test 2] Expected: "Melbourne has a population of 4,936,349 and is situated in Australia"', () =>
    assert.strictEqual(
      e.cityFacts({
        name: 'Melbourne',
        population: '4,936,349',
        continent: 'Australia',
      }),
      'Melbourne has a population of 4,936,349 and is situated in Australia',
    ));
  it('[Test 3] Expected: "Kampala has a population of 1,507,080 and is situated in Africa"', () =>
    assert.strictEqual(
      e.cityFacts({
        name: 'Kampala',
        population: '1,507,080',
        continent: 'Africa',
      }),
      'Kampala has a population of 1,507,080 and is situated in Africa',
    ));
  it('[Test 4] Expected: "Buenos Aires has a population of 2,891,082 and is situated in South America"', () =>
    assert.strictEqual(
      e.cityFacts({
        name: 'Buenos Aires',
        population: '2,891,082',
        continent: 'South America',
      }),
      'Buenos Aires has a population of 2,891,082 and is situated in South America',
    ));
  it('[Test 5] Expected: "Vancouver has a population of 631,486 and is situated in North America"', () =>
    assert.strictEqual(
      e.cityFacts({
        name: 'Vancouver',
        population: '631,486',
        continent: 'North America',
      }),
      'Vancouver has a population of 631,486 and is situated in North America',
    ));
  it('[Test 6] Expected: "Berlin has a population of 3,748,148 and is situated in Europe"', () =>
    assert.strictEqual(
      e.cityFacts({
        name: 'Berlin',
        population: '3,748,148',
        continent: 'Europe',
      }),
      'Berlin has a population of 3,748,148 and is situated in Europe',
    ));
});
