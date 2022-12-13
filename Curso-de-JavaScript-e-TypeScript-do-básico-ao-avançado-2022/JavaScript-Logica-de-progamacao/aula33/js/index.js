const pessoa = {
    nome: "Willder",
    sobrenome: "Araujo",
    idade: 22,
    endereco: {
        logradouro: "rua do jasmim",
        numero: 91,
        bairro: "Rio Doce",
        cidade: "Olinda",
        estado: "Pernambuco"
    }
}


const {nome, idade, endereco:{bairro}} = pessoa
console.log(nome, idade, bairro)