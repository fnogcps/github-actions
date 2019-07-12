/*
 * Extract City Facts - Edabit
 *
 * Create a function that takes an object as an argument
 * and returns a string with facts about the city.
 *
 * https://edabit.com/challenge/FzDAgSR84zeyRa278
 * github.com/fnogcps
 */

cityFacts = a =>
  `${a.name} has a population of ${a.population} and is situated in ` +
  a.continent;

module.exports = {cityFacts};
