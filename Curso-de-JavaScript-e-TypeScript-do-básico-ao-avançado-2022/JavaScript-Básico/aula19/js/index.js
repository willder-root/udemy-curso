let nome = 'LUIZ'
nome[0] = 'R'
console.log(nome)


const a = [1, 2, 3, 4]
const b = [...a]

console.log(a, b)

a.push(25)
console.log(a,b)
a.unshift(12)
console.log(a,b)
a.pop()
console.log(a,b)
a.shift()
console.log(a,b)