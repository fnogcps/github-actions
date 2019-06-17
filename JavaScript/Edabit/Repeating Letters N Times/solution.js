/* 
  * Repeating Letters N Times - Edabit
  *
  * Create a function that repeats each character in a string n times.
  *
  * https://edabit.com/challenge/pggD9dH8Nwuac7fPE
  * github.com/fnogcps
*/

repeat = (a, b) => a.split("").map(a => a.repeat(b)).join("")
