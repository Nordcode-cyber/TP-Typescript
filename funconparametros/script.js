(function () {
    var nombrecompleto = function (nombre, apellido) {
        return "".concat(nombre, " ").concat(apellido);
    };
    // ` `
    var nombre = nombrecompleto('Norbert', 'paillover');
    console.log({ nombre: nombre });
    // ` `    
    var ambiente = function (temperatura, humedad) {
        return "".concat(temperatura, " ").concat(humedad);
    };
    var clima = ambiente('55', '88');
    console.log('temperatura y humedad es de: ', { clima: clima });
    var modulo = function (piso, pasillo, pared) {
        return "".concat(piso, " ").concat(pasillo, " ").concat(pared, " ");
    };
    var auto = modulo('3', '15', '21');
    console.log('su auto se encuentra en piso, pasillo y pared,', auto);
})();
