/*
 * First and Last Index - Edabit
 *
 * Given a word, write a function that returns the first index 
 * and the last index of a character.
 *
 * https://edabit.com/challenge/AYpxyzbnbS7BGSgvd
 * github.com/fnogcps
 */

charIndex = (a, b) => 
    a.lastIndexOf(b) < 0 ? undefined : [a.indexOf(b), a.lastIndexOf(b)];
