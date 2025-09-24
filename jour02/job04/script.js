const textarea = document.getElementById('textarea');

document.addEventListener("keydown", (event) => {
    textarea.value = textarea.value + event.key;

});