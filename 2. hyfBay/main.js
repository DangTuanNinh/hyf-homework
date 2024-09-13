// 2.1. Filter products

const products = getAvailableProducts();

function renderProducts(products) {
  const product_list = document.getElementById("product-list");
  product_list.innerHTML = "";
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

// 2.2 Searching for products
function filterProducts() {
  const searchTerm = document.getElementById("searchBox").value.toLowerCase();
  const maxPrice = document.getElementById("maxPriceBox").value;

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
}
document.getElementById("searchBox").addEventListener("input", filterProducts);
document
  .getElementById("maxPriceBox")
  .addEventListener("input", filterProducts);
renderProducts(products);
