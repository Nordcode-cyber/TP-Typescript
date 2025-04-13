(function () {
    /*objetos en Typescript
     *
     *Los objetos en typescript pueden declararse con una sintaxis implícita o explícita.
            Es recomendable usar una sintaxis explícita y dejar que typescript infiera los tipos de datos
             que se usan en el objeto.
            Ya no es posible añadir directamente propiedades a un objeto ni acceder a propiedades que
             no existen sin que antes el editor te lance un error.
     */
    var flash = {
        name: 'Barry Allen',
        age: 24,
        power: ['veloz', 'viajar']
    };
    console.log({ flash: flash });
    console.table(flash);
    var lenguajec = {
        anio: 1972,
        version: 23,
        power: ['hardware', 'compiladores', 'infosec'],
        derivado: ['C++', 'Java', 'C#']
    };
    console.log({ lenguajec: lenguajec });
    console.table(lenguajec);
    var batman = {
        name1: 'Bruce Wayne',
        edad: 34,
        deztreza: ['detective', 'acrobata', 'escapista'],
        enemigos: ['pinguino', 'Relojero', 'joker', 'acertijo']
    };
    console.log({ batman: batman });
    console.table(batman);
    var greenlantern = {
        nombre: 'Jhon Jordan',
        edad: 24,
        deztreza: ['volar', 'construir'],
        enemigos: ['krona', 'tattooed man', 'star sapphire', 'parallax']
    };
    console.log({ greenlantern: greenlantern });
    console.table(greenlantern);
    var greenarrow = {
        nombre: 'oliver queen',
        edad: 31,
        deztreza: ['arquero', 'karateka', 'ninja', 'piloto'],
        enemigos: ['conde vertigo', 'merlyn', 'deathstroke', 'promettheus'],
        aliados: ['black canary', 'batman', 'flash', 'cyborg']
    };
    console.log({ greenarrow: greenarrow });
    console.table(greenarrow);
    var superman = {
        nombre: 'klart kent',
        edad: 29,
        deztreza: ['vuelo', 'vision infraroja', 'vision rayos x', 'vision telescopica'],
        enemigos: ['livewire', 'luthor', 'volcana', 'bizarro'],
        aliados: ['shazam', 'batman', 'supergirl', 'krypto']
    };
    console.log({ superman: superman });
    console.table(superman);
    var aquaman = {
        nombre: 'arthur curry',
        edad: 38,
        deztreza: ['fuerza', 'resistencia', 'agilidad', 'oceano', 'buzo'],
        enemigos: ['Black manta', 'lex luthor', 'celeana', 'rey tiburon'],
        aliados: ['aqualad', 'aquagirl', 'murk', 'batman']
    };
    var java = {
        anio: 1995,
        version: 24,
        power: ['oop', 'funcional', 'apis '],
        estructura: ['vectores', 'pilas', 'colas'],
        framework: ['hibernate', 'swing', 'spring']
    };
    console.log({ java: java });
    console.table(java);
    console.log({ aquaman: aquaman });
    console.table(aquaman);
    var spiderman = {
        nombre: 'peter parker',
        edad: 24,
        peso: 63,
        deztreza: ['fuerza', 'resistencia', 'agilidad', 'fisiologia de araña', 'reflejos'],
        enemigos: ['electro', 'duende verde', 'kraven', 'escorpion', 'morbius', 'octopius'],
        aliados: ['daredvill', 'harry', 'ben urich', 'punisher'],
        getNombre: function () {
            return this.nombre;
        },
        getEdad: function () {
            return this.edad;
        }
    };
    console.log('nombre de spiderman: ' + spiderman.getNombre());
    console.log('edad de spiderman: ' + spiderman.edad);
    console.log({ spiderman: spiderman });
    console.table(spiderman);
    //Parallax, , ,
})();
