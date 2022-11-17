//const conteudo = document.getElementById('conteudo')

function saudacao(nome) { 
    return `Seja bem-vindo ${nome}!`
}

function soma(x,y){
    const resultado = x + y
    return resultado
}

const variaveel = saudacao('Caio')
const valor = soma(25,3,9,8,2)

console.log(variaveel)
console.log(valor)

const raiz = function(numero) {
    return numero ** 0.5
}

const novaRaiz = (numero) =>{
    return numero ** 0.5
}

console.log(raiz(9))
console.log(novaRaiz(81))