async function fetchTable() {
    const response = await fetch('./users.php');
    const utilisateurs = await response.json();

    utilisateurs.forEach((user) => {
        const tableBody = document.querySelector('tbody');

        const tableRow = document.createElement('tr');
        const tableDataId = document.createElement('td');
        const tableDataName = document.createElement('td');
        const tableDataFirstname = document.createElement('td');
        const tableDataEmail = document.createElement('td');

        console.log(user.id);
        tableDataId.innerText = user.id;
        tableDataName.innerText = user.nom;
        tableDataFirstname.innerText = user.prenom;
        tableDataEmail.innerText = user.email;
        
        tableRow.appendChild(tableDataId);
        tableRow.appendChild(tableDataName);
        tableRow.appendChild(tableDataFirstname);
        tableRow.appendChild(tableDataEmail);
        tableBody.appendChild(tableRow);
        console.log(tableRow);
    });
}
fetchTable();