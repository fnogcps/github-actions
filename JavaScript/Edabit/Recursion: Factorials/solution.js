/*
 * Recursion: Factorials - Edabit
 *
 * Write a function that calculates the factorial of a number recursively.
 *
 * https://edabit.com/challenge/rgXMMHEmbh2MCKSrM
 * github.com/fnogcps
 */

factorial = a => (a ? a * factorial(--a) : 1);
