const firstArg = (...arg) => arg.shift()
const lastArg = (...arg) => arg.pop()
module.exports = { firstArg, lastArg }
