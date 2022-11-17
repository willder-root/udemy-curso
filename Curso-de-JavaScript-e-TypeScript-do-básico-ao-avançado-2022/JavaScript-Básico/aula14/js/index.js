//IEEE 754-2008 - padrão de precisão usado pelo JavaScript
let primeiroNumero = 1
let segundoNumero = 2.5
let terceiroNumero = 10.25754345484
let quartoNumero = 0.7
let quintoNumero = 0.1
console.log(primeiroNumero.toString() + segundoNumero)
console.log(typeof primeiroNumero) 

console.log(terceiroNumero.toFixed(2))

let temp = primeiroNumero * 'oi'
console.log(Number.isNaN(temp))
quartoNumero += quintoNumero
quartoNumero += quintoNumero
quartoNumero += quintoNumero
quartoNumero =  Number(quartoNumero.toFixed(2))
console.log(quartoNumero)
console.log(Number.isInteger(quartoNumero))