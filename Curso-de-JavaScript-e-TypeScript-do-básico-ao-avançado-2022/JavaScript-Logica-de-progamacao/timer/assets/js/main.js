const timer = document.querySelector(".timer")
const contador = document.querySelector('.contador')
const iniciar = document.querySelector("#iniciar")
const pausar = document.querySelector("#pausar")
const zerar = document.querySelector("#zerar")
const relogio = {
    hora: "00",
    minuto: "00",
    segundo:"00"
}
let meuInterval 

const valorComZero = (valor) =>{
    if (Number(valor) < 10){
        return "0"+valor
    }else{
        return valor
    }
}
iniciar.addEventListener("click",()=>{
    contador.classList.remove("timerVermelho")
    contador.classList.add("timerPreto")
    meuInterval = setInterval(iniciarTimer,1000)
})

function iniciarTimer(tempo){

    if (String(relogio.segundo) === "59"){
        relogio.segundo = "00"
        if (String(relogio.minuto) === "59"){
            relogio.minuto = "00"
            relogio.segundo = "00"
            relogio.hora = String(valorComZero(Number(relogio.hora) + 1))
        }else{
            relogio.minuto = String(valorComZero(Number(relogio.minuto) + 1))
        }
    }else{
        relogio.segundo = String(valorComZero(Number(relogio.segundo) + 1))
    }
    console.log("hora",relogio.hora)
    console.log("minute", relogio.minuto)
    console.log("segundo", relogio.segundo)
 
    contador.innerHTML = relogio.hora + ":" + relogio.minuto + ":" + relogio.segundo
}


pausar.addEventListener("click",()=>{
    contador.classList.remove("timerPreto")
    contador.classList.add("timerVermelho")
    clearInterval(meuInterval)
})

zerar.addEventListener("click", ()=>{
    contador.classList.remove("timerVermelho")
    contador.classList.add("timerPreto")
    relogio.hora = "00"
    relogio.minuto = "00"
    relogio.segundo = "00"

    contador.innerHTML = relogio.hora + ":" + relogio.minuto + ":" + relogio.segundo
})