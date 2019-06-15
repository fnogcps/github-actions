removeFirstLast = a => (a.length > 2) ? a.match(/(?!^).*(?!)/gm)[0] : a
