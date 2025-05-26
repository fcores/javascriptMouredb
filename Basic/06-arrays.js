//ARRAY

//DECLARACION
let array = [] //SE RECOMIENDA ESTA
let array2 = new Array()

//AGREGADO DE ELEMENTOS
array.push(1)
array = ["PRIMER ELEMENTO"]
array[1] = "SEGUNDO ELEMENTO"
console.log(array)

//METODOS COMUNES
myArray = []
myArray.push("FACUNDO")
console.log(myArray)
console.log(myArray.pop()) //ELIMINA Y DEVUELVE EL ULTIMO ELEMENTO
console.log(myArray)
myArray.push("Facundo")
myArray.push("Cores")
console.log(myArray.shift()) //ELIMINA EL PRIMER ELEMENTO
console.log(myArray)
myArray.unshift("NUEVO ELEMENTO 1","NUEVO ELEMENTO 2") //AGREGA ELEMENTOS AL INICIO DEL ARRAY
console.log(myArray)
console.log(myArray.length) //DEVUELVE LA CANTIDAD DE ELEMENTOS
myArray =[] // PERMITE VACIAR TODO EL ARRAY
myArray.push(1,3,4,4,55,5,43,2,24,543,2,"FACUNDO")
myArrayNuevo = myArray.slice(1,4) //PERMITE GENERAR UN NUEVO ARRAY CON UNA PORCION DEL ANTERIOR
console.log(myArrayNuevo)
myArray.splice(1,4) //ELIMINA UNA PORCION DEL ARRAY
console.log(myArray)
