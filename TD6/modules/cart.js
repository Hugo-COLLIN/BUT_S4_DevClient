const cartContent = [];

let addToCart = (product) => {
  const matchCart = (elt) => elt.productName === product;
  let res = cartContent.filter(matchCart);
  res.length === 0 ? cartContent.push({productName: product, qty: 1}) : res[0].qty ++ ;
  console.log(cartContent);
}

export default {
  content: cartContent,
  add: addToCart
}