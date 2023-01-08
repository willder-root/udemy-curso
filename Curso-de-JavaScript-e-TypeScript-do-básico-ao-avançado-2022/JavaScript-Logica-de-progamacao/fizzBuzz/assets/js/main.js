const formulario = document.querySelector('form')

formulario.addEventListener('submit', (event)=>{
    event.preventDefault()
    const numeroInput = formulario.querySelector('#numero')

    const numero = Number(numeroInput.value)

    if (ValidaInput(numero)){
        if (DivisivelPorTres(numero) && DivisivelPorCinco(numero)){
            paragrafoResultado("FizzBuzz")
        }else if(DivisivelPorTres(numero)){
            paragrafoResultado("Fizz")
        }else if (DivisivelPorCinco(numero)) {
            paragrafoResultado("Buzz")
        }else{
            paragrafoResultado(numero)
        }
    }else{
        window.alert('Input invalid!')
    }
})


const ValidaInput = (inputValue) =>{
    if (!inputValue){
        return false
    }else{
        return true
    }
}

const DivisivelPorTres = (valor) => {
    if ((valor % 3) === 0){
        return true
    }else{
        return false
    }
}
const DivisivelPorCinco = (valor) => {
    if ((valor % 5) === 0){
        return true
    }else{
        return false
    }
}

const paragrafoResultado = (mensagem) =>{
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const paragrafo = document.createElement('p')
    paragrafo.innerHTML = mensagem
    resultado.appendChild(paragrafo)
    

}