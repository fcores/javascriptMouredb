//IIFE (EXPRESION DE FUNCION INVOCADA INMEDIATAMENTE)

//IIFE CLASICO - ESTO IDEALMENTE TIENE QUE ESTAR EN UN MODULO SINO NECESITA UN ; EN CUALQUIER CODIGO ANTERIOR
(function(){
    console.log("IIFE clasico")
})();

(()=>{
    console.log("IIFE clasico con arroFunction")
})()