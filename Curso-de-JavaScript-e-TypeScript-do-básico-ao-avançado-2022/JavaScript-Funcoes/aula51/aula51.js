function soma(a, b){
    return a + b
}

console.log(soma(1, 2))


function falaFrase(comeco) {
    function falaResto(resto) {
       return comeco + ' ' + resto
    }
    return falaResto
}

const olaMundo = falaFrase('olá')

console.log(olaMundo("mundo"))