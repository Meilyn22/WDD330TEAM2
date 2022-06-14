import ProductData from './productData.js';
import { getParams } from './utils.js';


const dataSource = new ProductData('tents');
const productId = getParams('product');
dataSource.getData();

console.log(dataSource.findProductById(productId));

let products = [];

function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

// or should we do it this way?
// async function getProductsDataAwait() {
//   products = await fetch('../json/tents.json').then(convertToJson);
// }

// add listener to Add to Cart button
document.getElementById("addToCart").addEventListener("click", addToCart);

function filterProducts(e) {
  const products = products.find((item) => item.Id === e.target.dataset.id);
}