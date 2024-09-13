console.log("Script loaded");

const products = getAvailableProducts();

function renderProducts(products) {
  const product_list = document.getElementById("product-list");
  products.forEach((i) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `
        <h2>${i.name}</h2>
        <p>${i.price}</p>
        <p>${i.rating}</p>
    `;
    product_list.appendChild(listItem);
  });
  return product_list;
}

renderProducts(products);
