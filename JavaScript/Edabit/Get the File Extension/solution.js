const getExtension = a => a.map(a => String(a).replace(/[^.]*./, ""))
module.exports = { getExtension }
