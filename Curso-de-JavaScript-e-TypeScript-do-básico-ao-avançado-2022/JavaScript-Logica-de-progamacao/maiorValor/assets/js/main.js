const formulario = document.querySelector('form')

const exibirMaiorValor = () => {
    const valor1 = Number(formulario.querySelector('.inputValor1').value)
    const valor2 = Number(ormulario.querySelector('.inputValor2').value)
    const resultado = formulario.querySelector('.resultado')
    const maiorNumero = maiorValor(valor1, valor2)
    const saidaResultado = criaParagrafo()
    saidaResultado.innerHTML = `O maior número é ${maiorNumero}`
    resultado.appendChild(saidaResultado)

}

function criaParagrafo() {
        const paragrafo = document.createElement('p')
        return paragrafo
}



function maiorValor(valor1, valor2){
    if (valor1 > valor2) {
        return valor1
    }
    else{
        return valor2
    }
}