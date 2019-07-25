/*
 * Get the Century - Edabit
 *
 * Create a function that takes in a date and returns the correct century.
 *
 * https://edabit.com/challenge/SAdqaWKRpjLfZnGKA
 * github.com/fnogcps
 */

century = a => {
  b = a > 2000 ? 'st century' : 'th century';
  c = +(a + '').slice(2, 4) ? 1 + +(a + '').slice(0, 2) : +(a + '').slice(0, 2);
  return c + b;
};
