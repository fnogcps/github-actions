/*
 * Omnipresent Value - Edabit
 *
 * A value is omnipresent if it exists in every subarray inside the main array.
 *
 * https://edabit.com/challenge/Twbmxzd3JwkkqAWES
 * github.com/fnogcps
 */

isOmnipresent = (a, b) => a.every(c => c.includes(b));
module.exports = { isOmnipresent };
