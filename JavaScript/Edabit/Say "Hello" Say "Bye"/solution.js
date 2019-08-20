/*
 * Say "Hello" Say "Bye" - Edabit
 *
 * Write a function that takes a string name and a number num
 * (either 0 or 1) and return "Hello" + name if num is 1, otherwise
 * return "Bye" + name.
 *
 * https://edabit.com/challenge/kLa2w7m4h849k8rmW
 * github.com/fnogcps
 */

sayHelloBye = (a, b) =>
  (b ? 'Hello ' : 'Bye ') + [...a][0].toUpperCase() + a.slice(1);
