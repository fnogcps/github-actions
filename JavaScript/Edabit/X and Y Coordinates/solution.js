/*
 * X and Y Coordinates - Edabit
 *
 * Create a function that converts two arrays of x- and y- coordinates
 * into an array of (x,y) coordinates.
 *
 * https://edabit.com/challenge/qYAhaD8fTbHWNe9oT
 * github.com/fnogcps
 */

convertCartesian = (a, b) => a.map((a, c) => [a, b[c]]);
module.exports = {convertCartesian};
