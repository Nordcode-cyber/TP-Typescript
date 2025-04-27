###En TypeScript, "never" 
**Es un tipo que indica que una función nunca devuelve un valor o que una variable nunca puede tener un valor.**
        Este tipo se utiliza para casos en los que se sabe que la ejecución del programa  nunca llegará a cierto punto o 
        que siempre lanzará una excepción. Por ejemplo, si una función siempre lanza una excepción, 
        se puede definir su tipo de retorno como "never" para indicar que nunca devuelve un valor.
        Un ejemplo de uso de "never" es el siguiente:
              
       function error(message: string): never {
                     throw new Error(message);
          }  
     Un ejemplo de uso de "never" es el siguiente:
         
        function error(message: string): never {
          throw new Error(message);
        }
## En este ejemplo, la función "error" lanza una excepción y nunca devuelve un valor. 
##       Por lo tanto, su tipo de retorno es "never".