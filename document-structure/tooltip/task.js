const allLinkTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

function addTooltip () {
  allLinkTooltip.forEach((i) => {
    i.insertAdjacentHTML('afterEnd', '<div class="tooltip">Текст подсказки</div>');
  })    
}

addTooltip();

const allTooltip = Array.from(document.querySelectorAll('.tooltip'));

allLinkTooltip.forEach((i) => {
    
  i.onclick = () => {
    // debugger;
    let checkActive = Array.from(document.querySelectorAll('.tooltip_active'));
    const { bottom, left, right, top } = i.getBoundingClientRect();
    if (i.nextElementSibling.className == 'tooltip tooltip_active') {
        i.nextElementSibling.className = 'tooltip';
        return;
    }

    if (checkActive.length > 0) {
        checkActive.forEach((j) => {
          j.className = 'tooltip';  
        })
    }

    i.nextElementSibling.classList.add('tooltip_active');
    i.nextElementSibling.textContent = i.getAttribute('title');
    i.nextElementSibling.setAttribute('style', `left: ${left}px; position: absolute`)
    return false;
  };
}); 
