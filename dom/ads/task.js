const firstActive = document.querySelector('.rotator__case_active');  
firstActive.style.color = firstActive.getAttribute('data-color');

function rotator () {
    let rotatorActive = document.querySelector('.rotator__case_active'); 
    let nextElementActive = rotatorActive.nextElementSibling;
    
    if (nextElementActive === null) {
        nextElementActive = firstActive;
    };
  
    if (rotatorActive.classList.contains('rotator__case_active')) {
        rotatorActive.className = 'rotator__case';
        nextElementActive.classList.add('rotator__case_active');
    } 
    nextElementActive.style.color = nextElementActive.getAttribute('data-color');

    setTimeout(rotator, nextElementActive.getAttribute('data-speed'));
}

setTimeout(rotator, 1000);
