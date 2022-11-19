const sectionContainer = document.querySelector('.container')

function exibeMensagem(ev){
    const titulo = sectionContainer.querySelector('h1')
    const data = new Date
    const diaSemana = getDiaSemana(data.getDay())
    const mes = getMesPorExtenso(data.getMonth())
    
    sectionContainer.innerHTML = `${diaSemana}, ${data.getDay()} de ${mes} de ${data.getFullYear()} ${horaAtual()}`
}

function getDiaSemana(day){
    switch (day) {
        case 0:
            return "domingo"
        case 1:
            return "segunda-feira"
        case 2:
            return "teça-feira"
        case 3:
            return "quarta-feira"
        case 4:
            return "quinta-feira"
        case 5:
            return "sexta-feira"
        case 6:
            return "sabádo"
    }
}

function getMesPorExtenso(mounth){
    switch (mounth) {
        case 0:
            return "janeiro"
        case 1:
            return "fevereiro"
        case 2:
            return "março"
        case 3:
            return "abril"
        case 4:
            return "maio"
        case 5:
            return "junho"
        case 6: 
            return "julho"
        case 7:
            return "agosto"
        case 8:
            return "setembro"
        case 9:
            return "outubro"
        case 10:
            return "novembro"
        case 11:
            return "dezembro"
    
        default:
            break;
    }
}

function horaAtual(){
    const dataTemp = new Date
    const hora = dataTemp.getHours() < 10 ? "0"+dataTemp.getHours() : dataTemp.getHours()
    const minuto = dataTemp.getMinutes() < 10 ? "0"+dataTemp.getMinute() : dataTemp.getMinutes()
    return hora+":" + minuto
}

exibeMensagem()