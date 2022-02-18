window.onload = function () {
  document.body.classList.add('loaded__hiding');
  window.setTimeout(function () {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded__hiding');
  }, 500);
}
