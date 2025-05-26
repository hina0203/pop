window.addEventListener('scroll', function () {
  const popup = document.getElementById('popup');
  const scrollY = window.scrollY;

  if (scrollY > 400) {
    popup.classList.add('show');
  } else {
    popup.classList.remove('show');
  }
});
