let varA = 'A'
let varB = 'B'
let VarC = 'C'

// const aux = varA
// console.log('Antes:')
// console.log(varA, varB, VarC)


[varA, varB, VarC] = [varB, VarC, varA]
console.log('Depois:')
console.log(varA, varB, VarC)


