/*
 * Basic Statistics: Mean - Edabit
 *
 * The mean of a group of numbers is calculated by summing all numbers,
 * and dividing this sum by the total count of numbers in the group.
 * Given a sorted array of numbers, return the mean
 * (rounded to one decimal place).
 *
 * https://edabit.com/challenge/WacpbmmhwWJ2Wgmy9
 * github.com/fnogcps
 */

mean = a => +(a.reduce((a, b) => a + b) / a.length).toFixed(1);
