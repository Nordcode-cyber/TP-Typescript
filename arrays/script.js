(function () {
    var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    arr.push(10);
    console.log(arr);
    console.table(arr);
    var arr1 = ['n', 'o', 'r', 'b', 'e', 'r', 't', 'o'];
    console.log(arr1);
    console.table(arr1);
    var lenguajes = ['C', 'C++', 'Java', 'Python', 'Javascript', 'Php', 'C#', 'Typescript', 'Kotlin'];
    console.log(lenguajes);
    console.table(lenguajes);
    lenguajes.forEach(function (l) { return console.log(l.toUpperCase()); });
    var so = ['Unix', 'Beos', 'Bsd', 'Gnu/Linux', 'Io', 'Amiga os', 'Solaris', 'Windows', 'Aix os', 'Irix os', 'Palm os'];
    console.log(so);
    console.table(so);
    so.forEach(function (s) { return console.log(s.toUpperCase()); });
    var ides = ['emacs', 'vi', 'nano', 'turbo', 'frepascal', 'neovim', 'kate', 'lazarus', 'kdevelop', 'eclipse', 'intelliidea', 'vs code'];
    console.log(ides);
    console.table(ides);
    ides.forEach(function (i) { return console.log(i.toUpperCase()); });
    // Atencion !! lo que scribas en script.js se borra al transpilar el archivo ts
    /*const arr:number[] = [1,2,3,4,5,'i',6,7,8,9];
     * Con Typescript hay que respetar el tipo de datos
     */
})();
