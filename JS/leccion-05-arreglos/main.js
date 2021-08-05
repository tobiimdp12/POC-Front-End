//FORMAS DE DECLARAR UN ARREGLO
//let autos=new Array("BMW","MERCEDES BENZ");FORMA ANTIGUA DE DECLARAR UN ARREGLO
//const porque el espacio del arreglo/lista en memoria no cambia su contenido si
const autos=["peugeot","bmw","volvo"];
console.log(autos);
autos[2]="x";
console.log(autos);
autos.push("p");//añadir un elemento

//tambien podemos agregar un elemento de la siguiente forma
autos[autos.length]="z";

//otra forma if(autos instanceof Array)
if(Array.isArray(autos))
{
    for(let i=0;i<autos.length;i++) {
        console.log("indice "+i+" : "+autos[i]);
    }
}


