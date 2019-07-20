/*
 * Who's The Oldest? - Edabit
 *
 * Given an object containing the names and ages of a group of people,
 * return the name of the oldest person.
 *
 * https://edabit.com/challenge/vPmDvWoP2wj5KpWZi
 * github.com/fnogcps
 */

oldest = a => Object.keys(a).find(b => a[b] == Math.max(...Object.values(a)));
module.exports = {oldest};
