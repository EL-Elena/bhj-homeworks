const addClass = document.getElementById('modal_main');
const showSuccess = document.querySelector('.show-success');
const changeModalSuccess = document.getElementById('modal_success');
const closeWindow = document.querySelectorAll('.modal__close_times');

addClass.className += ' modal_active';
showSuccess.onclick = () => {
  addClass.className = "modal";
  changeModalSuccess.className += ' modal_active'; 
};

closeWindow.forEach((i) => {
  i.onclick = () => {
    i.closest('.modal').className = 'modal';
  };
});