let myName = undefined


function login() {
    let email = document.getElementById("email") //sync js
    let password = document.getElementById("password") //sync js

    console.log("form running successfully!") //sync js

    // setTimeout(() => { //async javascript
    //     console.log("running")
    //     console.log("login successfully!")
    // }, 6000)

    // fetch('https://dummyjson.com/products')
    //     .then(res => res.json())
    //     .then(res =>  response = res);
    
    
    console.log("form submitted successfully!1") //sync js
    console.log("form submitted successfully!7") //sync js
    console.log("form submitted successfully!5") //sync js
    console.log("form submitted successfully!3") //sync js
    console.log("form submitted successfully! 2") //sync js
    
}
getProductData()

async function getProductData() {
    const response = await fetch('https://dummyjson.com/products')
    const { products } = await response.json()
    console.log(products)
    renderProductCard(products);


}



function renderProductCard(products) {
    const container = document.getElementById("product-container");

    container.innerHTML = ''
    for (var i = 0; i <= products.length; i++) {
        const { thumbnail, title, description, price, rating, discountPercentage , stock } = products[i]
        const discountedPrice = price - (price * discountPercentage / 100);
        container.innerHTML += `
        <div class="card">
            <img src="${thumbnail}" alt="${title}" />
            <div class="card-body">
                <div class="card-title">${title}</div>
                <div class="card-desc">${description}</div>

                <div class="price">
                    $${discountedPrice.toFixed(2)}
                    <span class="discount">(${discountPercentage}% OFF)</span>
                </div>

                <div class="rating">⭐ ${rating}</div>

                <div>Stock: ${stock}</div>

                <button class="btn">Add to Cart</button>
            </div>
        </div>
    `;

    }

}
