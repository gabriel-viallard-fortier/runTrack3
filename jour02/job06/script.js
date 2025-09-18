const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b","a"
];
let progression = 0;

document.addEventListener("keydown", (event) => {
    if (event.key === konamiCode[progression]) {
        progression += 1;
    }
    else {
        progression = 0;
    }
    console.log(`Progression Code Konami: ${progression} / 10`);
    if (progression === 10) {
        console.log("Konami Code inserted !");
        document.getElementById('title').style.backgroundColor = "rgba(77,77,77,1)";
    }
});
