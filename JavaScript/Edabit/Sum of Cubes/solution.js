/*
 * Sum of Cubes - Edabit
 *
 * Create a function that takes in an array of numbers 
 * and returns the sum of its cubes.
 *
 * https://edabit.com/challenge/XdAR3KohR5w7rjrFg
 * github.com/fnogcps
 */

sumOfCubes = a => a.reduce((a, b) => a + Math.pow(b, 3), 0)
