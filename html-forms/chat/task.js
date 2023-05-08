const openChat = document.querySelector('.chat-widget__side-text');
const activateChat = document.querySelector('.chat-widget');
const textMessage = document.getElementById('chat-widget__input');
const messages = document.querySelector( '.chat-widget__messages' );
let answersFromRobot = ['Кто тут?', 'Добрый день! До свидания!', 'Где ваша совесть?', 'Мы ничего не продаем.', 'Мы заняты.'];

function sendMessage() {
  let time = new Date();
  messages.innerHTML += `
    <div class="message message_client">
      <div class="message__time">${time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</div>
      <div class="message__text">
         ${textMessage.value}
      </div>
    </div>
  `; 
  messages.innerHTML += `
    <div class="message">
      <div class="message__time">${time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</div>
      <div class="message__text">
         ${answersFromRobot[Math.floor(Math.random()*5)]}
      </div>
    </div>
  `; 
}

function questionFromRobot () {
  setTimeout(() => {
    let time = new Date();
    if (Array.from(messages.children).length == 0 || (messages.lastElementChild.classList.contains('message_client') == false)) {
        messages.innerHTML += `
          <div class="message">
            <div class="message__time">${time.toLocaleTimeString(navigator.language, {hour: '2-digit', minute:'2-digit'})}</div>
            <div class="message__text">
              Мне долго еще ждать?
           </div>
         </div>
       `; 
        messages.lastElementChild.scrollIntoView();     
    };
  }, 3000);
}

openChat.addEventListener('click', () => {
  activateChat.className += ' chat-widget_active';
  questionFromRobot();
})

textMessage.onkeyup = (i) => {
  if (i.keyCode === 13 && textMessage.value != '') {
      sendMessage();     
      textMessage.value = '';
      messages.lastElementChild.scrollIntoView();     
      questionFromRobot();      
  };
}