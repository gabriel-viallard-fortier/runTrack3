console.clear();
let datetestee = new Date("2020-01-04");

function jourtravaille(dateentree) {
    let jour = dateentree.getDate();
    let mois = dateentree.getMonth() + 1;
    let annee = dateentree.getFullYear();
    let joursemaine = dateentree.getDay(); // 0 = dimanche, 6 = samedi

    const joursferies = [
        new Date("2020-01-01"),
        new Date("2020-04-13"),
        new Date("2020-05-01"),
        new Date("2020-05-08"),
        new Date("2020-05-21"),
        new Date("2020-06-01"),
        new Date("2020-07-14"),
        new Date("2020-08-15"),
        new Date("2020-11-01"),
        new Date("2020-11-11"),
        new Date("2020-12-25"),
    ];

    // Vérifie si la date est fériée
    for (let jour of joursferies) {
        if (jour === dateentree) {
            console.log(`Non, le ${jour}/${mois}/${annee} est un jour férié`);
            break;
        }
        else if (joursemaine === 0 || joursemaine === 6) {
            console.log(`Non, le ${jour}/${mois}/${annee} est un week-end`);
            break;
        }
        else {
            console.log(`Oui, le ${jour}/${mois}/${annee} est un jour travaillé`);
            break;
        }

    }
}

jourtravaille(datetestee);
