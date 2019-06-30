/*
 * Flip the Boolean - Edabit
 *
 * Create a function that reverses a boolean value and returns
 * the string "boolean expected" if another variable type is given.
 *
 * https://edabit.com/challenge/noqGmqk6StwApSGwa
 * github.com/fnogcps
 */

reverse = a => typeof a == "boolean" ? !a : "boolean expected"
