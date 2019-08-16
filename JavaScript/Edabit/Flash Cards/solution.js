/*
 * Flash Cards - Edabit
 *
 * Create a function that outputs the results of a flashcard.
 * A flashcard is an array of three elements: a number, an operator symbol,
 * and another number. Return the mathematical result of that expression.
 *
 * https://edabit.com/challenge/ng4KKFW4CBwteJdDH
 * github.com/fnogcps
 */

flash = ([a, b, c]) => {
  switch (b) {
    case '+':
      return a + c;
      break;
    case '-':
      return a - c;
      break;
    case '/':
      return c == 0 || b == 0 ? undefined : +(a / c).toFixed(2);
      break;
    case 'x':
      return a * c;
      break;
    default:
      return undefined;
  }
};

module.exports = {flash};
