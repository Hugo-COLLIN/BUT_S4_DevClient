import cart from "./cart.js";

let displayProducts = (product) => {
  // élément div pour contenir le produit
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  // élément div pour contenir la photo et les icônes
  const photoDiv = document.createElement('div');
  photoDiv.classList.add('photo');
  productDiv.appendChild(photoDiv);

  // élément span pour l'icône de la caméra
  const cameraIcon = document.createElement('span');
  cameraIcon.classList.add('mdi', 'mdi-camera');
  photoDiv.appendChild(cameraIcon);

  // élément a pour le bouton d'ajout au panier
  const addToCartBtn = document.createElement('a');
  addToCartBtn.classList.add('product-add2cart');
  photoDiv.appendChild(addToCartBtn);
  addToCartBtn.addEventListener("click", function () {
    cart.add(product);
    displayCart();
  })

  // élément span pour l'icône du panier
  const cartIcon = document.createElement('span');
  cartIcon.classList.add('mdi', 'mdi-cart');
  addToCartBtn.appendChild(cartIcon);

  // élément div pour contenir les détails du produit
  const detailsDiv = document.createElement('div');
  detailsDiv.classList.add('details');
  productDiv.appendChild(detailsDiv);

  // élément div pour contenir les informations en haut des détails
  const detailsTopDiv = document.createElement('div');
  detailsTopDiv.classList.add('details-top');
  detailsDiv.appendChild(detailsTopDiv);

  // élément strong pour la référence du produit
  const ref = document.createElement('strong');
  ref.classList.add('bigger');
  ref.dataset.type = 'ref';
  ref.textContent = '#' + product.ref;
  detailsTopDiv.appendChild(ref);

  // élément strong pour le prix du produit
  const price = document.createElement('strong');
  price.classList.add('bigger');
  price.dataset.type = 'price';
  price.textContent = product.price + ` €`;
  detailsTopDiv.appendChild(price);

  // élément div pour la description du produit
  const descriptionDiv = document.createElement('div');
  descriptionDiv.classList.add('details-description');
  descriptionDiv.textContent = product.desc;
  detailsDiv.appendChild(descriptionDiv);

  // Retourne l'élément productDiv pour pouvoir l'ajouter au DOM principal
  return productDiv;
}

let buildProductList = (products) => {
  const productsDiv = document.querySelector('#product-list');
  products.forEach((product) => {
    productsDiv.appendChild(displayProducts(product));
  });
}

let displayCart = () => {
  // --- Update cart content ---
  const cartContent = document.querySelector("#cart-content");
  cartContent.innerHTML = "";

  cart.content.forEach((elt) => {
    const lineTr = document.createElement('tr');
    cartContent.appendChild(lineTr);

    //TODO : use map and reduce
    for (const prop in elt)
    {
      const col = document.createElement('td');
      col.setAttribute("data-type", prop);
      col.innerHTML = elt[prop];
      lineTr.appendChild(col);
    }
  });

  // --- Update cart total ---
  const cartTotal = document.querySelector("#cart-total");
  cartTotal.innerHTML = cart.totalCart().cost + " €";

  const cartNbProducts = document.querySelector('#total-products');
  cartNbProducts.innerHTML = cart.totalCart().qty + "";

}

export default {
  buildProductList,
  displayCart
}