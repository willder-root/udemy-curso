const formulario = document.querySelector("#formulario")

formulario.addEventListener('submit', (event)=>{
    event.preventDefault()
    const pesoInput = formulario.querySelector('#peso')
    const alturaInput = formulario.querySelector('#altura')
    const peso = Number(pesoInput.value) 
    const altura = Number(alturaInput.value)

    if ((validateFormInput(peso)) || (validateFormInput(altura))){
        return;
    }

    const imc = calculaIMC(peso,altura)
    setResult(`Seu IMC: ${imc.toFixed(2)} 
    (${tipoIMC(imc)})`, true)
    console.log('Evento previnido')
})

function tipoIMC(imc){
    respostaIMC = [
    'Abaixo do peso',
     'Peso Normal', 
     'Sobrepeso',
    'Obesidade grau 1', 
    'Obesidade grau 2', 
    'Obesidade grau 3'
    ]

    if(imc <= 18.5) return respostaIMC[0]
    if((imc >= 18.5) && (imc <= 24.9)) return respostaIMC[1]
    if((imc>= 25) && (imc <= 29.9)) return respostaIMC[2]
    if((imc >= 30) && (imc <= 34.9)) return respostaIMC[3]
    if((imc >= 35) && (imc <= 39.9)) return respostaIMC[4]
    if(imc >= 40) return respostaIMC[5]
}

function calculaIMC(peso,altura) {
    return peso / (altura ** 2)
}

function validateFormInput(inputValue) {
    if(!inputValue){
        setResult(" O valor do peso ou altura está inválido!", false)
        return false
    }else{
        return true
    }
    
}

function criaParagrafoResultado(params) {
    const paragrafo = document.createElement('p')
    return paragrafo
}

function setResult(mensage, isValid) {
    const result = document.querySelector('.result')  
    result.innerHTML = ''
    const paragrafoResultado = criaParagrafoResultado()
    if(isValid){
        paragrafoResultado.classList.add('paragrafo-resultado-bom')
    }else{
        paragrafoResultado.classList.add('paragrafo-resultado-ruim')
    }
    paragrafoResultado.innerHTML = mensage
    result.appendChild(paragrafoResultado)
}
