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
            return `${this.name} (${this.creator})`
        }

     }
    
    const vscode: Ide =new Ide('vs code','microsoft',true,2015,'multilanguage');
    console.log({vscode})
    console.table(vscode)
    console.log(vscode.descripcion())
   /* console.log('vscode es de tipo: '+typeof vscode)
    console.log('Ide es de tipo: '+typeof Ide)
    console.log('nombre del Ide: '+' '+ vscode.name)
    console.log('creador del Ide: ',vscode.creator)
    const eclipse: Ide =new Ide('eclipse','sun microsistem',true,204,'Java');
    console.log({eclipse})
    console.table(eclipse)
    console.log('creador de eclipse es: ',eclipse.creator)
   * 
   */

})()