//CLASES - PLANTILLAS DE OBJETOS


let person1 = {
    name: "Facundo",
    age: 43,
    alias:"fcores"
}

//ASI SE CREA UNA CLASE CON UN CONSTRUCTOR
class Person{
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person = new Person("Facundo",37,"fcores")
console.log(person)

//VALORES POR DEFECTO
class DefaulPerson{
    constructor(name = "NOMBRE POR DEFECTO",age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }
}

let person2 = new DefaulPerson()
console.log(person2)

//ACCESO A PROPIEDADES
console.log(person2.name)

//FUNCIONES
class PersonWithMethod{
    constructor(name,age,alias){
        this.name = name
        this.age = age
        this.alias = alias
    }

    walk(){
        console.log("LA PERSONA CAMINA")
    }
}

let person4 = new PersonWithMethod("Facundo",37,"fcores")
person4.walk()

//PRIVADOS
class PersonWithMethodPrivateProperty{

    #bank //PROPIEDAD PRIVADA 
    constructor(name,age,alias,bank){
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

    walk(){
        console.log("LA PERSONA CAMINA")
    }
}

//GETTER Y SETTERS
class PersonWithMethodPrivate{

    #bank //PROPIEDAD PRIVADA
    #age
    #alias
    #name
    constructor(name,age,alias,bank){
        this.#name = name
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    }
    get name (){
        return this.#name
    }

    get bank (){
        return this.#bank
    }

    set bank(bank){
        this.#bank = bank 
    }

    walk(){
        console.log("LA PERSONA CAMINA")
    }
}

let person8 = new PersonWithMethodPrivate ("Facundo",37,"fcores","349588934")

console.log(person8.name) //ME PERMITE LEER EL NOMBRE
console.log(person8.bank)
person8.bank =4543535435 //PARA HACER UN SETTER TENGO QUE TENER EL METODO SET
console.log(person8.bank)


