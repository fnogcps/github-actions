/*
 * Special Arrays - Edabit
 *
 * An array is special, if every even index contains an even number
 * and every odd index contains an odd number. Create a function that
 * returns true if an array is special, and false otherwise.
 *
 * https://edabit.com/challenge/wikfKaQm3zP7buRA4
 * github.com/fnogcps
 */

isSpecialArray = a => a.length == a.filter(a => !(a % 2)).length * 2;
module.exports = {isSpecialArray};
