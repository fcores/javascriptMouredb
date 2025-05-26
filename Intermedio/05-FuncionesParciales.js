//FUNCIONES PARCIALES

function sum(...numbers){ //ESTE LO EMPAQUETA
    let resultado=0
    for (let valor of numbers){
        resultado = valor + resultado
    }
    return resultado
}

//FUNCION QUE CONTIENE OTRA FUNCION Y RECIBE PARAMETROS PARCIALES
function partialSum(a){
    return function (b,c){
        return sum(a,b,c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(5,6))