let cartContent = [];
const cart = "cart2";

// const init = () => {
//   if (sessionStorage.getItem(cart) !== null)
//     cartContent = JSON.parse(sessionStorage.getItem(cart));
//   console.log("passe")
//   console.log(cartContent);
// }

const init = () => {
  if (sessionStorage.getItem(cart)) {
    cartContent = JSON.parse(sessionStorage.getItem(cart));
  }
};

const addToCart = (product) => {
  // if (localStorage.getItem(cart) === null)
  const matchCart = (elt) => elt.productName === product.ref;
  let res = cartContent.filter(matchCart);
  res.length === 0 ? cartContent.push({productName: product.ref, qty: 1, totalPrice: product.price}) : (res[0].qty ++, res[0].totalPrice += product.price ) ;
  console.log(cartContent);
  sessionStorage.setItem(cart, JSON.stringify(cartContent));
};

const genericCalc = () => {
  let cost = 0, qty = 0;
  cartContent.forEach((productTypeInCart) => {
    cost += productTypeInCart.totalPrice;
    qty += productTypeInCart.qty;
  });
  cost = cost.toFixed(2);
  return {cost, qty};
}

const emptyCart = () => {
  cartContent.length = 0;
}

export default {
  content: cartContent,
  add: addToCart,
  totalCart: genericCalc,
  empty: emptyCart,
  init: init
}