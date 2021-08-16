"use strict";

class Empleado
{
    constructor(nombre,sueldo)
    {
        this.nombre=nombre;
        this.sueldo=sueldo;
    }
    obtenerDetalle()
    {
        return `Empleado Nombre ${this.nombre} Sueldo ${this.sueldo}`;
    }
    get _nombre()
    {
        return this.nombre;
    }
    set _nombre(nuevoNombre)
    {
        this.nombre=nuevoNombre;
    }

    get _sueldo()
    {
        return this.sueldo;
    }
    set _sueldo(nuevoSueldo)
    {
        this.sueldo=nuevoSueldo;
    }
}

class Gerente extends Empleado
{
    constructor(nombre,sueldo,departamento)
    {
        super(nombre,sueldo);
        this.departamento=departamento;
    }

    obtenerDetalle()
    {
        return`Gerente-> ${super.obtenerDetalle()} +  Departamento ${this.departamento}`;
    }

    get _departamento()
    {
        return this.departamento;
    }
    set _departamento(nuevoDep)
    {
        this.departamento=nuevoDep;
    }

}


let gerente=new Gerente("tobias",2,"sistemas");
let empleado=new Empleado("tobias",2);


function determinarTipo(tipo)//si el parametro tiene declarado el metodo obtenerDetalle() funcionara correctamente
{
    //aca se esta aplicando el polimorfismo.Ya que una actua diferente segun la ocacion 
    console.log(tipo.obtenerDetalle());

    //al enlazar los if solo nos muestra un su clase directa,es decir si es gerente solo imprime Hey soy un gerente

    if(tipo instanceof Gerente)
    {
        console.log("Hey soy un gerente");
        console.log(tipo.departamento);
    }else if(tipo instanceof Empleado)
    {
        console.log("Hey soy un empleado o tengo como padre una clase empleado");
    }else if(tipo instanceof Object)
    {
        console.log("Hey todos los objetos somos hijos de object >:)");
    }

}

determinarTipo(empleado);
determinarTipo(gerente);
