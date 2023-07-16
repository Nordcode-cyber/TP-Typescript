(() => {
    /*objetos en Typescript
     *
     *Los objetos en typescript pueden declararse con una sintaxis implícita o explícita.
            Es recomendable usar una sintaxis explícita y dejar que typescript infiera los tipos de datos
             que se usan en el objeto.
            Ya no es posible añadir directamente propiedades a un objeto ni acceder a propiedades que
             no existen sin que antes el editor te lance un error.
     */
    let flash:{name:string, age:number,power:string[]} ={
        name: 'Barry Allen',
        age: 24,
        power: ['veloz', 'viajar']
    }
    console.log({flash});
    console.table(flash);
    let batman:{name1:string,edad:number,deztreza:string[],enemigos:string[]} ={
        name1:'Bruce Wayne',
        edad: 34,
        deztreza:['detective','acrobata','escapista'],
        enemigos:['pinguino','Relojero','joker','acertijo']
    }
    console.log({batman});
    console.table(batman);
    let greenlantern:{nombre:string,edad:number,deztreza:string[],enemigos:string[]} ={
        nombre:'Jhon Jordan',
        edad: 24,
        deztreza:['volar', 'construir'],
        enemigos:['krona','tattooed man','star sapphire', 'parallax' ]
    }
    console.log({greenlantern});
    console.table(greenlantern);
    let greenarrow:{nombre:string, edad:number,deztreza:string[],enemigos:string[],aliados:string[]} ={
        nombre:'oliver queen',
        edad: 31,
        deztreza:['arquero','karateka','ninja','piloto'],
        enemigos:['conde vertigo', 'merlyn','deathstroke','promettheus'],
        aliados:['black canary','batman','flash','cyborg']
    }
    console.log({greenarrow});
    console.table(greenarrow);
    let superman:{nombre:string,edad:number,deztreza:string[],enemigos:string[],aliados:string[]} ={
        nombre:'klart kent',
        edad: 29,
        deztreza:['vuelo','vision infraroja','vision rayos x', 'vision telescopica'],
        enemigos:['livewire','luthor','volcana','bizarro'],
        aliados:['shazam', 'batman','supergirl','krypto']
    }
    console.log({superman});
    console.table(superman);
    let aquaman:{nombre:string,edad:number,deztreza:string[],enemigos:string[],aliados:string[]} = {
        nombre: 'arthur curry',
        edad: 38,
        deztreza:['fuerza','resistencia','agilidad','oceano','buzo'],
        enemigos:['Black manta', 'lex luthor','celeana','rey tiburon'],
        aliados:['aqualad','aquagirl','murk','batman']
    }
    console.log({aquaman});
    console.table(aquaman);
    let spiderman:{nombre:string,edad:number,peso:number,deztreza:string[],enemigos:string[],aliados:string[],getNombre: () => string,getEdad: ()=>number } = {
        nombre: 'peter parker',
        edad: 24,
        peso: 63,
        deztreza:['fuerza','resistencia','agilidad','fisiologia de araña','reflejos'],
        enemigos:['electro','duende verde','kraven','escorpion','morbius','octopius'],
        aliados:['daredvill','harry','ben urich','punisher'],
        getNombre(){
            return this.nombre;
        },
        getEdad(){
            return this.edad;
        }
       
    }
   
    console.log( 'nombre de spiderman: '+spiderman.getNombre() )
    console.log('edad de spiderman: '+spiderman.edad);
    console.log({spiderman});
    console.table(spiderman);



//Parallax, , ,
})()