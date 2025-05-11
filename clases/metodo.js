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
        Ide.prototype.descripcion = function () {
            return "".concat(this.name, " (").concat(this.year, ")(").concat(this.creator, ")");
        };
        return Ide;
    }());
    var vscode = new Ide('vs code', 'microsoft', true, 2015, 'multilanguage');
    console.log({ vscode: vscode });
    console.table(vscode);
    console.log(vscode.descripcion());
    console.log('vscode es de tipo: ' + typeof vscode);
    console.log('Ide es de tipo: ' + typeof Ide);
    console.log('nombre del Ide: ' + ' ' + vscode.name);
    console.log('creador del Ide: ', vscode.creator);
    var eclipse = new Ide('eclipse', 'sun microsistem', true, 204, 'Java');
    console.log({ eclipse: eclipse });
    console.table(eclipse);
    console.log(eclipse.descripcion());
    var So = /** @class */ (function () {
        function So(name, creator, company, year, pack, model, multiplataforma) {
            this.name = name;
            this.creator = creator;
            this.company = company;
            this.year = year;
            this.pack = pack;
            this.model = model;
            this.multiplataforma = multiplataforma;
        }
        So.prototype.tecnica = function () {
            return "".concat(this.creator, " (").concat(this.pack, ") (").concat(this.model, ")(").concat(this.company, ")");
        };
        return So;
    }());
    var linux = new So('gnu/linux', 'richard & Linus', 'project gnu', 1991, 'tar.gz', 'free software', true);
    var windows = new So('windows', 'bill gates', 'microsoft', 1985, 'exe', 'propietario', false);
    //solo se puede acceder a las miembros publicos de las clases
    console.log({ linux: linux });
    console.table(linux);
    console.log(linux.tecnica());
    console.log(linux.name);
    console.log({ windows: windows });
    console.table(windows);
    console.log(windows.tecnica());
    console.log(windows.name);
    var Framework = /** @class */ (function () {
        //patrones MVC MVP MVVM MVCP
        function Framework(nam, lang, frontend, patron, licencia, creador, lanz) {
            /*operador this* */
            this.nam = nam;
            this.lang = lang;
            this.frontend = frontend;
            this.patron = patron;
            this.licencia = licencia;
            this.creador = creador;
            this.lanz = lanz;
        }
        Framework.prototype.id = function () {
            return "".concat(this.nam, " (").concat(this.lang, ")(").concat(this.licencia, ")");
        };
        Framework.prototype.datos = function () {
            return "'nombre: '".concat(this.nam, " ('patron: '").concat(this.patron, ")('es Frontend?: '").concat(this.frontend, ")('lenguaje: '").concat(this.lang, ")");
        };
        return Framework;
    }());
    var react = new Framework('React', 'Javascript', true, 'MVC', 'BSD', 'Facebook', 2012);
    console.log({ react: react });
    console.table(react);
    console.log(react.frontend);
    console.log(react.licencia);
    console.log(react.id());
    console.log(react.datos());
})();
