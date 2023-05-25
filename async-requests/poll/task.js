const title = document.querySelector('.poll__title');
const answers = document.querySelector('#poll__answers');
let xml = new XMLHttpRequest();

xml.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xml.send();
xml.onreadystatechange = () => {
    if(xml.readyState === 4) {
       let responseText = JSON.parse(xml.response);
       title.textContent = responseText.data.title;
       for(let i in responseText.data.answers){
           answers.insertAdjacentHTML('beforeend', `
             <button class="poll__answer">
               ${responseText.data.answers[i]}
             </button>
            `);
       }

       Array.from(document.querySelectorAll('.poll__answer')).forEach((el, i) => {
          el.onclick = () => {
            alert('Спасибо, ваш голос засчитан!');

            const xhr = new XMLHttpRequest;
            xhr.open( 'POST', 'https://students.netoservices.ru/nestjs-backend/poll' );
            xhr.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
            xhr.send( `vote=${responseText.id}&answer=${i}` );
      
            xhr.onreadystatechange = () => {
               if(xhr.readyState === 4) {
                  answers.remove();
                  let newResponsText = JSON.parse(xhr.response);

                  let count = [];
                  for(let i in newResponsText.stat) {
                    count.push(newResponsText.stat[i].votes);
                  }
                  let totalCount = count.reduce((acc, curr) => acc + curr, 0);
                  
                  for(let i in newResponsText.stat) {
                      document.querySelector('.poll').insertAdjacentHTML('afterend', `
                        <div>${newResponsText.stat[i].answer}: ${((newResponsText.stat[i].votes / totalCount) * 100).toFixed(2)}%</div>        
                      `)
                  }
               }  
            }
          }
       })
     }
}

