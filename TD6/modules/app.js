import products from "./products";
import ui from "./ui";

const init = () => {
  ui.buildProductList(products.list);
}