//constructor de la clase persona
function Persona(nombre,apellido,dni)
{
    this.nombre=nombre;
    this.apellido=apellido;
    this.dni=dni;
    this.nombreCompleto=function(titulo,direccion)
    {
        return titulo+":" + this.nombre+" "+this.apellido+" "+direccion;
    }
}

let perro2={

    nombre:"roman",
    apellido:"pepito"
}

let padre=new Persona("tobias","selva",23);
let hijo=new Persona("x","x",2);
//agregar una propiedad o un metodo a todos los objetos del tipo persona
//se puede modificar pero hay que agregar una nueva linea de codigo
Persona.prototype.tel=43434;
Persona.prototype.miNombre=function(){return this.nombre};

console.log(padre);
console.log(hijo.miNombre());

//ahora usemos el metodo call,con este mismo podemos llamar al metodo de persona y usarlo
//con los datos de perro1
console.log(padre.nombreCompleto.call(perro2,"Tec","Uruguay"));

let arreglo=["ing","mi casa"];
//ahora usemos el metodo apply,con este mismo podemos llamar al metodo de persona y usarlo
//con los datos de perro1
console.log(padre.nombreCompleto.apply(perro2,arreglo));
let persona=
{
    nombre:"tobias",
    apellido:"selva",
    edad:19,
    idioma:"es",
   
    get obtenerIdioma()
    {
        return this.idioma.toUpperCase();
    },
    set setearLenguaje(lang)
    {
        this.idioma=lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre +" "+ this.apellido;
    },
    modificandoEdad: function(nuevaEdad){
        this.edad=nuevaEdad;
    }
}

//como decimos que vamos a obtener un dato
//no es necesario agregarle los parentesis
console.log(persona.modificandoEdad(10));
console.log(persona.nombreCompleto);
console.log(persona.obtenerIdioma);
persona.setearLenguaje="en";
console.log(persona.obtenerIdioma);


//new: reservar espacio en memoria
let perro=new Object();
perro.nombre="roman";
perro.duenio="pedro";

//formas de acceder a los atributos de un objeto
console.log(persona.nombre);
console.log(perro["nombre"]);

//aniadir un atributo
persona.tel="234234234";

//eliminar un atributo
delete persona.apellido;

//formas de mostrar un objeto
console.log(persona);

console.log(persona.nombre+" "+persona.edad+" "+persona.telefono);
//for in[recorrer un objeto]
for( nombrePropiedad in persona)
{
    console.log(nombrePropiedad);

    console.log(persona[nombrePropiedad]);
}
//nos regresa un arreglo con los atributos del objeto
let personaArray=Object.values(persona);
console.log(personaArray);

let personaString=JSON.stringify(persona);
console.log(personaString);