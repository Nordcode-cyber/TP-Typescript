(function () {
    var Ide = /** @class */ (function () {
        function Ide(name, creator, Gui, year, language) {
            /*operador this* */
            this.name = name;
            this.creator = creator;
            this.Gui = Gui;
            this.year = year;
            this.language = language;
        }
        return Ide;
    }());
    var vscode = new Ide('vs code', 'microsoft', true, 2015, 'multilanguage');
    console.log({ vscode: vscode });
    console.table(vscode);
    console.log('vscode es de tipo: ' + typeof vscode);
    console.log('Ide es de tipo: ' + typeof Ide);
    console.log('nombre del Ide: ' + ' ' + vscode.name);
    console.log('creador del Ide: ', vscode.creator);
    //  console.log({thor})
    // console.log(typeof Avenger)
    // console.log(typeof thor.realName)
    //  console.log(typeof thor.team)
})();
