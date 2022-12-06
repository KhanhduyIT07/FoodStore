//CART
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.carts');
let cartClose = document.querySelector('#close-cart');
let count = 0

//  mở cart
cartIcon.onclick = () => {
     cart.classList.add("active")
}
// đóng cart 
cartClose.onclick = () => {
     cart.classList.remove("active")
}
//  Cart woking js
if (document.readyState == 'loading') {
     document.addEventListener("DOMContentLoaded", ready)
} else {
     ready();
}

// making function
function ready() {
     // remove Item trong cart
     let removeCartButton = document.getElementsByClassName("carts-remove")
     console.log(removeCartButton);
     for (let i = 0; i < removeCartButton.length; i++) {
          let button = removeCartButton[i];
          button.addEventListener('click', removeCartItem)
     }
     // Quantity Changes
     let quantilyInputs = document.getElementsByClassName('carts-quantity')
     for (let i = 0; i < quantilyInputs.length; i++) {
          let input = quantilyInputs[i];
          input.addEventListener('change', quantilyChanged);
     }

     // Add to cart
     var addcart = document.getElementsByClassName('add-cart')
     for (let i = 0; i < addcart.length; i++) {
          var button = addcart[i];
          button.addEventListener('click', addCartClick)
     }
     // Buy button
     document.getElementsByClassName('btn-buy')[0]
          .addEventListener('click', buyBtClicked);
}
// Buy buton --
function buyBtClicked() {
     alert('Your Order is pleae')
     let cartContent = document.getElementsByClassName('carts-content')[0]
     while (cartContent.hasChildNodes()) {
          cartContent.removeChild(cartContent.firstChild)
     }
     upDatetotal()
}
// item
function removeCartItem(event) {
     let buttonClicked = event.target
     buttonClicked.parentElement.remove()
     count--;
     document.getElementsByClassName('non-empty')[0].innerHTML = `<span>${count}</span>`
     upDatetotal()
}

// Quantyti Changes
// neeus nhaapj gias trij aam thif nos xe mac dinh la 1 va am thi khjong dc
function quantilyChanged(event) {
     let input = event.target
     if (isNaN(input.value) || input.value <= 0) {
          input.value = 1;
     }
     upDatetotal();
}
// data gio hang
function addCartClick(event) {
     var button = event.target
     var shopAddCart = button.parentElement
     var title = shopAddCart.getElementsByClassName('product-title')[0].innerText;
     var price = shopAddCart.getElementsByClassName('menu__preci')[0].innerText;
     var productimg = shopAddCart.getElementsByClassName('menu__img')[0].src;
     count++;
     document.getElementsByClassName('non-empty')[0].innerHTML = `<span>${count}</span>`
     addProductTocart(title, price, productimg);
     upDatetotal()
}
// 
function addProductTocart(title, price, productimg) {
     let cartShopbox = document.createElement('div');
     cartShopbox.classList.add('carts-box');
     let cartItems = document.getElementsByClassName('carts-content')[0];
     let cartItemsName = cartItems.getElementsByClassName('carts-product-titles');
     for (let i = 0; i < cartItemsName.length; i++) {
          if (cartItemsName[i].innerText == title) {
               alert(" You have add this item to cart");
               return;
          }
     }
     // 
     let cartBoxcontent = `<img src="${productimg}" alt="" class="carts-img">
                            <div class="detail-box">
                                <div class="carts-product-titles">${title}</div>
                                <div class="carts-price">${price}</div>
                                <input type="number" value="1" class="carts-quantity">
                            </div>
                            <!--  remote cart -->
                            <i class='bx bxs-trash-alt carts-remove'></i>`;
     cartShopbox.innerHTML = cartBoxcontent
     cartItems.append(cartShopbox)
     cartShopbox.getElementsByClassName('carts-remove')[0]
          .addEventListener('click', removeCartItem);
     cartShopbox.getElementsByClassName('carts-quantity')[0]
          .addEventListener('change', quantilyChanged);
}
// Update Total
function upDatetotal() {
     let cartContent = document.getElementsByClassName('carts-content')[0]
     let cartBoxes = cartContent.getElementsByClassName('carts-box')
     let total = 0;
     for (let i = 0; i < cartBoxes.length; i++) {
          let cartBox = cartBoxes[i];
          let priceElement = cartBox.getElementsByClassName('carts-price')[0];
          let quantilyElement = cartBox.getElementsByClassName('carts-quantity')[0];
          let price = parseFloat(priceElement.innerText.replace("$", ""));
          let quantily = quantilyElement.value;
          // tính total tien 

          total = total + (price * quantily);
          // float
     }
     // neu gia tien la so le co du phay vidu 4,5 thi dung cai nay
     total = Math.round(total * 100) / 100;

     document.getElementsByClassName('total-price')[0].innerText = "$" + total;


}