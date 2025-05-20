//MAPS - ES COMO UN DICCIONARIO CON CLAVE VALOR

//DECLARACION
let myMaps = new Map()
console.log(myMaps)

//INICIALIZACINO
let myMaps2 = new Map([
    ["name","Facundo"],
    ["lastnamet","Cores"],
    ["age",29]
])
console.log(myMaps2)


//METODOS COMUNES
myMaps2.set("alias","fcores") //AGREGA UN ELEMENTO CLAVE VALOR AL FINAL
console.log(myMaps2)
console.log(myMaps2.get("name")) //DEVUELVE EL VALOR DE UNA CLAVE
console.log(myMaps2.has("name")) //DEVUELVE UN BOOLEAN SI LA CLAVE EXISTE O NO EN EL MAPS
console.log(myMaps2.delete("alias")) //DEVUELVE UN BOOLEAN SI PUDO BORRAR O NO LA CLAVE
console.log(myMaps2.keys()) //DEVUELVE EL CONJUNTO DE CLAVES
console.log(myMaps2.values()) //DEVUELVE LOS VALORES
console.log(myMaps2.entries()) //DEVUELVE TODOS LOS ELEMENTOS
console.log(myMaps.clear()) //LIMPIA EL MAPS