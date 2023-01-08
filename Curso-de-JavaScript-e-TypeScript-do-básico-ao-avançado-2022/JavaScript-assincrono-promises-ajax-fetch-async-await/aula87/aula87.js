function rand(min, max){
    max *= 1000
    min *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string'){
            reject('type invalid!')
            return
        }else{
            setTimeout(()=>{
                resolve(`${msg.toUpperCase()} -> Tempo: ${tempo}`)
            },tempo)
        }   
    })
}


const promise = [
        'Primeiro valor',
        esperaAI('Promise 1', rand(1,3)),
        esperaAI('Promise 2', rand(1,3)),
        esperaAI('Promise 3', rand(1,3)),
        esperaAI(1000,1000),
        'último valor'
]

Promise.all(promise)
    .then((valor)=>{
        console.log(valor)
    })
    .catch((errors)=>{
        console.error(errors)
    })


Promise.race(promise)    
    .then((valor)=>{
        console.log(valor)
    })
    .catch((errors)=>{
        console.error(errors)
    })