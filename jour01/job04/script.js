console.clear();
console.log("Hello, console");


    
// 3 conditions enchainées

function bisextile(annee) {
    
    if (annee % 4 === 0) {
        if (annee % 100 === 0) {
            if (annee % 400 === 0) {
                return true; // divisible par 4, 100 et 400
            } else {
                return false; // divisible par 4 et 100
            
            }
        } 
        else {
            return true; //divisible par 4 mais par par 100 
                
        } 
    } else {
        return false; // non divisible par 4
            
        }
}

console.log("1993 : bisextile = ", bisextile(1993));
console.log("2016 : bisextile = ", bisextile(2016));
