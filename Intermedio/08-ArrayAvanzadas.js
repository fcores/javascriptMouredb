//ESTRUCTURAS AVANZADAS DE ARRAY




//METODOS

//FOR EACH
let numbers = [1,2,3,4,5]
numbers.forEach(elemento => console.log(elemento))

//MAP - ME PERMITE APLICARLE UNA FUNCION A CADA UNO DE LOS ELEMENTOS Y DEVOLVER UN NUEVO ARRAY
let myArrayDuplicado = numbers.map(elemento => elemento*2)
console.log(myArrayDuplicado)

//FILTER
let pares = numbers.filter(elemento => elemento%2 ===0)
console.log(pares)

//REDUCE - SUMA LOS VALORES 
let sum = numbers.reduce((result,current)=> result + current,0)
console.log(sum)

//FLAT APLANA EL ARRAY HASTA LLEGAR A UNA UNICA DIMENSION
let aplanarArray = [1,[2,[4,[3,4]]]]
let flatArray = aplanarArray.flat(3)
console.log(flatArray)

//FLATMAP - DESCOMPONE LA CADENA DE TEXTO EN CADA UNO DE SUS COMPONENTE
let phrases = ['Hola mundo','adion mundo']
let words = phrases.flatMap(phrases => phrases.split(''))
console.log(words)

//SORT
let unsorted = [3,4,5,6,10]
console.log("🚀 ~ unsorted:", unsorted)
let sorted = unsorted.sort()
console.log("🚀 ~ sorted:", sorted)



