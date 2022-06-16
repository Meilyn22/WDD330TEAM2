// import ProductData from "./productData.js";
// import { getParams } from "./utils.js";
// import ProductDetails from "./productDetails.js";


// const dataSource = new ProductData("tents");
// const productId = getParams("product");
// const product = new ProductDetails(productId, dataSource);
// product.init();
// // dataSource.getData();

// // console.log(dataSource.findProductById(productId));


// // or should we do it this way?
// // async function getProductsDataAwait() {
// //   products = await fetch("../json/tents.json").then(convertToJson);
// // }

// // add listener to Add to Cart button
// // document.getElementById("addToCart").addEventListener("click", addToCart);



import ProductData from "./productData.js";
import ProductDetails from "./productDetails.js";
import { getParam } from "./utils.js";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();