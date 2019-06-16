const findEvenNums = (a, b = []) => { 
    for(c = 2; c <= a; c += 2) b.push(c)
    return b
}
