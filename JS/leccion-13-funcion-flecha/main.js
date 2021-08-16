let miFuncion=function ()
{
    console.log("hola");
    
}

function retornaValor(a,b)
{
    let resultado=a+b;
    return resultado;
}
//con una funcion flecha no se aplica el concepto de hosting
//const miFuncionFlecha=()=>{
//    console.log("hola desde la funcion flecha");
//}

const miFuncionFlecha=()=>console.log("hola desde la funcion flecha");//como es una linea de codigo no es necesario agregar {}

const retornarObjecto=()=>({nombre:"tobias",apellido:"selva"})//se ponene parentesis porque es un objeto

//const funcionConParametros=(nombre)=>{console.log("hola "+nombre)} al tener un solo parametro se pueden omitir los parentesis
const funcionConParametros=nombre=>console.log("hola "+nombre)
miFuncion();
let val=retornaValor(2,3);
console.log(val);
console.log(retornarObjecto());
miFuncionFlecha();