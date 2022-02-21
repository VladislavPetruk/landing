//-----------------ПЛАВНЫЙ СКРОЛЛ-------------------------------//

document.querySelectorAll('a[href^="#"').forEach(link => {

  link.addEventListener('click', function(e) {
      e.preventDefault();
      let href = this.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = document.querySelector('.header').offsetHeight;

      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

//-----------------NAVBAR ACTIVE------------------------------//

const btnNavbarActive = document.querySelectorAll('.burger');
const listNavBar = document.querySelectorAll('.header-left__nav');
const noActiveNavBar = document.querySelectorAll('.nav__item');
const overlay = document.querySelector('.overlay');
noActiveNavBar.forEach(el=>{
  el.addEventListener('click',()=>{
    document.body.classList.remove('dis-scroll');
    document.body.removeAttribute('data-position');
    document.body.style.top = 'auto';
      listNavBar.forEach(elem=>{

      elem.classList.remove('header__nav--active')
      btnNavbarActive.forEach(element=>{
         element.classList.remove('burger--active');

      })
    })
    overlay.classList.remove('overlay--active');
  })
})



