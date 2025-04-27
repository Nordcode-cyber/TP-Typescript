(function () {
    //cuerpo de la funcion
    var isSuperman = true;
    var isBatman = false;
    var isCampeon = true;
    var isSegundo = false;
    console.log({ isSuperman: isSuperman });
    console.log({ isBatman: isBatman });
    isSuperman = true && false;
    console.log(isSuperman);
    isSuperman = (isBatman) ? false : true;
    console.log(isSuperman);
    console.log({ isCampeon: isCampeon });
    console.log({ isSegundo: isSegundo });
    isCampeon = false || true;
    isSegundo = true && false;
    console.log({ isCampeon: isCampeon });
    console.log({ isSegundo: isSegundo });
})(); //fin de la funcion
