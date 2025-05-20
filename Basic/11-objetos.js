//OBJETOS

let person = {
    name: "Facundo",
    age: 43,
    alias:"fcores"
}

//ACCESO A PROPIEDADES
console.log(person.age) //POR NOTACION DEL PUNTO
console.log(person["name"]) //POR CORCHETES
console.log(person["age"])

//MODIFICACION DEL VALOR
person.name = "PEDRO"
console.log(person.name)
//MODIFICACION DEL TIPO DE DATO Y VALOR
person.age = "37"
console.log(typeof(person["age"]))

//BORRAR UNA PROPIEDAD
delete person.age
console.log(person)

//AGREGAR UNA PROPIEDAD
person.email = "facundo.cores@gmial.com"
console.log(person)


//METODOS
let person2 = {
    name: "Eduardo",
    age: 43,
    alias:"fcores",
    walk: function(){console.log(`La persona ${this.name} camina`)}
}
person2.walk()

//AGREGAR NUEVOS OBJETOS
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

person3.job.work()


//IGUALDAD DE OBJETOS
let person4 = {
    name: "Facundo",
    age: 43,
    alias:"fcores"
}

let person5 = {
    name: "Facundo",
    age: 43,
    alias:"fcores"
}

console.log(person4 == person5) //DA FALSE POR QUE LA DIRECCION DE MEMORIA DE LOS DOS ES DISTINTA

//ITERACION
for (let key in person4){
    console.log(key + ": " + person4[key])
}

//FUNCIONES COMO OBJETOS - ESTO NO SE DEBE USAR
function Person(name,age){
    this.name = name
    this.age = age
}
let person7 = new Person("Facundo",37)
console.log(person7.name)