/* 
  * Add up the Numbers from a Single Number - Edabit
  *
  * Create a function that takes a number as an argument.
  * Add up all the numbers from 1 to the number you passed to the function.
  *
  * https://edabit.com/challenge/4gzDuDkompAqujpRi
  * github.com/fnogcps
*/

addUp = a => { for(b = 0; a >= 0; b += a--); return b }
