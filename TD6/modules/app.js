import products from "./products.js";
import ui from "./ui.js";
import cart from "./cart.js";

export const init = () => {
  // cart.init();
  ui.buildProductList(products.list);
  ui.displayCart();
  // document.addEventListener('DOMContentLoaded', () => {
  //   cart.init();
  //   ui.displayCart();
  // });

  document.addEventListener('keyup', (event) => {
    const keywords = event.target.value;
    if (keywords !== "" && keywords !== undefined)
    {
      document.querySelector('#product-list').innerHTML = '';
      const productsList = products.search(keywords);
      ui.buildProductList(productsList);
    }
  });

  document.querySelector("#empty-cart").addEventListener('click', () => {
    cart.empty();
    ui.displayCart();
  });

  // document.querySelector('.product-add2cart').forEach( (btn) => {
  //   btn.addEventListener("click", function () {
  //     cart.add(product);
  //     displayCart();
  //   });
  // });
}