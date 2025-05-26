//FUNCIONES

//DECLARACION SIN PARAMETRO
function myFunc(){
    console.log(`Hola `)
}
myFunc()

//DECLARACION CON PARAMETRO
function myFunctionWhithParams(name){
    console.log(`Hola ${name}`)
}
myFunctionWhithParams(`Facundo`)

//FUNCIONES ANONIMAS
const myfunc2 = function(name){
    console.log(`Esta es una función anonima de ${name}`)
}
myfunc2("Facundo")

//FUNCIONES FLECHA
const myArrawFunction = (name) =>{
    console.log(`Hola esta es una función flecha de ${name}`)
}
myArrawFunction(`Facundo `)

//FUNCION FLECHA REDUCIDA
const myArrawFunctionRe = () => console.log(`Funcion flecha reducida`)
myArrawFunctionRe()

//VARIOS PARAMETROS
function sum(a,b){
    console.log(a+b)
}
sum(5,4)

//VARIOS PARAMETROS Y ALGUNO POR DEFAULT
function sumDefault(a,b=9){
    console.log(a+b)
}

sumDefault(3)

//RETORNO DE VALORES
const funcionRetorno = (a,b) =>{
    return a*b
}

console.log(funcionRetorno(5,5))

//FUNCIONES ANIDADAS
function externa(){
    console.log("Funcion externa")
    function interna(){
        console.log("Funcion interna")
    }
    
}
externa()

//FUNCIONES DE ORDEN SUPERIOR - SON FUNCIONES QUE RECIBEN COMO PARAMETRO OTRA FUNCION
function applyFunc (func,param){
    func(param)
}
applyFunc(myArrawFunction,"Funcino de orden superior")


//FOR ECH
myArray = [1,3,4,343,43,3,434,3434]
myArray.forEach((value)=> console.log(`${value}`))
//OTRA FORMA DE ESCRIBIRLO
myArray.forEach(function (value){
     console.log(`${value}`)
    })