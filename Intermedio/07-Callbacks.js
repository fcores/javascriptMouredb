//A UNA FUNCION LE PASAMOS OTRA FUNCION COMO PARAMETRO
function sum(...numbers){ //ESTE LO EMPAQUETA
    let resultado=0
    for (let valor of numbers){
        resultado = valor + resultado
    }
    return resultado
}

//PROCESS DATA SOLO SUMA Y LLAMA A UNA CALLBACK
function processData(data,callback){
    const result = sum(...data)
    callback(result)
}

//LA CALLBACK 1 SOLO MUESTRA UNA PARTE
function processResult(result){
    console.log(result)
}


//LA CALLBACK 2 TIENE UN TEXTO DISTINTO DE LA 
function processResult2(result){
    console.log(`Mi resultado es: ${result}`)
}

//FIAJATE COMO LA FUNCION RECIBE MISMO PARAMETRO Y DISTINTAS CALLBACK
processData([1,2,3],processResult)
processData([1,2,3],processResult2)
processData([1,2,3],(result)=>{console.log(`Mi resultado con arrow function es ${result}`)})