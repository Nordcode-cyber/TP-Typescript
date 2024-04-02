(()=>{
    class Avenger {
        private name:string;
        public team:string;
        public realName?:string;
        static avgAge:number = 33;
        constructor(name:string,team:string,realName?:string){
            /*operador this* */
            this.name=name;
            this.team=team;
            this.realName=realName;
            
        }
        
    }
    
    const thor: Avenger =new Avenger('thor','dc','george');
    //operador ? sobre el objeto es opcional
    console.log(thor)
   /*accediendo a las propiedades de la clase Avenger,
   solo con el modificador de acceso public*/ 
   console.log('nombre del superhero: '+' '+ thor.realName)
   console.log({thor})
   console.log(typeof Avenger)
   console.log(typeof thor.realName)
   console.log(typeof thor.team)
   class So {
     private nombre:string;
     private aniolanzamiento:number;
     public desarrolladores:number;
     public creador:string;
     private lenguaje:string;
     public plataforma:string;
     public paquete:string;
     constructor(nombre:string,aniolanzamiento:number,desarrolladores:number,creador:string, lenguaje:string, plataforma:string, paquete:string){
        this.nombre=nombre;
        this.aniolanzamiento=aniolanzamiento;
        this.desarrolladores=desarrolladores;
        this.creador=creador;
        this.lenguaje=lenguaje;
        this.plataforma=plataforma;
        this.paquete=paquete;
     }
     
}

const GnuLinux: So = new So('Gnu/linux',1984,1745,'linus y richard','C','x86, sparc,amd64,arm,ppc ibm,PowerPC','apt, dpkg');
console.log(GnuLinux.creador)
console.log(GnuLinux.plataforma)
console.log('so es tipo: '+typeof So)
console.log('Gnu/Linux es tipo'+typeof GnuLinux)

console.log({GnuLinux})
console.table(GnuLinux)
const Windows: So = new So('windows',1987,45,'bill y steve','C','x86,amd64,ppc ibm','exe, msi');
console.log(Windows.creador)
console.log(Windows.desarrolladores)
console.log('windows es tipo: '+typeof Windows)
console.log({Windows})
console.table(Windows)
const Unix: So = new So('unix',1969,5,'dennis y ken','C','pdp-7','.h');
console.log(Unix.creador)
console.log(Unix.desarrolladores)
console.log('unix es tipo: '+typeof Unix)

console.log({Unix})
console.table(Unix)
const Solaris: So = new So('solaris',1992,145,'sun microsystem','C','x86,amd64,sparc PowerPC','ipkg, pkg');
console.log(Solaris.creador)
console.log(Solaris.desarrolladores)
console.log('solaris es tipo: '+typeof Solaris)
console.log({Solaris})
console.table(Solaris)
/*
 *Metodos publicos y privados 
 */
class Lenguaje {
    private descripcion:string;
    private lanzamiento:number;
    public creador:string;
    public ejecucion:string;
    public implementaciones:string;
    public librerias:string;
    public tipos:string;
    public puntero:string;
    public estructura:string;
    constructor(descripcion:string,lanzamiento:number,creador:string,ejecucion:string,implementaciones:string,librerias:string,tipos:string,puntero:string, estructura:string ){
       this.descripcion=descripcion;
       this.lanzamiento=lanzamiento;
       this.creador=creador;
       this.ejecucion=ejecucion;
       this.implementaciones=implementaciones;
       this.librerias=librerias;
       this.tipos=tipos;
       this.puntero=puntero;
       this.estructura=estructura;
    }
    tecnica(){
        return `${ this.ejecucion } ${ this.librerias}`
    }    
}
const pascal:Lenguaje = new Lenguaje('pascal',1974,'niklaus','compiler','turbo pascal','pasgraphic','primitivos','si','arrays');
console.log('metodo tecnica: '+pascal.tecnica())
console.log(typeof pascal.tecnica())
console.log(pascal.creador)
console.log(pascal.ejecucion)
console.log(typeof pascal)
console.log({pascal})
console.table(pascal)
const java:Lenguaje = new Lenguaje('Java',1995,'Sun Microsystem','compiler/interpreter','jdbc','java se','primitivos, boolean','no','array,matrix,hashmap,stack,heap,tree,graph');
console.log(java.creador)
console.log(java.estructura)
console.log(typeof java)
console.log({java})
console.table(java)


    
    

})()