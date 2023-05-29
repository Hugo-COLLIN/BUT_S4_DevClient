(() => {
  // products.js
  var productsList = [
    { ref: "REF1", price: 250.29, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { ref: "REF2", price: 129.25, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { ref: "REF3", price: 18.1, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { ref: "REF4", price: 180.12, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { ref: "REF5", price: 318.5, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
    { ref: "REF6", price: 50.35, desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
  ];
  var search = (keywords) => {
    const matchKeywords = (element) => element.ref.includes(keywords) || element.desc.includes(keywords) || element.price.includes(keywords);
    let result = productsList.filter(matchKeywords);
    console.log(result);
    console.log(keywords);
    return result;
  };
  var products_default = {
    list: productsList,
    search
  };

  // cart.js
  var cartContent = [];
  var cart = "cart2";
  var init = () => {
    if (sessionStorage.getItem(cart)) {
      cartContent = JSON.parse(sessionStorage.getItem(cart));
    }
  };
  var addToCart = (product) => {
    const matchCart = (elt) => elt.productName === product.ref;
    let res = cartContent.filter(matchCart);
    res.length === 0 ? cartContent.push({ productName: product.ref, qty: 1, totalPrice: product.price }) : (res[0].qty++, res[0].totalPrice += product.price);
    console.log(cartContent);
    sessionStorage.setItem(cart, JSON.stringify(cartContent));
  };
  var genericCalc = () => {
    let cost = 0, qty = 0;
    cartContent.forEach((productTypeInCart) => {
      cost += productTypeInCart.totalPrice;
      qty += productTypeInCart.qty;
    });
    cost = cost.toFixed(2);
    return { cost, qty };
  };
  var emptyCart = () => {
    cartContent.length = 0;
  };
  var cart_default = {
    content: cartContent,
    add: addToCart,
    totalCart: genericCalc,
    empty: emptyCart,
    init
  };

  // ui.js
  var displayProducts = (product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("photo");
    productDiv.appendChild(photoDiv);
    const cameraIcon = document.createElement("span");
    cameraIcon.classList.add("mdi", "mdi-camera");
    photoDiv.appendChild(cameraIcon);
    const addToCartBtn = document.createElement("a");
    addToCartBtn.classList.add("product-add2cart");
    photoDiv.appendChild(addToCartBtn);
    addToCartBtn.addEventListener("click", function() {
      cart_default.add(product);
      displayCart();
    });
    const cartIcon = document.createElement("span");
    cartIcon.classList.add("mdi", "mdi-cart");
    addToCartBtn.appendChild(cartIcon);
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("details");
    productDiv.appendChild(detailsDiv);
    const detailsTopDiv = document.createElement("div");
    detailsTopDiv.classList.add("details-top");
    detailsDiv.appendChild(detailsTopDiv);
    const ref = document.createElement("strong");
    ref.classList.add("bigger");
    ref.dataset.type = "ref";
    ref.textContent = "#" + product.ref;
    detailsTopDiv.appendChild(ref);
    const price = document.createElement("strong");
    price.classList.add("bigger");
    price.dataset.type = "price";
    price.textContent = product.price.toString().replace(".", ",") + ` \u20AC`;
    detailsTopDiv.appendChild(price);
    const descriptionDiv = document.createElement("div");
    descriptionDiv.classList.add("details-description");
    descriptionDiv.textContent = product.desc;
    detailsDiv.appendChild(descriptionDiv);
    return productDiv;
  };
  var buildProductList = (products) => {
    const productsDiv = document.querySelector("#product-list");
    products.forEach((product) => {
      productsDiv.appendChild(displayProducts(product));
    });
  };
  var displayCart = () => {
    const cartContent2 = document.querySelector("#cart-content");
    cartContent2.innerHTML = "";
    cart_default.content.forEach((elt) => {
      const lineTr = document.createElement("tr");
      cartContent2.appendChild(lineTr);
      for (const prop in elt) {
        const col = document.createElement("td");
        col.setAttribute("data-type", prop);
        if (typeof elt[prop] === "number")
          col.innerHTML = elt[prop].toString().replace(".", ",");
        else
          col.innerHTML = elt[prop];
        lineTr.appendChild(col);
      }
    });
    const t = cart_default.totalCart();
    const cartTotal = document.querySelector("#cart-total");
    cartTotal.innerHTML = t.cost.replace(".", ",") + " \u20AC";
    const cartNbProducts = document.querySelector("#total-products");
    cartNbProducts.innerHTML = t.qty.toString();
  };
  var ui_default = {
    buildProductList,
    displayCart
  };

  // app.js
  var init2 = () => {
    ui_default.buildProductList(products_default.list);
    ui_default.displayCart();
    document.addEventListener("keyup", (event) => {
      const keywords = event.target.value;
      if (keywords !== "" && keywords !== void 0) {
        document.querySelector("#product-list").innerHTML = "";
        const productsList2 = products_default.search(keywords);
        ui_default.buildProductList(productsList2);
      }
    });
    document.querySelector("#empty-cart").addEventListener("click", () => {
      cart_default.empty();
      ui_default.displayCart();
    });
  };

  // main.js
  document.addEventListener("DOMContentLoaded", () => {
    init2();
  });
})();
