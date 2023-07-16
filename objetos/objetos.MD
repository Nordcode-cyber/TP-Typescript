                      Los objetos en typescript 
     los objetos son una estructura de datos muy usada en JavaScript que consiste en pares clave-valor.
    Pueden declararse con una sintaxis implícita o explícita.
    Es recomendable usar una sintaxis explícita y dejar que typescript infiera los tipos de datos
    que se usan en el objeto.
    Ya no es posible añadir directamente propiedades a un objeto ni acceder a propiedades que
    mo existen sin que antes el editor te lance un error.

    En TypeScript un objeto se escribe exactamente igual que en JavaScript, pero con una gran diferencia en cuanto a funcionalidad:
    const perro = {
   nombre:"Boby",
   edad:5,
}
    Este objeto tiene una estructura implícita que TypeScript hace que el dev deba respetar, podemos ver que el objeto solo tiene 2 propiedades: nombre de tipo string y edad de tipo number.

                        Accediendo a propiedades que no existen
En Javascript al intentar acceder a un propiedad inexistente de un objeto obtenemos un undefined:
const perro = {
  nombre:"Boby",
  edad:5,
}

console.log(perro.nombre); // "Boby"
console.log(perro.sexo); // undefined
En Typescript al intentar acceder a un propiedad inexistente de un objeto obtenemos:
    const perro = {
  nombre:"Boby",
  edad:5,
}
perro.sexo = "macho"
Property 'sexo' does not exist on type '{ nombre: string; edad: number; }'.

Nos indica que el el objeto perro nunca declaramos una propiedad sexo, por ello no es posible agregarla.
Del mismo modo no tendremos un error similar si intentamos acceder a una propiedad que no existe.

                                    Conclusiones
Los objetos en typescript pueden declararse con una sintaxis implícita o explícita.
Es recomendable usar una sintaxis explícita y dejar que typescript infiera los tipos de datos que se usan en el objeto.
Ya no es posible añadir directamente propiedades a un objeto ni acceder a propiedades que no existen sin que antes el editor te lance un error.




