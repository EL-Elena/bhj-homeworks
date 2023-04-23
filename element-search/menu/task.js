const menuLink = document.querySelectorAll('.menu__link');

menuLink.forEach((i) => {
  i.onclick = () => {
    if (i.closest('.menu__item').querySelector('.menu_active')) {
      i.closest('.menu__item').querySelector('.menu_sub').className = 'menu menu_sub';
      return false;
    } else if (!(i.closest('.menu__item').querySelector('.menu_sub'))) {
       return;
    };
    i.closest('.menu__item').querySelector('.menu_sub').className += ' menu_active';
    return false;
  };
});