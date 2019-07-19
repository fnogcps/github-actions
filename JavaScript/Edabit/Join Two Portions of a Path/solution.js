/*
 * Join Two Portions of a Path - Edabit
 *
 * Write a function that receives two portions of a path
 * and joins them. The portions will be joined with the "/" separator.
 * There could be only one separator and if it is not present
 * it should be added.
 *
 * https://edabit.com/challenge/ezv3TCDcgAYhyL3R2
 * github.com/fnogcps
 */

joinPath = (a, b) => a.replace(/\//gu, '') + '/' + b.replace(/\//gu, '');
module.exports = {joinPath};
