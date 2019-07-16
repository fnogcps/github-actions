/*
 * Is it Time for Milk and Cookies? - Edabit
 *
 * Create a function that accepts a Date object
 * and returns true if it's Christmas Eve (December 24th)
 * and false otherwise. Keep in mind JavaScript's Date month is 0
 * based, meaning December is the 11th month while January is 0.
 *
 * https://edabit.com/challenge/hPWnaSckJke5FXNEH
 * github.com/fnogcps
 */

timeForMilkAndCookies = a => a.getMonth() == 11 && a.getDate() == 24;
module.exports = {timeForMilkAndCookies};
