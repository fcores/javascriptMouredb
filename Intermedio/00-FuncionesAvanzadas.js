//FUNCIONES AVANZADAS

//CIUDADANOS DE PRIMERA CLASE
const greet = function (name) {
    console.log(`Hola ${name}`)
}
greet("Brais")

const saludo = (name) => console.log(`Hola ${name}`)
saludo("Estoy saludando con una flecha")

function processGreeting(greetFunction,name){
    greetFunction(name)
}
processGreeting(greet,"FACU")

function returnGreeting(){
    return greet
}

const greet2 = returnGreeting()
greet2("fcores")
