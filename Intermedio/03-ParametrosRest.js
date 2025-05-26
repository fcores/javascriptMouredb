//PARAMETROS REST


//NUMBERS SE TERMINA RECIBIENDO COMO UN ARRAY
function sum(...numbers){ //ESTE LO EMPAQUETA
    let resultado=0
    for (let valor of numbers){
        resultado = valor + resultado
    }
    return resultado
}

console.log(sum(2,3,4,4,3,4,53))


//OPERADOR SPREAD (...) - SIMILAR AL REST PERO ESCRITO DE OTRA MANERA

const numbers = [1,2,3]
function sumWithSpread (a,b,c){
    return a+b+c
}
console.log(sumWithSpread(1,2,3))
console.log(sumWithSpread(...numbers)) //EL SPREAD DESEMPAQUETA EN ESTE CASO


//CLOSURES
function createCounter(){
    let counter= 0
    return function (){
        counter++
        console.log(`Contador: ${counter}`)
    }
}
const counter = createCounter()
counter()
counter()
counter()
counter() // SE GUARDA EL CONTEXTO DE LA FUNCION GLOBAL


