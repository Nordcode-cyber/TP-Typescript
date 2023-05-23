(() =>{
       const error =  (message:string ):never|number => {
        if(false){
        throw new Error(message)
        }
        return 1;
   }
  // error('Auxilio!');
function forever(): never {
    while (true) {
        break; // Error .
    }
}

enum Values {
    A,
    B
}

function choose(value: Values) {
    switch (value) {
        case Values.A: return "A";
    }

    let x: never = value;
}
 



})()
