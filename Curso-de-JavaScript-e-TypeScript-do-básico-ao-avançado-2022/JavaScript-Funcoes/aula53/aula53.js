function retornaFuncao() {
    const nome = "willder"
    return function () {
        return nome
    }
}

const funcao = retornaFuncao()

console.dir(funcao)