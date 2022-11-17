const anotacao = document.getElementById('texto-aula')
const dados = ['Willder', 'Wallace', 1, true, 1.528]
console.log(dados)


anotacao.innerHTML += `<p>Array completo: <b>${dados}</b></p>`
anotacao.innerHTML += `<p>Primeiro elemento do Array: <b>${dados[0]}</b></p>`
anotacao.innerHTML += `<p>Terceiro elemento do Array: <b>${dados[2]}</b></p>`
dados[0] = 'CASA'
anotacao.innerHTML += `<p>Alterando elemento: ${dados}</p>`
dados.push('Tio Patinhas')
anotacao.innerHTML += `<p>Inserindo novo elemento no final do Array: <b>${dados}</b></p>`
dados.unshift('Willder')
anotacao.innerHTML += `<p>Inserindo elemento no ínicip do Array: <b>${dados}</b></p>`

const valorRemovidoFim = dados.pop()
anotacao.innerHTML += `<p>Removendo o último elemento do Array: <b>${dados}</b></p>`
anotacao.innerHTML += `<p>Valor do elemento removido do final do Array: <b>${valorRemovidoFim}</b> </p>`
const valorRemovidoInicio = dados.shift()
anotacao.innerHTML += `<p>Removendo primeiro elemento do Array: <b>${dados}</b></p>`
anotacao.innerHTML += `<p>Valor elemnto removido do inicio do Array: <b>${valorRemovidoInicio}</b> </p>`