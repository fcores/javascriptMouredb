//OPERADORES


//OPERADORES ARITMETICOS
let a = 9 
let b = 5

console.log(a+b) //SUMA
console.log(a-b) //RESTA
console.log(a*b) //MULTIPLICACION
console.log(a/b) //DIVISION
console.log(a%b) //MODULO
console.log(a**b) //POTENCIA
console.log(a++) //INCREMENTO
console.log(a--) //DECREMENTO
let myVariable = 2 //ASIGNACION
myVariable +=2 //INCREMENTO REDUCIDO

console.log(a > b) //MAYOR QUE
console.log(a < b) //MENOR QUE
console.log(a >= b) //MAYOR O IGUAL
console.log(a <= b) //MENOR O IGUAL
console.log(a == 9) //IGUAL EN VALOR
console.log(a == "9") //IGUAL EN VALOR - OJO QUE ESTO DA TRUE
console.log(a === "9") //IGUAL EN VALOR Y TIPO DE DATO - OJO QUE ESTO DA FALSE
console.log(a === 9) //IGUAL EN VALOR Y TIPO DE DATO - OJO QUE ESTO DA FALSE
console.log(a != 9) //DISTINTO en VALOR - ESTO DA FALSE
console.log(a != "9") //DINSTITNO EN VALOR - ESTO DA FALSE
console.log(a !== "9") //DISTINTO EN VALOR Y TIPO DE DATO - ESTO DEBERIA DAR TRUE
console.log(0 == false) //ESTO DA VERDADERO

//VALORES VERDADEROS POR QUE SI
    //TODOS LOS POSITIVOS Y NEGATIVOS MENOS EL CERO
    //TODAS LAS CADENAS DE TEXTO NO VACIAS
    //TODOS LOS BOOLEAN

//VALORES NEGATIVOS POR QUE SI
    //0
    //null
    //undefined
    //NaN

//OPERADORES LOGICOS
//AND &&
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)

//OR ||
console.log(5 > 10 || 15 > 20)
console.log(5 > 10 || 15 < 20)

//not (!)
console.log(!(5 > 10 || 15 > 20))
console.log(!(5 > 10 || 15 < 20))
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 < 10 && 15 < 20))


//OPERADORES TERNARIOS
const isRaining = true
isRaining ? console.log("Esta lloviendo ") : console.log("No esta lloviendo")
