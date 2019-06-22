/* 
  * Semantic Versioning - Edabit
  *
  * Write three separate functions, one to retrieve each element 
  * in the semantic versioning specification.
  *
  * https://edabit.com/challenge/JcRKAzSnnPdSPBKMK
  * github.com/fnogcps
*/

retrieveMajor = a => a.split('.')[0], ""
retrieveMinor = a => a.split('.')[1], ""
retrievePatch = a => a.split('.')[2], ""
module.exports = { retrieveMajor, retrieveMinor, retrievePatch }
