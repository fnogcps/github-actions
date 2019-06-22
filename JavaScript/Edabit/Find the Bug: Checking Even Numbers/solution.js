/*
 * Find the Bug: Checking Even Numbers - Edabit
 *
 * Create a function that takes in an array and returns true
 * if all its values are even, and false otherwise.
 *
 * https://edabit.com/challenge/bcM99TYJmRv5JnZaA
 * github.com/fnogcps
 */

checkAllEven = a => a.every(a => !(a % 2));
module.exports = { checkAllEven };
