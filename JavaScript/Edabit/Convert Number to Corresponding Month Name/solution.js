/* 
  * Convert Number to Corresponding Month Name - Edabit
  *
  * Create a function that takes a number (from 1 to 12) and return its 
  * corresponding month name as a string.
  *
  * https://edabit.com/challenge/NKknKNfeaJxLDfJuZ
  * github.com/fnogcps
*/

month_name = a => new Date(0, --a).toLocaleString('en-US', { month: 'long' })
module.exports = { month_name }
