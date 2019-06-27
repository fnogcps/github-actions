/*
 * Check if a Number is a Palindrome - Edabit
 *
 * Write a function that returns true if a number is a palindrome.
 *
 * https://edabit.com/challenge/6dbpFcrW4schC6zDP
 * github.com/fnogcps
 */

isPalindrome = a =>
  (a + "")
    .split("")
    .reverse()
    .join("") == a;
