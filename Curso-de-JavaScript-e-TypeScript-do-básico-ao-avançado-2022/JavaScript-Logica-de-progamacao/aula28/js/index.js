function zeroAEsquerda(numero) {
    return numero >= 10 ? numero : `0${numero}`
}
function formataData(data) {
    const dia = data.getDate()
    const mes = data.getMonth() + 1 
    const ano = data.getFullYear()
    return `${zeroAEsquerda(dia)}/${zeroAEsquerda(mes)}/${zeroAEsquerda(ano)}`
}

const data = new Date()
const DataBrasil = formataData(data)
console.log(DataBrasil)