let resultado=sumarTodo(2,4,6,6,7,8);//concepto de hosting

console.log(resultado);
function sumarTodo()
{
    let suma=0;
    for(let i=0;i<arguments.length;i++)
    {
        suma+=arguments[i];
    }
    return suma;
}
//una funcion es un objeto
//si como argumento no pasamos un valor pasa a ser undefined
function myFuncion(a=0,b=2)//a=0 valor default
{
    a=5;
    console.log(arguments.length);//solo se puede usar dentro de la funcion
    console.log(arguments[0]);
    //no tienen que coincidir si o si la cantidad
    //de parametros con argumentos 
    console.log(arguments[2]);
    return a+b;
}

let miFuncionEnTexto=myFuncion.toString();
console.log(miFuncionEnTexto);
let a=2;//como es una variable primitiva solo podemos pasar su valor
resultado=myFuncion(a,3,5);
console.log(resultado);
const comida =//comida almacena el valor de referencia del objeto
{
    nombre:"carne",
    precio:100
}

function cambiandoPrecio(c1)
{
    c1.precio=200;
}


cambiandoPrecio(comida);

console.log(comida);
//declaracion de una funcion "expresion" lambda

let x=function(a,b){return a+b};
console.log(x(2,3));

//funcion que se autollama

(function(a,b) {console.log("me estoy ejecutando "+(a+b));})(2,3);

//funciones flecha[a partir de ecmascript6]
//no hay que usar function ni return

const sumarFuncionFlecha=(a,b)=>a+b;
let resultado2=sumarFuncionFlecha(2,3);
console.log(resultado2);