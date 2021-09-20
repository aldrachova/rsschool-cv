const burger = document.querySelector('.burger__icon');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu__link');

(function() {
  if (burger) {

    burger.addEventListener('click', () => {
      document.body.classList.toggle('lock')
      burger.classList.toggle('active')
      menu.classList.toggle('active');
      document
    })
  }
})();


(function() {
  if(menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        if(burger.classList.contains('active')) {
          document.body.classList.remove('lock')
          burger.classList.remove('active')
          menu.classList.remove('active');
        }
      })
    })
  }
})();