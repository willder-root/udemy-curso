let primeiroNumero = 9.542334
let segundoNumero = Math.floor(primeiroNumero)
let randomNumero = Math.round(Math.random() * (10 - 5) + 5)
document.body.innerHTML += `Número arredondado para baixo: <strong>${Math.floor(primeiroNumero)}</strong><br/>`
document.body.innerHTML += `Número arredondado para cima: <strong>${Math.ceil(primeiroNumero)}</strong><br/>`
document.body.innerHTML += `Número arrendodado para o mais próximo: <strong>${Math.round(primeiroNumero)}</strong><br/>`
document.body.innerHTML += `Maior número do conjunto (1,2,3,4,5,-10,-50,1500,9,8,7,6): <strong>${Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)}</strong><br/>`
document.body.innerHTML += `Menor número do conjunto (1,2,3,4,5,-10,-50,1500,9,8,7,6): <strong>${Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)}</strong><br/>`
document.body.innerHTML += `Número aleatório: <strong>${randomNumero}</strong><br/>`
