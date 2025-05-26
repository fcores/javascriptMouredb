//MANEJO DE EXCEPCIONES

//CON BLOQUE TRY CATCH
let myObject
try{
    console.log(myObject.name)
}catch{
    console.log("Se dio un error")
}

//CAPTURA DEL ERROR
try{
    console.log(myObject.name)
}catch(error){
    console.log("Se dio un error: ", error.message)
}


//FINALLY
try{
    console.log(myObject.name)
}catch(error){
    console.log("Se dio un error: ", error.message)
}finally{
    console.log("ESTE CODIGO SE EJECUTA SI O SI")
}

//LANZAR ERRORES
function sumInteger(a,b){
    if(typeof a !== "number" || typeof b !== "number"){
        throw new TypeError("Esta operacion solo suma numeros")
    }


    if (!Number.isInteger(a) || !Number.isInteger(b)){
        throw new Error("Esta operación solo suma numeros enteros")
    }

    if ( a === 0 || b === 0){
        throw new SumZeroIntegerError("Esta operación no permite ingresar con ceros",a,b)
    }
    return a+b
}

try{
    console.log(sumInteger("5",3))
}catch(error){
    if (error instanceof TypeError){
        console.log("El error que se dio es: ", error.message)
    }else if (error instanceof Error){
        console.log("Se dio el siguiente error: ", error.message)
    }else if(error instanceof SumZeroIntegerError){
        console.log("Se dio el error: ", error.message)
    }
    
}

//EXECPCIONES PERSONALIZADAS

class SumZeroIntegerError extends Error {
    constructor(message,a,b){
        super(message)
        this.a = a
        this.b = b
    }

    printNumber(){
        console.log(this.a , "  +  ",this.b)
    }
}

try{
    console.log(sumInteger(0,10))
}catch (error){
    console.log("Se ha producido un error personalizado", error.message)
    error.printNumber()
}