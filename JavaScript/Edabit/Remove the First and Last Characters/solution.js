removeFirstLast = a => a.length > 2 ? a.match(/(?!^).*(?!\b)/gm)[0] + "" : a
module.exports = { removeFirstLast }
