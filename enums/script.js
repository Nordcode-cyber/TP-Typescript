(function () {
    var DiasDeLaSemana;
    (function (DiasDeLaSemana) {
        DiasDeLaSemana[DiasDeLaSemana["Lunes"] = 0] = "Lunes";
        DiasDeLaSemana[DiasDeLaSemana["Martes"] = 1] = "Martes";
        DiasDeLaSemana[DiasDeLaSemana["Miercoles"] = 2] = "Miercoles";
        DiasDeLaSemana[DiasDeLaSemana["Jueves"] = 3] = "Jueves";
        DiasDeLaSemana[DiasDeLaSemana["Viernes"] = 4] = "Viernes";
        DiasDeLaSemana[DiasDeLaSemana["Sabado"] = 5] = "Sabado";
        DiasDeLaSemana[DiasDeLaSemana["Domingo"] = 6] = "Domingo";
    })(DiasDeLaSemana || (DiasDeLaSemana = {}));
    var diaDeHoy = DiasDeLaSemana.Martes;
    var maniana = DiasDeLaSemana.Domingo;
    console.log(DiasDeLaSemana);
    console.table(DiasDeLaSemana);
    console.log(diaDeHoy); //devuelve ubicacion 
    console.log(maniana);
    var MesesDelAnio;
    (function (MesesDelAnio) {
        MesesDelAnio[MesesDelAnio["Enero"] = 0] = "Enero";
        MesesDelAnio[MesesDelAnio["Febrero"] = 1] = "Febrero";
        MesesDelAnio[MesesDelAnio["Marzo"] = 2] = "Marzo";
        MesesDelAnio[MesesDelAnio["Abril"] = 3] = "Abril";
        MesesDelAnio[MesesDelAnio["Mayo"] = 4] = "Mayo";
        MesesDelAnio[MesesDelAnio["Junio"] = 5] = "Junio";
        MesesDelAnio[MesesDelAnio["Julio"] = 6] = "Julio";
        MesesDelAnio[MesesDelAnio["Agosto"] = 7] = "Agosto";
        MesesDelAnio[MesesDelAnio["Septiembre"] = 8] = "Septiembre";
        MesesDelAnio[MesesDelAnio["Octubre"] = 9] = "Octubre";
        MesesDelAnio[MesesDelAnio["Noviembre"] = 10] = "Noviembre";
        MesesDelAnio[MesesDelAnio["Diciembre"] = 11] = "Diciembre";
    })(MesesDelAnio || (MesesDelAnio = {}));
    var mesActual = MesesDelAnio.Mayo;
    var mesAnterior = MesesDelAnio.Abril;
    console.log(MesesDelAnio);
    console.table(MesesDelAnio);
    console.log(mesActual);
    console.log(mesAnterior);
    var AutosFord;
    (function (AutosFord) {
        AutosFord[AutosFord["Fiesta"] = 0] = "Fiesta";
        AutosFord[AutosFord["Focus"] = 1] = "Focus";
        AutosFord[AutosFord["Mustang"] = 2] = "Mustang";
        AutosFord[AutosFord["Bronco"] = 3] = "Bronco";
        AutosFord[AutosFord["Kuga"] = 4] = "Kuga";
    })(AutosFord || (AutosFord = {}));
    console.table(AutosFord);
    console.log(AutosFord.Fiesta);
})();
