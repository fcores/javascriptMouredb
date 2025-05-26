//RECURSIVIDAD

//LA FUNCION RECURSIVA SE TIENE QUE PODER CORTAR
function myFunction(){
    myFunction()
}
//myFunction()


//FACTORIAL
function factorial(n){
    if(n===1){
        return 1
    }
    return n* factorial(n-1)

}

console.log(factorial(20))