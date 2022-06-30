import ExternalServices from "./externalServices.js";
import ProductDetails from "./productDetails.js";
import { getParam } from "./utils.js";

const productId = getParam("product");
const dataSource = new ExternalServices();

const product = new ProductDetails(productId, dataSource);
product.init();