const clickRight = document.querySelector('.slider__arrow_next');
const clickLeft = document.querySelector('.slider__arrow_prev');
const selectImg = document.querySelectorAll('.slider__item');

let counter = 0;

clickRight.onclick = () => {
  imgRight();
};

clickLeft.onclick = () => {
  imgLeft();  
};

let imgRight = () => {
  if(counter == selectImg.length - 1){
    counter = 0;
    selectImg[counter].className += ' slider__item_active';
    selectImg[selectImg.length - 1].className = 'slider__item';
    return;
  }

  counter++;
  selectImg[counter].className += ' slider__item_active';
  selectImg[counter - 1].className = 'slider__item';
}; 

let imgLeft = () => {
  if(counter == 0){
    counter = selectImg.length - 1;
    selectImg[counter].className += ' slider__item_active';
    selectImg[0].className = 'slider__item';
    return;
  }

  counter--;
  selectImg[counter].className += ' slider__item_active';
  selectImg[counter + 1].className = 'slider__item';
}; 