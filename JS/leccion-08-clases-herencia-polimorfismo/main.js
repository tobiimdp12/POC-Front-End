//no podemos instanciar un objeto antes definir la clase

//todas las clases heredan de object

class Persona
{
    constructor(nombre,apellido)
    {
        this.nombre=nombre;
        this.apellido=apellido;
    }

    get obtenerNombre()
    {
        return this.nombre;
    }
    set cambiarNombre(nuevoNombre)
    {
        this.nombre=nuevoNombre;
    }

    get obtenerApellido()
    {
        return this.apellido;
    }
    set cambiarApellido(nuevoApellido)
    {
        this.apellido=nuevoApellido;
    }
    nombreCompleto()
    {
        return this.nombre+" "+this.apellido;
    }
    //sobreescribiendo el metodo de la clase padre(Object)
    toString()
    {
        //luego en base al tipo de objeto actuara distinto.(polirmorfismo)
        return this.nombreCompleto();
    }
}

class Empleado extends Persona
{
    constructor(nombre,apellido,departamento)
    {
        super(nombre,apellido);
        this.departamento=departamento;
    }

    get obtenerDepartamento()
    {
        return this.departamento;
    }
    set cambiarDepartamento(nuevoDepartamento)
    {
        this.departamento=nuevoDepartamento;
    }
    //sobreescritura de este metodo
    nombreCompleto()
    {
        return super.nombreCompleto()+" "+this.departamento;
    }
}


let persona1=new Persona("tobias","selva");
let persona2=new Persona("lila","selva");
let persona3=new Empleado("lila","selva","IT");

persona1.cambiarNombre="pedro";
//aca podemos ver como se aplica el polirmorfismo,ya que una misma funcion actua de forma
//distinta segun el objeto(la funcion en este caso es toString)
console.log(persona1.toString());
console.log(persona3.nombreCompleto());
console.log(persona3.toString());
