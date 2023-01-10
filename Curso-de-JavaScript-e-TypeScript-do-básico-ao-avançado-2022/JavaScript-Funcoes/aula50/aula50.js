function funcao(){
    let total = 0
    for(let argumneto of arguments){
        total += argumneto
    }
    console.log(`Valor total: ${total}`)
}

function funcao2(a, b = 0, c = 4){
  console.log(a + b + c)
}


function funcao3({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}

function funcao4(operador, acumulador, ...numeros) {
    for(let numero of numeros){
      switch (operador) {
        case "+":
            acumulador += numero
            break;
        case "-":
            acumulador -= numero
            break
        case "*": 
            acumulador *= numero
            break
        case "/":
            acumulador /= numero
            break
        default: console.log("Operador inválido")
            break;
      }
    }
    console.log(acumulador)
}

funcao(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

funcao2(2,undefined ,3)

funcao3({nome: "Willder Araujo", sobrenome: "Gomes de Souza", idade: 22})

funcao4("+", 0, 10, 20, 30, 40)