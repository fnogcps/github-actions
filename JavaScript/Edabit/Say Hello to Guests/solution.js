/* 
  * Say Hello to Guests - Edabit
  *
  * In this exercise you will have to:
  * - Take a list of names.
  * - Add "Hello" to every name.
  * - Make one big string with all greetings.
  *
  * The solution should be one string with a comma in 
  * between every "Hello (Name)".
  *
  * https://edabit.com/challenge/r9uigYABnbPLY7zsz
  * github.com/fnogcps
*/

greetPeople = a => a.map(a => `Hello ${a}`).join(', ')
module.exports = { greetPeople }
