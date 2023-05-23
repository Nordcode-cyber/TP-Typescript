(() => {
    /* Funciones con parametros
    * 
    */
    const nombrecompleto = (nombre:string, apellido:string):String => {
        return `${ nombre } ${apellido}`;
        }
        // ` `
    const nombre = nombrecompleto('Norbert', 'paillover');
    console.log({nombre});    
   
        // ` `    
    const ambiente = (temperatura:string, humedad:string, presion:string):String => {
        return `${ temperatura } ${ humedad} ${presion}`;
        }
    const clima = ambiente('55', '88', '1021.11);
    console.log('temperatura y humedad es de: ',{clima});
    const modulo =(piso:string,pasillo:string,pared:string):String => {
        return `${piso} ${pasillo} ${pared} `;
    }
    const auto = modulo('3','15','21');
    console.log('su auto se encuentra en piso, pasillo y pared,',auto);
    console.log(typeof ambiente);
  
    

    


})()
