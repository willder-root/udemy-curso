const pessoa = {
    nome: "willder",
    sobrenome: "araujo",
    idade: 22
}

const CriaPessoa = (nome, sobrenome, idade) => {
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
        falar () {
            console.log(`Meu nome é ${this.nome} ${this.sobrenome} e eu tenho ${this.idade} anos`)
        }
    }
}

const pessoa1 = CriaPessoa('willder', 'araujo', 22)
const pessoa2 = CriaPessoa('raphael', 'batista', 43)
const pessoa3 = CriaPessoa('verônica', 'santana', 54)
const pessoa4 = CriaPessoa('joaquim', 'gomes', 65)

pessoa1.falar()
pessoa2.falar()
pessoa3.falar()
pessoa4.falar()
