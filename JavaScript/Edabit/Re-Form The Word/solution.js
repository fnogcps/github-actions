/*
 * Re-Form The Word - Edabit
 *
 * A word has been split into a left part and a right part.
 * Re-form the word by adding both halves together, changing the
 * first character to an uppercase letter.
 *
 * https://edabit.com/challenge/KQQ7RMXjSK257GQgy
 * github.com/fnogcps
 */

getWord = (a, b) => a[0].toUpperCase() + a.slice(1) + b;
module.exports = {getWord};
