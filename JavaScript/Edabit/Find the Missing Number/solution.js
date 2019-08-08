/*
 * Find the Missing Number - Edabit
 *
 * Create a function that takes an array of numbers between 1
 * and 10 (excluding one number) and returns the missing number.
 *
 * https://edabit.com/challenge/rgdT9sZ4QhsKhaSw9
 * github.com/fnogcps
 */

missingNum = a => 55 - a.reduce((a, b) => a + b);
module.exports = {missingNum};
