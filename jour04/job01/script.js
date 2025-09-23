
document.getElementById("button").addEventListener("click", () => {
    fetch("expression.txt")
    .then(response => response.text())
    .then(data => {
        console.log(data);
        document.getElementById("para").innerText = data;
    })
    .catch(err => console.error("Erreur de chargement :", err));
});
