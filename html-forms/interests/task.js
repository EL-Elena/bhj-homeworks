const selectInterest = Array.from(document.querySelectorAll('.interest__check'));

function checkCheckbox (el) {
  if(el.parentElement.parentElement.parentElement.parentElement.classList.contains('interests_main')) {
     return;
  }

  let checkEl = el.closest('.interests_active').previousElementSibling.querySelector('.interest__check');
  let totalCheck = Array.from(el.closest('.interests_active').querySelectorAll('.interest__check')).length;
  let checkCount = Array.from(el.closest('.interests_active').querySelectorAll('input.interest__check:checked')).length;
  
  if (checkCount === 0) {
      checkEl.indeterminate = false;
      checkEl.checked = false;
  } else if (totalCheck != checkCount) {
      checkEl.indeterminate = true;
      checkEl.checked = false;        
  } else {
      checkEl.indeterminate = false;
      checkEl.checked = true;
  }

  if (checkEl.closest('.interests_active') != null) {
    checkCheckbox(checkEl);
  }
}

selectInterest.forEach((i) => {
  i.onchange = () => {
   if(i.parentElement.nextElementSibling != null){
      if(i.checked == true) {
         Array.from(i.closest('.interest').querySelectorAll('.interest__check')).forEach((j) => {
           j.checked = true;
         });
      } else if (i.checked == false) {
          Array.from(i.closest('.interest').querySelectorAll('.interest__check')).forEach((j) => {
            j.checked = false;
          });      
        } 
      checkCheckbox(i);
    } else {
      checkCheckbox(i);
    }   
  }
})
