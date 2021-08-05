let contador=0;
while(contador<10)
{
    console.log(contador);
    contador++;
   
}
console.log(contador);
do
{
    console.log(contador);

    contador--;
}while(contador>0);
console.log(contador);

arreglito=["tobias","selva","papo"];
let i=0;
for(i=0;i<arreglito.length;i++)
{
    console.log(arreglito[i]);
}
//aplicando break[se rompe el bucle cuando el valor del subindice es papo]
for(i=0;i<arreglito.length;i++)
{
    if(arreglito[i]=="papo")break;
    console.log(arreglito[i]);
}

//aplicando continue[pasamos a la siguiente linea y no mostramos a papo]
for(i=0;i<arreglito.length;i++)
{
    
    if(arreglito[i]=="papo")continue;
  
    console.log(arreglito[i]);
    
}


//aplicando labels[va a ir a la etiqueta inicio si el valor del subindice de arreglito es papo]
inicio:
for(i=0;i<arreglito.length;i++)
{
    
    if(arreglito[i]=="tobias")continue inicio;
    //break inicio:directamente no itera el arreglo
  
    console.log(arreglito[i]);
    
}
console.log("sali");
