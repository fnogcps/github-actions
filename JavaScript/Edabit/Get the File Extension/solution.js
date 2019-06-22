/*
 * Get the File Extension - Edabit
 *
 * Write a function that maps files to their extension names.
 *
 * https://edabit.com/challenge/8A9E8LdE6zXcmPX3W
 * github.com/fnogcps
 */

getExtension = a => a.map(b => (b + "").replace(/[^.]*./, ""));
module.exports = { getExtension };
