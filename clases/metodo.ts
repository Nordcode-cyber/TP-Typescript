(() =>{
    class Ide {
        public name:string;
        public creator:string;
        public Gui:boolean;
        private  year:number;
        private language:string
        constructor(name:string,creator:string,Gui:boolean,year:number,language:string){
            /*operador this* */
            this.name=name;
            this.creator=creator;
            this.Gui=Gui;
            this.year=year;
            this.language=language;
        }
        descripcion(){
            return `${this.name} (${this.year})(${this.creator})`
        }

     }
    
    const vscode: Ide =new Ide('vs code','microsoft',true,2015,'multilanguage');
    console.log({vscode})
    console.table(vscode)
    console.log(vscode.descripcion())
    console.log('vscode es de tipo: '+typeof vscode)
    console.log('Ide es de tipo: '+typeof Ide)
    console.log('nombre del Ide: '+' '+ vscode.name)
    console.log('creador del Ide: ',vscode.creator)
    const eclipse: Ide =new Ide('eclipse','sun microsistem',true,204,'Java');
    console.log({eclipse})
    console.table(eclipse)
    console.log(eclipse.descripcion())
    class So {
        public name:string;
        private creator:string;
        private company:string;
        private year:number;
        private pack:string;
        private model:string;
        private multiplataforma:boolean;
        constructor(name:string,creator:string,company:string,year:number,pack:string,model:string,multiplataforma:boolean){
            this.name=name;
            this.creator=creator;
            this.company=company;
            this.year=year;
            this.pack=pack;
            this.model=model;
            this.multiplataforma=multiplataforma;
        }
        tecnica(){
            return `${this.creator} (${this.pack}) (${this.model})(${this.company})` 
        }

    }
    const linux: So = new So('gnu/linux','richard & Linus','project gnu',1991,'tar.gz','free software',true);
    const windows:So = new So('windows','bill gates','microsoft',1985,'exe','propietario',false);
    //solo se puede acceder a las miembros publicos de las clases
    console.log({linux})
    console.table(linux);
    console.log(linux.tecnica())
    console.log(linux.name)
    console.log({windows})
    console.table(windows)
    console.log(windows.tecnica())
    console.log(windows.name)
     class Framework {
        public nam:string;
        public lang:string;
        public frontend:boolean;
        public patron:string;
        public licencia:string;
        public creador:string;
        public  lanz:number;
        //patrones MVC MVP MVVM MVCP
        constructor(nam:string,lang:string,frontend:boolean,patron:string,licencia:string,creador:string,lanz:number){
            /*operador this* */
            this.nam=nam;
            this.lang=lang;
            this.frontend=frontend;
            this.patron=patron;
            this.licencia=licencia;
            this.creador=creador;
            this.lanz=lanz;
          
        }
        id(){
            return `${this.nam} (${this.lang})(${this.licencia})`
        }
        datos(){
            return `'nombre: '${this.nam} ('patron: '${this.patron})('es Frontend?: '${this.frontend})('lenguaje: '${this.lang})`
        }

     }
    
  const react = new Framework('React','Javascript',true,'MVC','BSD','Facebook',2012);
  console.log({react})
  console.table(react)
  console.log(react.frontend)
  console.log(react.licencia)
  console.log(react.id())
  console.log(react.datos())
  
    



})()