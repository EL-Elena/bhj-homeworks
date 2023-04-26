const tab = Array.from(document.querySelectorAll('.tab'));
const tabContent = Array.from(document.querySelectorAll('.tab__content'));

tab.forEach((i) => {
  i.onclick = () => {
    if(i.closest('.tab__navigation').querySelector('.tab_active')){
       i.closest('.tab__navigation').querySelector('.tab_active').className = '.tab';
       i.className += ' tab_active';
    };
    if(tab.indexOf(document.querySelector('.tab_active')) ==  tabContent.indexOf(document.querySelector('.tab__content_active'))){
       return false;
    } else {
        tabContent.forEach((j) => {
          j.className = 'tab__content';      
        })
    };
    tabContent[tab.indexOf(document.querySelector('.tab_active'))].className += ' tab__content_active';  
    return false;   
  };   
})
