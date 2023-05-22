const chooseQantity = document.querySelectorAll('.product__quantity-control');
const addToCart = document.querySelectorAll('.product__add');
const cart = document.querySelector('.cart__products');

chooseQantity.forEach((i) => {
  i.onclick = () => {
    if(i.classList.contains('product__quantity-control_dec')) {  
       if(Number(i.nextElementSibling.innerText) == 1) {
          return;
       }
       i.nextElementSibling.innerText = Number(i.nextElementSibling.innerText) - 1;
    } else if (i.classList.contains('product__quantity-control_inc')){
        i.previousElementSibling.innerText = Number(i.previousElementSibling.innerText) + 1; 
    }
  }  
})

addToCart.forEach((i) => {
  i.onclick = () => { 
    let allProductsInCart = Array.from(document.querySelectorAll('.cart__product'));
    if(allProductsInCart.find((j) => j.getAttribute('data-id') == i.closest('.product').getAttribute('data-id'))) {
       cart.querySelector(`div[data-id="${i.closest('.product').getAttribute('data-id')}"]`).querySelector('.cart__product-count').innerText = Number(i.previousElementSibling.querySelector('.product__quantity-value').innerText) + Number(cart.querySelector(`div[data-id="${i.closest('.product').getAttribute('data-id')}"]`).querySelector('.cart__product-count').innerText);
       return;
    };

       cart.insertAdjacentHTML('beforeend', `
        <div class="cart__product" data-id="${i.closest('.product').getAttribute('data-id')}">
          <img class="cart__product-image" src="${i.closest('.product').querySelector('.product__image').getAttribute('src')}">
          <div class="cart__product-count">${i.previousElementSibling.querySelector('.product__quantity-value').innerText}</div>
        </div>
       `);
  }     
})