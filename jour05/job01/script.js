async function validateSignIn() {
    const name = document.getElementById("name").value;
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;
    const password1 = document.getElementById("password1").value;
    const password2 = document.getElementById("password2").value;
    const address = document.getElementById("address").value;
    const zip = document.getElementById("zip").value;
    
    document.getElementById('nameError').innerText = '';
    document.getElementById('firstnameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('password1Error').innerText = '';
    document.getElementById('password2Error').innerText = '';
    document.getElementById('addressError').innerText = '';
    document.getElementById('zipError').innerText = '';
    


    if (name === '' || name.length < 3 || name.length > 25 || /[^A-Za-zéÉèÈäÄâÂàÀêÊëËïÏöÖôÔûÛùüÜ'-]/.test(name)) {
        document.getElementById('nameError').innerText = "Veuillez saisir un nom composé de 3 à 25 lettres";
    }
    if (firstname === '' || firstname.length < 3 || firstname.length > 25 || /[^A-Za-zéÉèÈâÂàÀêÊëËïÏôÔûÛüÜ'-]/.test(firstname)) {
            document.getElementById('firstnameError').innerText = "Veuillez saisir un prénom composé de 3 à 25 lettres";
    }
    if (email === '' || email.length < 8 || email.length > 32 || !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email)) {
        document.getElementById('emailError').innerText = "Veuillez saisir un email valide";
    }
    if (password1 === '' || password1.length > 32 || !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password1)) {
        document.getElementById('password1Error').innerText = "8 à 32 caractères dont 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial";
    }
    if (password1 !== password2) {
        document.getElementById('password2Error').innerText = "Veuillez confirmer votre mot de passe"
    }
    if (address === '' || address.length < 6 || address.length > 45) {
        document.getElementById('addressError').innerText = "Veuillez saisir une addresse composée de 6 à 45 caractères";
    }
    if (zip === '' || zip.length !== 5 || /\D/.test(zip)) {
        document.getElementById('zipError').innerText = "Veuillez saisir un code postal à 5 chiffres";
    }
    
}

function showPassword() {
    if (document.getElementById('showPassword').checked) {
        document.getElementById('password2').style.display = "none";
        document.getElementById('password2Label').style.display = "none";
        document.getElementById('password2Error').style.display = "none";
        document.getElementById('password1').type = "text";
    }
    else {
        document.getElementById('password2').style.display = "block";
        document.getElementById('password2Label').style.display = "block";
        document.getElementById('password2Error').style.display = "block";
        document.getElementById('password1').type = "password";
    }
}


document.getElementById('showPassword').addEventListener('click', (event) => {
    showPassword();
});


document.getElementById("submit").addEventListener("click", () => {
    validateSignIn();
});