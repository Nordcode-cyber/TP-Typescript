(() => {
    const arr:number[] = [1,2,3,4,5,6,7,8,9]; 
    arr.push(10);
    console.log(arr);
    console.table(arr);
    const lenguajes = ['C', 'C++','Java','Python','Javascript','Php','C#', 'Typescript', 'Kotlin'];
    console.log(lenguajes);
    console.table(lenguajes);
    lenguajes.forEach( l => console.log(l.toUpperCase() ) );
    const so = ['Unix','Beos','Bsd','Gnu/Linux','Io','Amiga os','Solaris', 'Windows', 'Aix os', 'Irix os', 'Palm os'];
   console.log(so);
   console.table(so);
   so.forEach( s => console.log(s.toUpperCase() ) );
   const ides =['emacs','vi','nano','turbo','frepascal','neovim','kate','lazarus','kdevelop','eclipse', 'intelliidea','vs code'];
   console.log(ides);
   console.table(ides);
   ides.forEach( i => console.log(i.toUpperCase() ) );
   // Atencion !! lo que scribas en script.js se borra al transpilar el archivo ts
    /*const arr:number[] = [1,2,3,4,5,'i',6,7,8,9]; 
     * Con Typescript hay que respetar el tipo de datos
     */
  
   
    

})()
