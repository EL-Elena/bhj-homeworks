const timer = document.getElementById("timer"); 
let totalSeconds = timer.textContent; 
timer.textContent = new Date(2023, 2, 31, 0, 0, totalSeconds).toLocaleTimeString();   
const counting = setInterval (function (){   
  if(timer.textContent === "00:00:00") {
    clearInterval(counting);
    alert("Вы победили в конкурсе");  
  } else {       
    totalSeconds -= 1;
    timer.textContent = new Date(2023, 2, 31, 0, 0, totalSeconds).toLocaleTimeString();   
    }  
}, 1000);
