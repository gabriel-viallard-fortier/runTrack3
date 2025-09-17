window.addEventListener('scroll', () => {
  let scroll = window.scrollY;

  let opacity = Math.max(0, 1 - scroll / 4096);

  document.getElementById('footer').style.backgroundColor = `rgba(31, 31, 31, ${opacity})`;
});
