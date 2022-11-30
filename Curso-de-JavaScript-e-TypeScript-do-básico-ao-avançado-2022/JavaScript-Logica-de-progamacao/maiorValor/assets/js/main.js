const formulario = document.querySelector('form')


formulario.addEventListener('submit', (event) => {
    event.preventDefault()
    const valor1 = Number(formulario.querySelector('#inputValor1').value)
    const valor2 = Number(formulario.querySelector('#inputValor2').value)
    
    
    
    
    if (validaInput(valor1) && validaInput(valor2)){
        if (valor1 === valor2){
            mensagemResultado('Números iguais')
        }
        else{
            const maiorNumero = maiorValor(valor1, valor2)
            mensagemResultado(`O maior número é ${maiorNumero}`)
        }  
    }
     
})

const validaInput = (value) => {
    if (!value){
        mensagemResultado('Um dos valores é invalido')
        return false
    }else{
        return true
    }
}

function mensagemResultado(mensagem){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = ''
    const saidaResultado = criaParagrafo()
    saidaResultado.innerHTML = mensagem
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

