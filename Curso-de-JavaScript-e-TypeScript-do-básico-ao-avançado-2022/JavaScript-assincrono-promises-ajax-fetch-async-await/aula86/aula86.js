function rand(min, max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) )
}

function esperaAI(msg,tempo){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log(msg, 'Tempo:',tempo)
            resolve(msg)
        },tempo) 
    })

}



esperaAI('Teste 1',rand(1,5))
    .then(resposta =>{
        console.log(resposta)
        return esperaAI('Teste 2',rand(1,5))
    .then(
        
    )
    .catch()
    })
    .catch()
esperaAI('Teste 2',rand(1,5))
    .then()
    .catch()
esperaAI('Teste 3',rand(1,5))
    .then()
    .catch()
esperaAI('Teste 4',rand(1,5))
    .then()
    .catch()

