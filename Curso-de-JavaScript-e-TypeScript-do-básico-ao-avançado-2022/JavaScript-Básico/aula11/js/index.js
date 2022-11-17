const primeiroNumero = 5
const segundoNumero = 10

const soma = primeiroNumero + segundoNumero
const subtracao = segundoNumero - primeiroNumero
const multiplicacao = primeiroNumero * segundoNumero
const divisao = segundoNumero / primeiroNumero
const potenciacao = segundoNumero ** primeiroNumero
const restoDivisao = segundoNumero % primeiroNumero
let contador = 1
let novoContador = 1
const passo = 3

console.log(`Soma: ${primeiroNumero} + ${segundoNumero} = ${soma}`)
console.log(`Subtração: ${segundoNumero} - ${primeiroNumero} = ${subtracao}`)
console.log(`Multiplicação: ${primeiroNumero} * ${segundoNumero} = ${multiplicacao}`)
console.log(`Divisão: ${segundoNumero} / ${primeiroNumero} = ${divisao}`)
console.log(`Potenciação: ${segundoNumero} ** ${primeiroNumero} = ${potenciacao}`)
console.log(`Resto da Divisão: ${segundoNumero} % ${primeiroNumero} = ${restoDivisao}`)
console.log(`Contador++: ${contador} = ${contador++}`)
console.log(`++Contador: ${novoContador} = ${++novoContador}`)
console.log(`Contador--: ${contador} = ${contador--}`)
console.log(`--Contador: ${novoContador} = ${--novoContador}`)
console.log(`Contador+=${passo}: ${novoContador} = ${novoContador+=passo}`)
console.log(`Contador-=${passo}: ${novoContador} = ${novoContador-=passo}`)
console.log(`Contador*=${passo}: ${novoContador} = ${novoContador*=passo}`)
console.log(`Contador/=${passo}: ${novoContador} = ${novoContador/=passo}`)




