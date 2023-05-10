import products from "./products.js";
import ui from "./ui.js";

export const init = () => {
  ui.buildProductList(products.list);
}