import ProductData from "./productData.js";
import ProductList from "./productList.js";

// Creates instance of ProductData class
const dataSource = new ProductData('tents');
// Retrieves desired element from the product list
const listElement = document.querySelector(".product-list");
// Creates instance of ProductList and sends it the right info
const myList = new ProductList('tents', dataSource, listElement)
// Initializes in order to show products
myList.init();