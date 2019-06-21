const month_name = (a, b = new Date()) =>
    b.setMonth(--a) && b.toLocaleString({}, { month: 'long' })

module.exports = { month_name }
