var dato = function (nombre, apellido) {
    return "".concat(nombre, " ").concat(apellido || 'sin apellido');
};
// ` `
var persona = dato('Norbert', 'contreras');
console.log({ persona: persona });
var act = function (tl1, tl2, tl3) {
    return "".concat(tl1, " ").concat(tl2, " ").concat(tl3);
};
var deporte = act('Ciclismo', 'Senderismo', 'Remo');
console.log('Practicar los siguientes deportes que forman Triatlon');
console.log({ deporte: deporte });
var act1 = function (tl4, tl5, tl6, tl7) {
    return "".concat(tl4, " ").concat(tl5, " ").concat(tl6, " ").concat(tl7);
};
var cuadri = act1('Trekking', 'Mountan Bike', 'Squi', 'trineo');
console.log('Practicar los siguientes deportes que forman Cuadritlon');
console.log({ cuadri: cuadri });
