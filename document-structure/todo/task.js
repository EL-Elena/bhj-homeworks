const tasksList = document.querySelector('#tasks__list');
const input = document.querySelector('#task__input');

input.addEventListener('keypress', (i) => {
  if(i.code == 'Enter' && input.value != '') {
     tasksList.insertAdjacentHTML('beforeend', 
       `<div class="task">
         <div class="task__title">
           ${input.value}
         </div>
         <a href="#" class="task__remove">&times;</a>
       </div>`
     )

     Array.from(document.querySelectorAll('.task__remove')).forEach((j) => {
       j.onclick = () => {
         j.closest('.task').remove();
       }
    })

     input.value = '';
     i.preventDefault();
  }
})

