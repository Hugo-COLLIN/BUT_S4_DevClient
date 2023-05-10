let displayProducts = (product) => {
  const productDiv = document.createElement('div');
  productDiv.classList.add('product');

  // Créez un titre h2 pour le nom du produit
  const productName = document.createElement('h2');
  productName.textContent = product.name;
  productDiv.appendChild(productName);

  // Créez un élément p pour le prix du produit
  const productPrice = document.createElement('p');
  productPrice.textContent = product.price;
  productDiv.appendChild(productPrice);

  // Retournez l'élément productDiv pour pouvoir l'ajouter au DOM principal
  return productDiv;
}

let buildProductList = (products) => {
  const productsDiv = document.querySelector('#product-list');
  products.forEach((product) => {
    productsDiv.appendChild(displayProducts(product));
  });
}

export default {
  buildProductList,
}