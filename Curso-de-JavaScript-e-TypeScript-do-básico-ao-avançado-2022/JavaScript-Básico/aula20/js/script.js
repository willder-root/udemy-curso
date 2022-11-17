const retorno = []
function exibir(){
    const formulario = document.querySelector('.formulario')
    const saida = document.querySelector("#saida")
     function recebeEventoForm (events) {
       events.preventDefault() 
       const nome = formulario.querySelector('#nome').value
       const sobrenome = formulario.querySelector('#sobrenome').value
       const peso = formulario.querySelector('#peso').value
       const altura = formulario.querySelector('#altura').value
       retorno.push({
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
       })
       saida.innerHTML += `<p>${retorno[retorno.length -1].nome} ${retorno[retorno.length -1].sobrenome} ${retorno[retorno.length -1].peso} ${retorno[retorno.length -1].altura}</p>`
       console.log(retorno)
    }

    formulario.addEventListener('submit', recebeEventoForm)
}

exibir()