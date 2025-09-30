const jumbotron = document.getElementById("jumbotron");
const reboot = document.getElementById("reboot");
const listItems = document.querySelectorAll("button");
const buttonLeft = document.getElementById("buttonLeft");
const buttonRight = document.getElementById("buttonRight");
const progress = document.getElementById("progressBar");
const keyboardModal = document.getElementById("keyboardModal");
const keyboardModalLogin = document.getElementById("keyboardModalLogin");
const keyboardModalUsername = document.getElementById("keyboardModalUsername");
const keyboardModalDodgeCoin = document.getElementById("keyboardModalDodgeCoin");
const keyboardModalURL = document.getElementById("keyboardModalURL");
const login = document.getElementById("login");
const username = document.getElementById("username");
const dodge = document.getElementById("dodge");
const url = document.getElementById("url");
const email = document.getElementById("email2");
const pass = document.getElementById("password2");
const send = document.getElementById("send");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");


const keyboard = ['d', 'g', 'c'];
let keyboardProgress = 0;
let jumbo = [
    "« L'imagination est plus importante que le savoir. » ",
    "« La vie est comme faire du vélo. Pour garder votre équilibre, vous devez continuer à avancer. »",
    "« Une fois que nous acceptons nos limites, nous allons au-delà. »"
];
let jumboIndex = 0;

let percent = 50;

reboot.addEventListener("click", () => {
    jumbotron.innerHTML = "J'ai vu tant de choses, que vous, humains, ne pourriez pas croire... De grands navires en feu surgissant de l'épaule d'Orion, j'ai vu des rayons fabuleux, des rayons C, briller dans l'ombre de la Porte de Tannhaüser. Tous ces moments se perdront dans l'oubli, comme les larmes dans la pluie. Il est temps de mourir.";
;
});
previous.addEventListener("click", () => {
    if (jumboIndex > 0) {
        jumboIndex --;
        jumbotron.innerHTML = jumbo[jumboIndex];
    }
});
next.addEventListener("click", () => {
    if (jumboIndex < 2) {
        jumboIndex ++;
        jumbotron.innerHTML = jumbo[jumboIndex];
    }
});
page1.addEventListener("click", () => {
        jumbotron.innerHTML = jumbo[0];
        page1.classList.add("btn-primary");
        page2.classList.remove("btn-primary");
        page3.classList.remove("btn-primary");
});
page2.addEventListener("click", () => {
        jumbotron.innerHTML = jumbo[1];
        page1.classList.remove("btn-primary");
        page2.classList.add("btn-primary");
        page3.classList.remove("btn-primary");
});
page3.addEventListener("click", () => {
        jumbotron.innerHTML = jumbo[2];
        page1.classList.remove("btn-primary");
        page2.classList.remove("btn-primary");
        page3.classList.add("btn-primary");
});


listItems.forEach(item => {
    item.addEventListener("click", () => {
        listItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

buttonLeft.addEventListener("click", () => {
    percent --;
    progress.style.width = percent + "%";
});
buttonRight.addEventListener("click", () => {
    percent ++;
    progress.style.width = percent + "%";
});

document.addEventListener("keydown", (event) => {
    if (event.key === keyboard[keyboardProgress]) {
        keyboardProgress ++;
    } else {
        keyboardProgress = 0;
    }

    if (keyboardProgress == 3) {
        keyboardModal.showModal();
        keyboardModalLogin.innerText = login.value;
        keyboardModalUsername.innerText = username.value;
        keyboardModalDodgeCoin.innerText = dodge.value;
        keyboardModalURL.innerText = url.value;
    }
});
let oldSpinner = 2;

send.addEventListener("click", () => {
    if (email.value !== '' && pass.value !== '') {
        document.getElementById(`spn${oldSpinner}`).hidden = true;
        oldSpinner ++;
        document.getElementById(`spn${oldSpinner}`).hidden = false;
    }
});


// 
// 
// 