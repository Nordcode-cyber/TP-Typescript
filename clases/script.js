(function () {
    var Avenger = /** @class */ (function () {
        function Avenger(name, team, realName) {
            /*operador this* */
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        Avenger.avgAge = 33;
        return Avenger;
    }());
    var thor = new Avenger('thor', 'dc', 'george');
    //operador ? sobre el objeto es opcional
    console.log(thor);
    /*accediendo a las propiedades de la clase Avenger,
    solo con el modificador de acceso public*/
    console.log('nombre del superhero: ' + ' ' + thor.realName);
    console.log({ thor: thor });
    console.log(typeof Avenger);
    console.log(typeof thor.realName);
    console.log(typeof thor.team);
    var So = /** @class */ (function () {
        function So(nombre, aniolanzamiento, desarrolladores, creador, lenguaje, plataforma, paquete) {
            this.nombre = nombre;
            this.aniolanzamiento = aniolanzamiento;
            this.desarrolladores = desarrolladores;
            this.creador = creador;
            this.lenguaje = lenguaje;
            this.plataforma = plataforma;
            this.paquete = paquete;
        }
        return So;
    }());
    var GnuLinux = new So('Gnu/linux', 1984, 1745, 'linus y richard', 'C', 'x86, sparc,amd64,arm,ppc ibm,PowerPC', 'apt, dpkg');
    console.log(GnuLinux.creador);
    console.log(GnuLinux.plataforma);
    console.log('so es tipo: ' + typeof So);
    console.log('Gnu/Linux es tipo' + typeof GnuLinux);
    console.log({ GnuLinux: GnuLinux });
    console.table(GnuLinux);
    var Windows = new So('windows', 1987, 45, 'bill y steve', 'C', 'x86,amd64,ppc ibm', 'exe, msi');
    console.log(Windows.creador);
    console.log(Windows.desarrolladores);
    console.log('windows es tipo: ' + typeof Windows);
    console.log({ Windows: Windows });
    console.table(Windows);
    var Unix = new So('unix', 1969, 5, 'dennis y ken', 'C', 'pdp-7', '.h');
    console.log(Unix.creador);
    console.log(Unix.desarrolladores);
    console.log('unix es tipo: ' + typeof Unix);
    console.log({ Unix: Unix });
    console.table(Unix);
    var Solaris = new So('solaris', 1992, 145, 'sun microsystem', 'C', 'x86,amd64,sparc PowerPC', 'ipkg, pkg');
    console.log(Solaris.creador);
    console.log(Solaris.desarrolladores);
    console.log('solaris es tipo: ' + typeof Solaris);
    console.log({ Solaris: Solaris });
    console.table(Solaris);
    /*
     *Metodos publicos y privados
     */
    var Lenguaje = /** @class */ (function () {
        function Lenguaje(descripcion, lanzamiento, creador, ejecucion, implementaciones, librerias, tipos, puntero, estructura) {
            this.descripcion = descripcion;
            this.lanzamiento = lanzamiento;
            this.creador = creador;
            this.ejecucion = ejecucion;
            this.implementaciones = implementaciones;
            this.librerias = librerias;
            this.tipos = tipos;
            this.puntero = puntero;
            this.estructura = estructura;
        }
        Lenguaje.prototype.tecnica = function () {
            return "".concat(this.ejecucion, " ").concat(this.librerias);
        };
        return Lenguaje;
    }());
    var pascal = new Lenguaje('pascal', 1974, 'niklaus', 'compiler', 'turbo pascal', 'pasgraphic', 'primitivos', 'si', 'arrays');
    console.log('metodo tecnica: ' + pascal.tecnica());
    console.log(typeof pascal.tecnica());
    console.log(pascal.creador);
    console.log(pascal.ejecucion);
    console.log(typeof pascal);
    console.log({ pascal: pascal });
    console.table(pascal);
    var java = new Lenguaje('Java', 1995, 'Sun Microsystem', 'compiler/interpreter', 'jdbc', 'java se', 'primitivos, boolean', 'no', 'array,matrix,hashmap,stack,heap,tree,graph');
    console.log(java.creador);
    console.log(java.estructura);
    console.log(typeof java);
    console.log({ java: java });
    console.table(java);
})();
