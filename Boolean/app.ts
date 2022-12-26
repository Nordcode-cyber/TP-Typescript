(()=>{
    //cuerpo de la funcion
    let isSuperman:boolean = true;
    let isBatman:boolean = false;
    let isCampeon:boolean = true;
    let isSegundo:boolean = false;
    console.log({isSuperman})
    console.log({isBatman})
    isSuperman = true && false;
    console.log(isSuperman)
    isSuperman = (isBatman)? false: true;
    console.log(isSuperman);
    console.log({isCampeon})
    console.log({isSegundo})    
    isCampeon = false || true;
    isSegundo = true && false;
    console.log({isCampeon})
    console.log({isSegundo})


})()//fin de la funcion
