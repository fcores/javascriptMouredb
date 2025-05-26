//CONSOLE

//log
console.log("Hola")


//error
console.error("Es es un mensaje de error", new Error("Conexión fallida"))


//warn
console.warn("Es es un mensaje de advertencia")

//info
console.info("Es es un mensaje de info")

//table
let data = [
    ["Facu",1],
    ["Julu",2]
]

console.table(data)

//group
console.group("usuario")
console.log("NOmbre: Facundo")

//time
console.time("Tiempo de ejecución 1")

for (let i=0;i<1000;i++){
    
}

console.time("Tiempo de ejecución 2")
for (let i=0;i<1000;i++){
    
}

console.timeEnd("Tiempo de ejecución 1")
console.timeEnd("Tiempo de ejecución 2")

//assert
let age = 17
console.assert(age >=18,"El usuario debe ser mayor")

//count
console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

