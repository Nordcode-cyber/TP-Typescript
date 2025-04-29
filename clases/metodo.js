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
    console.log(vscode);
    console.table(vscode);
    console.log(typeof vscode);
    console.log(typeof Ide);
    // console.log('nombre del superhero: '+' '+ thor.realName)
    //  console.log({thor})
    // console.log(typeof Avenger)node
    // console.log(typeof thor.realName)
    //  console.log(typeof thor.team)
})();
