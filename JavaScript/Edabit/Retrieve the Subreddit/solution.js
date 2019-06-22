/*
 * Retrieve the Subreddit - Edabit
 *
 * Create a function to extract the name of the subreddit from its URL.
 *
 * https://edabit.com/challenge/WT5MGmgaP3jvx8qpt
 * github.com/fnogcps
 */

subReddit = a => a.split("/")[4];
module.exports = { subReddit };
