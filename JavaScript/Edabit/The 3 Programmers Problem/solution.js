/*
 * The 3 Programmers Problem - Edabit
 *
 * You hired three programmers and you (hopefully) pay them.
 * Create a function that takes three numbers
 * (the hourly wage of each programmer) and returns the difference
 * between the highest-paid programmer and the lowest-paid.
 *
 * https://edabit.com/challenge/BYZW3yNmG99eLpSdR
 * github.com/fnogcps
 */

programmers = (a, b, c) => Math.max(a, b, c) - Math.min(a, b, c);
module.exports = {programmers};
