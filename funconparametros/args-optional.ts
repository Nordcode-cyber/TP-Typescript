const dato = (nombre:string, apellido?:string):String => {
    return `${ nombre } ${apellido || 'sin apellido'}`;
    }
    // ` `
const persona = dato('Norbert','contreras');
console.log({persona});  
const act = (tl1:string, tl2:string, tl3:string):String => {
    return `${ tl1 } ${tl2} ${tl3}`;
}
const deporte = act('Ciclismo','Senderismo', 'Remo');
console.log('Practicar los siguientes deportes que forman Triatlon');
console.log({deporte});
const act1 = (tl4:string, tl5:string, tl6:string, tl7:string):String => {
    return `${ tl4 } ${tl5} ${tl6} ${tl7}`;
}
const cuadri = act1('Trekking', 'Mountan Bike', 'Squi', 'trineo');
console.log('Practicar los siguientes deportes que forman Cuadritlon');
console.log({cuadri});
