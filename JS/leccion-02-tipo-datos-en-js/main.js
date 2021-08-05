//cuando declaramos variables hay que usar let y no var por buenas practicas
//se puede declarar variables sin var let const pero es una mala practica
//EN JS SE USA CAMELCASE
//se puede iniciar variables de forma correcta con letras _ o $
let nombre="4";
let px=4;
// ? === corrobora si las variables son lo mismo incluyendo en tipo 
//?  == lo mismo pero no le importa el tipo
console.log(px==nombre);
const dni=343243423;

console.log(nombre);

let c,y,p;
c=30;
y=10;
p=c+y;
console.log(p);
var objeto=
{
    nombre:"Tobias",
    apellido:"Selva",
    edad:19
}

console.log(objeto);
console.log(typeof(nombre));

//tipo de dato funcion

function myFuncion()
{

}
console.log(typeof(myFuncion));

//tipo de dato simbolo[mini constante]
var simbolo=Symbol("tobi");

console.log(typeof(simbolo));

//undefined[tipo de dato=undefined],sin definir o tambien se puede
//asignar el valor undefined a una variable
//null ausencia de valor[tipo object]
var autos=["bmw","audi","zentorno"];//es del tipo de dato object
console.log(autos);

var z="";//empty string
console.log(z);
console.log(typeof(z));//tipo string

//los parentesis son necesarios si los numeros estan despues de el string
var x=(219+3)+"tobias";
console.log(x);
console.log(typeof(x));
var edad=19;
if(edad>18)
{
    console.log("sos mayor de edad");
}else
{
    console.log("no sos mayor de edad");
}

//?| operador terniario
//condicion si se cumple la condicion |sino hago esto
let resultado=(3>2)?"se cumplio" :"no se cumplio la condicion";
console.log(resultado);

//codigo para saber si un numero es par o impar

let dato=8;
let _resultado=(dato%2==0)?"es par" :"es impar";
console.log(_resultado);

//convertir de String a Number

let miNumero="10";

let edadd=Number(miNumero);

if(isNaN(edadd))
{
    console.log("input incorrecto");
}else
{
    let _resultado=(edadd>=16)? "tenes la edad suficiente para votar":"NO tenes la edad suficiente para votar";
    
    console.log(_resultado);
    
}

//NaN=Not a Number
console.log(isNaN(edadd));


//para finalizar esta unidad

let q=4;
let w=4;
//      pre ecremento ++q[incrementa primero el valor de q]
//      decremento w--[decrementa el valor de w]

let res= ++q * w--;
//da 20 porque a w luego de la multiplicacion resta 1
console.log(res);

//precedencia entre * y /             pri
//se resuelve  el que este primero 2+(4*6)/4;