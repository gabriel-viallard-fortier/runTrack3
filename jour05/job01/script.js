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
async function validateSignIn() {

    const name = document.getElementById("name");
    const firstname = document.getElementById("firstname");
    const email = document.getElementById("email");
    const password1 = document.getElementById("password1");
    const password2 = document.getElementById("password2");
    const address = document.getElementById("address");
    const zip = document.getElementById("zip");
    
    document.getElementById('nameError').innerText = '';
    document.getElementById('firstnameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('password1Error').innerText = '';
    document.getElementById('password2Error').innerText = '';
    document.getElementById('addressError').innerText = '';
    document.getElementById('zipError').innerText = '';
    
    if (name.value === '' || name.value.length < 3 || name.value.length > 25 || /[^A-Za-zéÉèÈäÄâÂàÀêÊëËïÏöÖôÔûÛùüÜ'-]/.test(name.value)) {
        name.classList.add("input-invalid");
        document.getElementById('nameError').innerText = "Veuillez saisir un nom composé de 3 à 25 lettres";
    }
    else {
        name.classList.add("input-valid");
    }
    if (firstname.value === '' || firstname.value.length < 3 || firstname.value.length > 25 || /[^A-Za-zéÉèÈâÂàÀêÊëËïÏôÔûÛüÜ'-]/.test(firstname.value)) {
        firstname.classList.add("input-invalid");
        
        document.getElementById('firstnameError').innerText = "Veuillez saisir un prénom composé de 3 à 25 lettres";
    }
    else {
        firstname.classList.add("input-valid");
    }
    if (email.value === '' || email.value.length < 8 || email.value.length > 32 || !/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(email.value)) {
        email.classList.add("input-invalid");
        document.getElementById('emailError').innerText = "Veuillez saisir un email valide";
    }
    else {
        email.classList.add("input-valid");
        
    }
    if (password1.value === '' || password1.value.length > 32 || !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password1.value)) {
        password1.classList.add("input-invalid");
        document.getElementById('password1Error').innerText = "8 à 32 caractères dont 1 majuscule, 1 minuscule, 1 chiffre, 1 caractère spécial";
    }
    else {
        password1.classList.add("input-valid");
        
    }
    if (password1.value !== password2.value) {
        password2.classList.add("input-invalid");
        document.getElementById('password2Error').innerText = "Veuillez confirmer votre mot de passe"
    }
    else {
        password2.classList.add("input-valid");
        
    }
    if (address.value === '' || address.value.length < 6 || address.value.length > 45) {
        address.classList.add("input-invalid");
        document.getElementById('addressError').innerText = "Veuillez saisir une addresse composée de 6 à 45 caractères";
    }
    else {
        address.classList.add("input-valid");
        
    }
    if (zip.value === '' || zip.value.length !== 5 || /\D/.test(zip.value)) {
        zip.classList.add("input-invalid");
        document.getElementById('zipError').innerText = "Veuillez saisir un code postal à 5 chiffres";
    }
    else {
        zip.classList.add("input-valid");

    }
}





document.getElementById('showPassword').addEventListener('click', (event) => {
    showPassword();
});

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    validateSignIn();
});
