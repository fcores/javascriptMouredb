//SET - NO PERMITE VALORES DUPLICADOS PERO SI LOS MANTIENE ORDENADOS

//DECLARACION
let mySet = new Set() //CREAR UN CONJUNTO SIN INICIALIZACION
console.log(typeof(mySet))
let mySet2 = new Set(["Facundo","Cores",1,23,4,43,3,23,23]) //CREAR UN CONJUNTO CON INICIALIZACION
console.log(mySet2)

//METODOS COMUNES
mySet.add("Facundo") //AGREGAR ELEMENTOS
console.log(mySet)
mySet2.delete("Facundo") //NO TENEMOS ACCESO A LOS INDICES SI QUEREMOS BORRAR ALGO LE TENEMOS QUE PASAR EL DETALLE DEL ELEMENTO
console.log(mySet2)
console.log(mySet2.delete("Cores")) //BORRA Y DEVUELVE UN BOOLEAN SI PUDO BORRAR EL ELEMENTO

//HAS
console.log(mySet2.has(1)) //DEVUELVE TRUE O FALSE DE ACUERDO A SI EL ELEMENTO EXISTE O NO

//SIZE
console.log(mySet2.size) //DEVUELVE LA CANTIDAD DE ELEMENTOS

//CONVERTIR UN SET EN UN ARRAY
let myArray = Array.from(mySet2)
console.log(myArray)

//CONVERTIR UN ARRAY EN UN SET
let mySetArray = new Set(myArray)
console.log(mySetArray)

