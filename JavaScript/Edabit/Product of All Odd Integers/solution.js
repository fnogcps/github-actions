const oddProduct = a => a.filter(a => (a % 2)).reduce((a, b) => a * b)
module.exports = { oddProduct }
