let jsonSample = `{
"name": "La Plateforme_",
"address": "8 rue d'hozier",
"city": "Marseille",
"nb_staff": "11",
"creation":"2019"}`;


function jsonValueKey(json, key) {

    const obj = JSON.parse(json);
    document.getElementById("para").innerText = obj[key];

}


document.getElementById('button').addEventListener("click", (event) => {
   jsonValueKey(jsonSample, "city");
});