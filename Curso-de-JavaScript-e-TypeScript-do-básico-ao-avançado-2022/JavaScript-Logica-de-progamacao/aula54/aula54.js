function rand(min = 1000, max = 3000) {
    const num = Math.floor(Math.random() * (max - min) + min)
    return num
}
function f1() {
    setTimeout(function() {
        console.log("f1")
    }, rand(2000, 5000))
}

function f2() {
    setTimeout(function() {
        console.log("f2")
    },rand(2000, 5000)) 
}

function f3() {
    setTimeout(function() {
        console.log("f3")  
    },rand(2000, 5000))

}

f1()
f2()
f3()
console.log("Olá, mundo!")