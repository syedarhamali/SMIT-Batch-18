async function getAllProductData() {
    const response = await fetch('https://dummyjson.com/products')
    const { products } = await response.json()
    renderCards(products)
}

getAllProductData()


function renderCards(products) {
    const productsElement = document.getElementById("products")

    products.map((product) => {
        const {id , title , description , price , discountPercentage , thumbnail} = product
        console.log(product)

        productsElement.innerHTML += `<div class="card">
  <img class="card-img" src=${thumbnail} alt="Kiwi" />

  <div class="card-body">
    <h2 class="title">${title}</h2>

    <p class="description">
    ${description}
    </p>

    <div class="price-section">
      <span class="discounted-price">$${price}</span>
      <span class="original-price">$2.49</span>
      <span class="discount">${discountPercentage}% OFF</span>
    </div>

    <div class="rating">⭐ 4.93 (3 reviews)</div>

    <div class="stock in-stock">In Stock</div>

    <div class="extra-info">
      <p>Category: groceries</p>
      <p>Shipping: Ships overnight</p>
      <p>Return: 7 days return policy</p>
    </div>

    <button class="btn" onclick="showSingleProduct(${id})">View Detail</button>
  </div>
</div>`
    })
}


function showSingleProduct(id){
    window.location.href= `./singleProduct.html?id=${id}`
}