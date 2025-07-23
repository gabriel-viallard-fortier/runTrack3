console.clear();
console.log("Hello, console");

let date = new Date("2020-01-01");

function jourtravaille (dateentree){

    
    let jour = dateentree.getDate();
    let mois = dateentree.getMonth() + 1;
    let annee = dateentree.getFullYear();

    let joursferies = [
        new Date("${annee}-04-13"),
        new Date("${annee}-05-01"),
        new Date("${annee}-05-08"),
        new Date("${annee}-05-21"),
        new Date("${annee}-06-01"),
        new Date("${annee}-07-14"),
        new Date("${annee}-08-15"),
        new Date("${annee}-11-01"),
        new Date("${annee}-11-11"),
        new Date("${annee}-12-25"),
        new Date("${annee}-01-01"),
    ];    

    

}


jourtravaille(date);
