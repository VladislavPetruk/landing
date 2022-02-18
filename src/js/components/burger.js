const burger = document.querySelector('.burger');
const menu = document.querySelector('.header-left__nav');
const overlay = document.querySelector('.overlay');

const disScroll = () => {
  let pagePosition = window.scrollY;
  document.body.classList.add('dis-scroll');
  document.body.dataset.position = pagePosition;
  document.body.style.top = -pagePosition + 'px';
}

const enScroll = () => {
  let pagePosition = parseInt(document.body.dataset.position, 10);
  document.body.style.top = 'auto';
  document.body.classList.remove('dis-scroll');
  window.scrollTo({
    top: pagePosition,
    left: 0
  });
  document.body.removeAttribute('data-position');
}

burger.addEventListener('click', (e) => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('header__nav--active');
  overlay.classList.toggle('overlay--active');

  if (burger.classList.contains('burger--active')) {
    disScroll();
  } else {
    enScroll();
  }


  /* if (e.target.closest('.header__nav--active')) {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    overlay.classList.remove('overlay--active');
  } */
});

/* menu.addEventListener('click', function (e) {
  if (e.target.classList.contains('header-left__nav') && !e.target.classList.contains("header__nav--active")) {
    burger.classList.remove('burger--active');
    menu.classList.remove('header__nav--active');
    overlay.classList.remove('overlay--active');
  }
}); */



