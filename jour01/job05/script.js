console.clear();

function afficherJoursSemaine () {

    joursSemaine = ["Lundi",
                    "Mardi",
                    "Mercredi",
                    "Jeudi",
                    "Vendredi",
                    "Samedi",
                    "Diamnche"];

    for (let i = 0 ; i < (joursSemaine.length) ; i ++) {
        console.log (joursSemaine[i]);
    }
}

afficherJoursSemaine();