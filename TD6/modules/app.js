import products from "./products.js";
import ui from "./ui.js";

export const init = () => {
  ui.buildProductList(products.list);

  document.addEventListener('keyup', (event) => {
    document.querySelector('#product-list').innerHTML = '';
    const keywords = event.target.value;
    const productsList = products.search(keywords);
    ui.buildProductList(productsList);
  });
}