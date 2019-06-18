const filterStateNames = (a, b) => (b == 'abb') ? 
    a.filter(a => a.length == 2) : a.filter(a => a.length != 2)

module.exports = { filterStateNames }
