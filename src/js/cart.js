function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function getCartContents() {
  const cartItems = getLocalStorage("so-cart");
  // const htmlItems = cartItems((item) => renderCartItem(item));
  let htmlItems = [];
  cartItems.forEach((cartItem) => {
    const htmlItem = renderCartItem(cartItem);
    htmlItems.push(htmlItem);
  })
  document.querySelector(".product-list").innerHTML = htmlItems;
  // document.querySelector('.product-list').innerHTML = renderCartItem(cartItems);
}

function renderCartItem(item) {
  const newItem = `<li class='cart-card divider'>
  <a href='#' class='cart-card__image'>
    <img
      src='${item.Image}'
      alt='${item.Name}'
    />
  </a>
  <a href='#'>
    <h2 class='card__name'>${item.Name}</h2>
  </a>
  <p class='cart-card__color'>${item.Colors[0].ColorName}</p>
  <p class='cart-card__quantity'>qty: ${item.Quantity}</p>
  <p class='cart-card__price'>$${item.FinalPrice}</p>
</li>`;
  // console.log(newItem);
  return newItem;
}

getCartContents();
