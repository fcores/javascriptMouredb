//BUCLES

//FOR
for (let i=0;i<5;i++){
    console.log(`Hola ${i}`)
}

const numbers = [1,2,3,4,5]
for (let i=0; i <numbers.length;i++){
    console.log(`Elemento: ${i}`)
}

//WHILE
let i  = 0
while (i<5){
    console.log(`Hola ${i}`)
    i++
}

//DO WHILE - SE EJECUTA AL MENOS UNA VEZ AUN QUE LA CONDICION DEL WHILE NO SEA VALIDA
i = 0
do{
    console.log(`Hola esto es un do while ${i}`)
    i++
} while(i<5)

//FOR OF

let myMaps2 = new Map([
    ["name","Facundo"],
    ["lastnamet","Cores"],
    ["age",29]
])

let mySet2 = new Set(["Facundo","Cores",1,23,4,43,3,23,23])




for (let valor of mySet2) {
    console.log(`Iteración con el for OF. ${valor}`)
}

for (let valor of myMaps2.values()) {
    console.log(`Iteración con el for OF. ${valor}`)
}

//BUENAS PRACTICAS

//EVITAR BUCLES INFINITOS

//BREAK CONTINUE
i = 0
while (i<5){
    if(i==1){
        i++
        continue
    }
    console.log(`Hola ${i}`)
    i++
}