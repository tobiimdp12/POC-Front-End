//promesas:tiene dos posibles resultados,el codigo se cumple(resolved(.then) o sino sera rechazada(.catch))
//hasta que no se cumpla ninguno de esos casos esta en estado pendiente
//                       funcion callback
let miPromesa=new Promise((resolver,rechazar)=>{
    let expresion=false;
    if(expresion)
    {
        resolver("todo bien");
    }else
    {
        rechazar("todo mal");
    }
});

let promesa2=new Promise((resolver)=>
{
    setTimeout(()=>resolver('saludos con promesa y timeout'),3000);
});
/**formas de declarar una promesa*/
//miPromesa.then(valor=>console.log(valor),error=>console.log(error));
miPromesa
.then(valor=>console.log(valor))
.catch(error=>console.log(error));
promesa2.then(valor=>console.log(valor));

//async se usa para definir que una funcion va a retornar una promesa

async function miFuncionConPromesa ()
{
    return 'saludos con promesa y async';
}

miFuncionConPromesa().then(valor=>console.log(valor));

async function miFuncionConPromesaYawait()
{
    let miPromesa=new Promise(((resolver)=>{resolver("hola soy una promesa con await");}));

    //await se puede usar dentro de una funcion declarada async
    console.log(await miPromesa);//se espera por el resultado
}

miFuncionConPromesaYawait();