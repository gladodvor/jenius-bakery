const mobileMenu = document.querySelector('.mobile-menu')
const menuBtnOpen = document.querySelector('.menu__btn__open')
const menuBtnClose = document.querySelector('.menu__btn__close')

const toggleMenu = () => mobileMenu.classList.toggle('is__open')

menuBtnOpen.addEventListener('click', toggleMenu)
menuBtnClose.addEventListener('click', toggleMenu)