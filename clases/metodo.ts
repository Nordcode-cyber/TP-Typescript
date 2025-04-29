(() =>{
    class Ide {
        private name:string;
        private creator:string;
        private Gui:boolean;
        private year:number;
        private language:string
        constructor(name:string,creator:string,Gui:boolean,year:number,language:string){
            /*operador this* */
            this.name=name;
            this.creator=creator;
            this.Gui=Gui;
            this.year=year;
            this.language=language;
        }
     }
    
    const vscode: Ide =new Ide('vs code','microsoft',true,2015,'multilanguage');
    console.log(vscode)
    console.table(vscode)
    console.log(typeof vscode)
    console.log(typeof Ide)
  // console.log('nombre del superhero: '+' '+ thor.realName)
 //  console.log({thor})
  // console.log(typeof Avenger)
  // console.log(typeof thor.realName)
 //  console.log(typeof thor.team)
})()