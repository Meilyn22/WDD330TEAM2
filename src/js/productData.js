// get tents data

function convertToJson(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw new Error("Bad Response");
    }
}

// add to cart button event handler
function addToCart(e) {  
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

  // getProductsData(); 

  export default class ProductData  {
    constructor(category) {
        this.category = category;
        this.path = `../json/${this.category}.json`;
    }
    getData() {
        return fetch(this.path)
        //.then(response => response.json())
        .then(convertToJson)
        .then((data) => console.log(data)
        // data;
        );
    }
    async findProductById(id) {
        const products = await this.getData()
        return products.find((item) => item.Id === id);
    }
  }