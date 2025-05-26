//CURRYNNG
function sum(...numbers){ //ESTE LO EMPAQUETA
    let resultado=0
    for (let valor of numbers){
        resultado = valor + resultado
    }
    return resultado
}


//PERMITE ANIDAR FUNCIONES CON DISTINTOS PARAMETROS
function currySum(a){
    return function (b){
        return function (c){
            return function (d){
                return sum(a,b,c,d)
            }
            
        }
    }
}

//Y COLOCARLE LOS PARAMETROS DE LA FORMA QUE NECESITE
//ESTO ES PARA NO LLAMAR A LA MISMA FUNCION Y TODA LA EJECUCION
const sumAB = currySum(1)(2)
const sumC = sumAB(4)
console.log(sumC(5))
console.log(sumC(766))
console.log(sumAB(766)(5445))

