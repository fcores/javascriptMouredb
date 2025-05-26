//DESTRUCTURACION
let myArray = [1,2,3,4,5]
let person = {
    name: "Facundo",
    age: 43,
    alias:"fcores"
}

let person3 = {
    name: "Facundo",
    age: 43,
    alias:"fcores",
    walk: function(){console.log(`La persona ${this.name} camina`)},
    job:{
        name:"Programador",
        exp:15,
        work: function (){
            console.log("La persona trabaja")
        }
    }
}

let [myValueA, myValueB] = myArray
console.log(myValueA)

//ASIGNAR VARIABLES POR DEFECTO
let [myValue1,myValue2,myValue3,myValue4,myValue5,myValue6 = 0,myValue7 = 0] = myArray
console.log(myValue1)
console.log(myValue2)
console.log(myValue3)
console.log(myValue4)
console.log(myValue5)
console.log(myValue6)
console.log(myValue7)
console.log(myArray)

//ASIGNAR VARIABLES SALTEADAS
let [myValue10,,,myValue11,,myValue14 = 0,myValue25 = 0] = myArray
console.log(myValue10)
console.log(myValue11)
console.log(myValue14)
console.log(myValue25)


//DESESTRUCTURAR OBJETOS - SOLO DESESTRUCTURA EN FUNCION DEL NOMBRE DE LA CLAVE
let {name,age,alias} = person
console.log(name,age,alias)

//SI QUIERO CREAR NUEVOS NOMBRES DE VARIABLES
let {name:name1,age:age1,alias:alias1} = person
console.log(name1,age1,alias1)


let {name : name4, job:{name:jobname}} = person3
console.log(name)
console.log(jobname)

//PROPAGACION (...)
let myArray2 = [...myArray] //COPIA

let myArray3 = [...myArray,5,67] //COPIA CON AGREGADOS

//COMBINACION DE ARRAYS
let myArray4 =[...myArray,...myArray2,...myArray3]

//PROPAGACION DE OBJETOS
let person4 = {...person3,email:"facundo.cores"}
console.log(person4)