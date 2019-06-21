/* 
  * Calculate Determinant of a 2x2 Matrix - Edabit
  *
  * Create a function to calculate the determinant of a 2 x 2 matrix.
  *
  * https://edabit.com/challenge/MwLp6s75F6S5wRrEJ
  * github.com/fnogcps
*/

calcDeterminant = a => a[0][0] * a[1][1] - a[0][1] * a[1][0]
module.exports = { calcDeterminant }
