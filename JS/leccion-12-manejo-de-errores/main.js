"use strict";

let num="";
//chequear si una var es u numero
try
{
    if(isNaN(num)||num==="")
    {
     throw'hey no es un numero o esta vacio';   
    }
}catch(error)//si ocurre un error del que nos podemos levantar lo capturamos
{
    console.log(error);//luego lo mostramos
}finally//este bloque se ejecuta siempre
{
    console.log("saliendo del try-catch")

}
