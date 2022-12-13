const elementos = [
    {tag: 'p', texto: 'Mostrando frases:'},
    {tag: 'div', texto: 'Frase 1'},
    {tag: 'footer', texto: 'Frase 2'},
    {tag: 'section', texto: 'Frase 3'}
]

const container = document.querySelector('.container')
function exibeNovoElemento(){
    const divContainer = document.createElement('div')
    
    for(let i = 0; i < elementos.length; i++ ){
        let {tag, texto} = elementos[i]
        divContainer.appendChild(criaNovoElemento(elementos[i]))
    }
    container.appendChild(divContainer)
}

function criaNovoElemento({tag, texto}){
    const elementoTemporario = document.createElement(tag)
    elementoTemporario.innerHTML = texto
    return elementoTemporario
}

exibeNovoElemento()