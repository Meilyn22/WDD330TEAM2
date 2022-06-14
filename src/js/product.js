let products = [];
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// get tents data
function getProductsData() {
  fetch("../json/tents.json")
    .then(convertToJson)
    .then((data) => {
      products = data;
    });
}
// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch('../json/tents.json').then(convertToJson);
// }

// add to cart button event handler
function addToCart(e) {
  const product = products.find((item) => item.Id === e.target.dataset.id);
  const currentProducts = getLocalStorage("so-cart");

  if (currentProducts) {
    const existingProduct = currentProducts.find(
      (item) => item.Id === product.Id
    );

    if (existingProduct) {
      currentProducts.forEach((currentProduct) => {
        if (currentProduct.Id == existingProduct.Id) {
          currentProduct.Quantity++;
        }
      });
    } else {
      product.Quantity = 1;
      currentProducts.push(product);
    }
    setLocalStorage("so-cart", currentProducts);
  } else {
    product.Quantity = 1;
    const cartItems = [product];
    setLocalStorage("so-cart", cartItems);
  }
}

getProductsData();
// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);
