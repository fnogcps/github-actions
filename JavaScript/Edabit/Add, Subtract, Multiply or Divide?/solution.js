/*
 * Add, Subtract, Multiply or Divide? - Edabit
 *
 * Write a function that takes two numbers and returns
 * if they should be added, subtracted, multiplied or
 * divided to get 24.
 *
 * If none of the operations can give 24, return null.
 *
 *  https://edabit.com/challenge/XyPee4TdK64BTgvbD
 * github.com/fnogcps
 */

operation = (a, b) => {
  return (
    (a + b == 24 && 'added') ||
    (a - b == 24 && 'subtracted') ||
    (a * b == 24 && 'multiplied') ||
    (a / b == 24 && 'divided') ||
    null
  );
};

module.exports = {operation};
