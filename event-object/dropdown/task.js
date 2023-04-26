const dropdownValue = Array.from(document.querySelectorAll('.dropdown__value'));
const dropdownList = Array.from(document.querySelectorAll('.dropdown__list'));
const dropdownItem = Array.from(document.querySelectorAll('.dropdown__item'));

dropdownValue.forEach((i) => {
  i.onclick = () => {
    if(i.closest('.dropdown').querySelector('.dropdown__list_active')){
       i.closest('.dropdown').querySelector('.dropdown__list_active').className = 'dropdown__list';
       return false;        
    }
    dropdownList.forEach((j) => {
      if(j.className == 'dropdown__list dropdown__list_active'){
         j.className = 'dropdown__list';
      };  
    });
    i.closest('.dropdown').querySelector('.dropdown__list').className += ' dropdown__list_active';  
      return false;
    };
})
    
dropdownItem.forEach((i) => {
  i.onclick = () => {
    i.closest('.dropdown').querySelector('.dropdown__value').textContent = i.textContent;
    i.closest('.dropdown__list').className = 'dropdown__list';
    return false;    
  };
})