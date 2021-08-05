//static

class Persona
{
    static contadorPersonas=0;//se accede solo desde la clase
    //metodo estatico solo lectura
    static get MAX_OBJ()
    {
         return 5;
    }
    email="tobiasselva@gmail.com";//se accede solo desde el objeto
    constructor(nombre,apellido)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        //esta variable tambien se va a incrementar 
        //si se instancia una clase hija
        if(Persona.contadorPersonas<Persona.MAX_OBJ)
        {
            this.idPersona=++Persona.contadorPersonas;
        }else

        {
            console.log("hay muchos objetos");
        }
       
    }

    static saludar(_nombre)
    {
        console.log("hola "+_nombre+"!");
    }

  
}

let persona1=new Persona("tobias","selva");
let persona2=new Persona("tobias","selva");
let persona3=new Persona("tobias","selva");
let persona4=new Persona("tobias","selva");
let persona5=new Persona("tobias","selva");

console.log(Persona.contadorPersonas);
Persona.saludar("tobias");//al ser un metodo estatico no se tiene que invocar desde la clase
