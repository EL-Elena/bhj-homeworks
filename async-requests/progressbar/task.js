let form = document.getElementById('form');
let progress = document.getElementById('progress');
let input = document.getElementById('file');

form.addEventListener('submit', function(i) {
  i.preventDefault();
  let file = input.files[0];

  if(file) {
    let xhr = new XMLHttpRequest();
    xhr.upload.onprogress = () => {
      progress.value += 0.05;
    }
  
    let formData = new FormData();
    formData.append("file", file);
  
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload", true);
    xhr.send(formData);
  }
})