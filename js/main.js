const modal = document.querySelector('.backdrop')
const modalBtnOpen = document.querySelector('.modal__btn__open')
const modalBtnClose = document.querySelector('.modal__btn_close')

const toggleModal = () => modal.classList.toggle('is__hidden')

modalBtnOpen.addEventListener('click', toggleModal)
modalBtnClose.addEventListener('click', toggleModal)

// Закрытие по клику на фон (вне окна)
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    toggleModal();
  }
});

// Закрытие по клавише Esc
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !modal.classList.contains('is__hidden')) {
    toggleModal();
  }
});