(function () {
    var hero = "flash";
    var lang = "Typescript";
    var n1 = 3;
    function returnName() {
        return hero;
    }
    var heroName = returnName();
    console.log(heroName);
    console.log(typeof heroName);
    console.log(typeof returnName);
    function returnLang() {
        return lang;
    }
    var LangName = returnLang();
    console.log(LangName);
    console.log(typeof LangName);
    console.log(typeof returnLang);
    function returNumber() {
        return n1;
    }
    var NumBer = returNumber();
    console.log(NumBer);
    console.log(typeof n1);
    console.log(typeof returNumber);
    var option = true;
    function returBool() {
        return option;
    }
    var bolean = returBool();
    console.log(option);
    console.log(typeof option);
    console.log(typeof returBool);
    hellow();
    function hellow() {
        console.log("hola mundo");
    }
})();
