//CODIGO DE STRING


//CONCATENACION
let myName = "Facundo"
let greeting = "Hola, " + myName

console.log(greeting)

//LONGITUD
console.log(myName.length)

//ACCESO A CARACTERES
console.log(myName[0])

//METODOS COMUNES
console.log(greeting.toUpperCase())
console.log(greeting.toLocaleLowerCase())
console.log(greeting.indexOf("Fa    cundo"))
console.log(greeting.includes("Facundo"))
console.log(greeting.includes("Pedro"))
console.log(greeting.slice(0,4))
console.log(greeting.replace("Hola", "Chau"))

//TEMPLATE LITERAL
let message = `Hola como estas
mi nombre es Facundo`
console.log(message)


//INTERPOLACION DE VARIABLES
console.log(`Hola mi nombre es ${myName}`)
