let xml = new XMLHttpRequest();

xml.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xml.send();
xml.onreadystatechange = () => {
    if(xml.readyState === 4) {
       document.querySelector('.loader_active').className = 'loader';
       let responseText = JSON.parse(xml.response);

       for(let i in responseText.response.Valute){
           document.querySelector('#items').insertAdjacentHTML('beforeend',
             `<div class ="item">  
                <div class="item__code">
                  ${responseText.response.Valute[i].CharCode}
                </div>
                <div class="item__value">
                  ${responseText.response.Valute[i].Value}
                </div>
                <div class="item__currency">
                  руб.
               </div>
             </div>`)
        }
     }
}
