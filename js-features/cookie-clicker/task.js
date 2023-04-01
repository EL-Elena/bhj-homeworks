const imageCookie = document.getElementById("cookie");
const numberOfClick = document.getElementById("clicker__counter");
let countingClick = 0;

function changeSize() {
  numberOfClick.textContent = ++countingClick;
  if(countingClick % 2 === 0) {
    imageCookie.width = 200;
  } else {
    imageCookie.width = 250;
  }
}

imageCookie.onclick = changeSize;