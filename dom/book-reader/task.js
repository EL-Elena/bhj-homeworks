const buttonSize = Array.from(document.querySelectorAll('.font-size'));
const selectSize = document.querySelector('.book');
const selectColor = Array.from(document.querySelectorAll('.color'))

buttonSize.forEach((i) => {
  i.onclick = () => {
    if(i.classList.contains('font-size_active')) {
       return false; 
    };

    i.closest('.book__control_font-size').querySelector('.font-size_active').classList.remove('font-size_active');
    i.classList.add('font-size_active');

    if(i.classList.contains('font-size_small')) { 
        selectSize.classList.add('book_fs-small');
        selectSize.classList.remove('book_fs-big');

    } else if (i.classList.contains('font-size_big')) {
        selectSize.classList.add('book_fs-big');
        selectSize.classList.remove('book_fs-small');
    } else {
        selectSize.classList.remove('book_fs-small', 'book_fs-big');             
    }
    return false;
  }
}); 

selectColor.forEach((i) => {
  i.onclick = () => {
    if(i.parentElement.classList.contains('book__control_color')) {
        if(i.classList.contains('color_active')) {
           return false;
        }; 

        i.closest('.book__control_color').querySelector('.color_active').classList.remove('color_active');
        i.classList.add('color_active');
    
        if(i.classList.contains('text_color_black')) { 
            selectSize.classList.remove('book_color-gray', 'book_color-whitesmoke');
            selectSize.classList.add('book_color-black');
        } else if (i.classList.contains('text_color_gray')) {
            selectSize.classList.remove('book_color-black', 'book_color-whitesmoke');
            selectSize.classList.add('book_color-gray'); 
        } else {
            selectSize.classList.remove('book_color-black', 'book_color-gray');
            selectSize.classList.add('book_color-whitesmoke');   
        }
        return false;
    };

    if(i.classList.contains('color_active')) {
        return false;
     }; 

     i.closest('.book__control_background').querySelector('.color_active').classList.remove('color_active');
     i.classList.add('color_active');
 
     if(i.classList.contains('bg_color_black')) { 
         selectSize.classList.remove('bg_color_gray', 'bg_color_white');
         selectSize.classList.add('bg_color_black');
     } else if (i.classList.contains('bg_color_gray')) {
         selectSize.classList.remove('bg_color_white', 'bg_color_black');
         selectSize.classList.add('bg_color_gray'); 
     } else {
         selectSize.classList.remove('bg_color_black', 'bg_color_gray');
         selectSize.classList.add('bg_color_white');   
     }
     return false;
  };
});

