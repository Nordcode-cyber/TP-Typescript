(()=> {
    const hero: string  = "flash";
    const lang: string = "Typescript";
    const n1: number = 3;
    function returnName():string {
        return hero;
    }
    const heroName = returnName();
    console.log(heroName);
    console.log(typeof heroName);
    console.log(typeof returnName);
    function returnLang():string {
        return lang;
    }
    const LangName = returnLang();
    console.log(LangName);
    console.log(typeof LangName);
    console.log(typeof returnLang);
    function returNumber(): number {
        return n1;
    }
    const NumBer = returNumber();
    console.log(NumBer);
    console.log(typeof n1);
    console.log(typeof returNumber);
    const option: boolean = true;
    function returBool(): boolean {
        return option;
    }
    const bolean = returBool();
    console.log(option);
    console.log(typeof option);
    console.log(typeof returBool);
    hellow();
    function hellow(){
        console.log("hola mundo");
    }


})()