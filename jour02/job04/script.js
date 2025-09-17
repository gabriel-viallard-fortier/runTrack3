const textarea = document.getElementById('textarea');

document.addEventListener("keypress", (e) => {
    textarea.value = textarea.value + e.key;

});