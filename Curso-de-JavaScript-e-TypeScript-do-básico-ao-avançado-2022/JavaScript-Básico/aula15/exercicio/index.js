const numero = Number(prompt("Digite um número: "))

const numeroTitulo = document.getElementById("numero-titulo")
const containerTexto = document.getElementById("texto")

numeroTitulo.innerHTML = ` ${numero}`
containerTexto.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)}</h1><br/><br/>`
containerTexto.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}<br/><br/>`
containerTexto.innerHTML += `É NaN: ${Number.isNaN(numero)}<br/><br/>`
containerTexto.innerHTML += `Arredondado para baixo: ${Math.floor(numero)}<br/><br/>`
containerTexto.innerHTML += `Arredondado para cima: ${Math.ceil(numero)}<br/><br/>`
containerTexto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`