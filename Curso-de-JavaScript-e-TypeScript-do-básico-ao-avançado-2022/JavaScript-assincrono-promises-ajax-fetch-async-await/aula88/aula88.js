const rand = (min= 1, max= 3)=>{
    min *= 1000
    max*= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAI(msg, tempo){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if (typeof msg !== 'string'){
                reject(`${msg} is not string`)
                return
            }else{
                resolve(`${msg.toUpperCase()} -> Tempo: ${tempo}`)
            }
        }, tempo)
    })
}


// esperaAI('Fase 1', rand())
//     .then((valor)=>{
//         console.log(valor)
//         return esperaAI('Fase 2', rand())
//             .then((valor)=>{
//                 console.log(valor)
//                 return esperaAI('Fase 3', rand())
//                     .then((valor)=>{
//                         console.log(valor)
//                         return valor
//                     })
//             })
//     })
//     .catch((errors)=>{

//     })

async function executa(){
    try {
        const fase1 = await esperaAI('Fase 1', rand())
        console.log(fase1)
       const fase2 = await esperaAI('Fase 2', rand())
        console.log(fase2)
       const fase3 = await esperaAI('Fase 3', rand())
        console.log(fase3)
       const fase4 = await esperaAI(2, rand())
        console.log(fase4)
       console.log(`Terminamos na fase: `, fase4) 
    } catch (error) {
        console.log(error)
    }
   
}

executa()