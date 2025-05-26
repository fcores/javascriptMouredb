//CONDICIONALES

// IF (si) y ELSE
let age = 37
if (age >9){
    //BLOQUE
    console.log(`La edad es mayor a 9. Es ${age}`)
}else{
    console.log(`La edad no es mayor a 9. Es ${age}`)
}

//ELSE IF
let age2 = 2
if (age2 >9){
    //BLOQUE
    console.log(`La edad es mayor a 9. Es ${age2}`)
}else if(age2<18){
    console.log(`El usuario es menor de edad. Es ${age2}`)
}else{
    console.log("Bloque por defecto")
}

//CONDICIONAL CON OPERADOR TERNARIO
age2 <18 ? `El usuario es menor de edad. Su edad es ${age2}` : `El usuario es mayor de edad`
//TAMBIEN PODEMOS ASIGNAR EL RESULTADO A UNA VARIABLE
const message = age2 <18 ? `El usuario es menor de edad. Su edad es ${age2}` : `El usuario es mayor de edad`
console.log(message)


//SI TENEMOS UNA UNICA VARIABLE CONTRA MUCHAS CONDICIONES
let day = 0
let dayName

switch(day){
    case 0:
        dayName = `Lunes`
        break
    case 1:
        dayName = `Martes`
        break
    case 2:
        dayName = `Miercoles`
        break
    case 3:
        dayName = `Jueves`
        break
    default:
        dayName = `Numero de dia incorrecto`
}

console.log(dayName)
