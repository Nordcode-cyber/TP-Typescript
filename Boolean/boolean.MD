#                                              Boolean

En TypeScript, boolean funciona igual que en JavaScript, pero con la ventaja de que el compilador verifica,
 el tipo en tiempo de compilación y evita asignaciones incorrectas, como intentar guardar un número o una cadena,
  en una variable declarada como boolean.
En TypeScript, el tipo de dato boolean representa un valor lógico que solo puede tomar uno de dos valores:

true
false

Se utiliza para controlar condiciones, validaciones y el flujo del programa.

Declaración de un boolean
```let activo: boolean = true;
   let terminado: boolean = false;```
>[Expresiones de comparacion que devuelven un boolean]:
```let edad: number = 20;

   let esAdulto: boolean = edad >= 18;

   console.log(esAdulto); // true```
```console.log(5 > 3);      // true
   console.log(10 == 20);   // false
   console.log(8 !== 8);    // false```