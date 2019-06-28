/*
 * Even Odd Partition - Edabit
 *
 * Write a function that partitions the array into two subarrays:
 * one with all even integers, and the other with all odd integers.
 *
 * https://edabit.com/challenge/BsCHQ6fyzmrTYLNsR
 * github.com/fnogcps
 */

evenOddPartition = a => [a.filter(c => !(c % 2)), a.filter(d => d % 2)];
module.exports = {evenOddPartition};
