//ARROW FUNCTION AVANZADAS

//RETORNO IMPLICITO
const multiplicacion = (a,b) => a*b
console.log(multiplicacion(4,5))


//this lexico
const handler = {
    name:"fcores",
    greeting: function(){
        console.log(`Hola ${this.name}`)
    },
    arrowGreeting:()=> {
        console.log(`Hola ${this.name}`) //OJOOOOO PORQUE LAAS ARROW FUNCION DENTRO DE UN OBJETO CREAN SU PROPIO CONTEXTO
    }
}


handler.greeting() //DEVUELVE FCORES
handler.arrowGreeting() //DEVUELVE UNDEFINID