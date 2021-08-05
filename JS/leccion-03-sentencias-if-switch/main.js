//ejercicio 1
let mes="agosto";
let estacion;
switch(mes) {

    case "marzo": case  "abril": case "mayo":
        estacion="invierno";
    break;
    case "junio": case  "julio": case "agosto":
        estacion="Primavera";
    break;
    case "septiembre": case  "octubre": case "noviembre":
        estacion="otoño";
    break;
    case"diciembre": case  "enero": case "febrero":
        estacion="veranito";
    break;
    default: estacion="mes incorrecto";
}

console.log(estacion);


//ejercicio 2

/*
6am-11am-Buenos Dias
12pm-18pm-Buenas Tardes
19pm-24pm-Buenas Noches
0am-6am -Durmiendo
*/ 
let hora=13;


if(hora>=6&&hora<=11) 
{
    console.log("Buenos Dias");
}else if(hora>=12&&hora<=18)
{
    console.log("Buenos Tardes");
}
else if(hora>=19&&hora<=24)
{
    console.log("Buenos Noches");
}
else if(hora>=0&&hora<=6)
{
    console.log("Haciendo NoNi");
}else
{
    console.log("Que hora ingresastes?");
}