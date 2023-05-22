const tasksList = document.querySelector('#tasks__list');
const input = document.querySelector('#task__input');

window.addEventListener('click', (i) => {
  if(i.target.classList.contains('tasks__add') && input.value.trim() != '') {
    tasksList.insertAdjacentHTML('beforeend', 
      `<div class="task">
        <div class="task__title">
          ${input.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
      </div>`
    );
    input.value = '';
  };
  
  if(i.target.classList.contains('task__remove')) {
     i.target.closest('.task').remove();
  }

  i.preventDefault();
})

