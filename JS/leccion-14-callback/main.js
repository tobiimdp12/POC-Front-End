//llamar a una funcion dentro de una funcion
//aca empezamos a ver js asincrono 

//esto seria un proceso sincrono,se ejecuta una linea a la vez
function funcion1() {console.log("hola soy la funcion 1"); }
function funcion2() { console.log("hola soy la funcion 2");}


function imprimir(mensaje){console.log(mensaje);}
function imprimirDespuesDe3seg(){console.log("aparezco despues de 3 segundos");}

//aca se llama a la funcion suma y  a su vez se ejecuta a la funcion imprimir
function sumar(a,b,funcionCallback)
{
    let res=a+b;
    funcionCallback(res);
}

sumar(2,3,imprimir);//imprimir esta siendo pasada como argumento y usada en la funcion suma

//setTimeout una vez que se cumpla el tiempo estipulado se ejecuta la funcion
setTimeout(imprimirDespuesDe3seg,4000);//se ejecuta la funcion despues de 4 segundos
setTimeout(()=>console.log("saludo asincrono numero 2"),1000);
setTimeout(()=>console.log("saludo asincrono numero 3"),6000);
//setInterval segun un el tiempo que establezcamos,se ejecutara la funcion

let reloj=()=>{
    let fecha=new Date();
    console.log(fecha);
}

setInterval(reloj,1000);//se ejecuta la funcion cada 1 segundo