const listaTarefa = document.querySelector('.listaTarefa')
const adicionarTarefa = document.querySelector("#adcionarTarefa")
const formulario = document.querySelector("#formulario")
let id = 0

const novaTarefa = (tarefa) =>{
    const itemLista = document.createElement("li")
    const btnApagar = document.createElement("button")
    const containerItemLista = document.createElement("div")
    containerItemLista.classList.add("itemLista")
    id += 1
    itemLista.innerHTML = tarefa
    btnApagar.innerHTML = "apagar"
    btnApagar.value = id
    containerItemLista.setAttribute("id","apagar"+id)
    containerItemLista.appendChild(itemLista)
    containerItemLista.appendChild(btnApagar)
    listaTarefa.appendChild(containerItemLista)
}

formulario.addEventListener("submit",(event)=>{
    event.preventDefault()
    const inputTarefa = document.querySelector("#tarefa")
    const tarefa = inputTarefa.value.trim()
    if(tarefa){
        novaTarefa(tarefa)
    }
    inputTarefa.value = ""
})


document.addEventListener("click",(event) =>{
    const id = '#apagar' + event.target.value
 
    if(Number(event.target.value)){
        const tempTarefa = document.querySelector(id)
        listaTarefa.removeChild(tempTarefa)
    }   
})

