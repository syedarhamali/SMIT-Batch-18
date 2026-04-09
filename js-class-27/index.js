var products = JSON.parse(localStorage.getItem('products')) ||  []

class Product {
    constructor(productName, quantity, category, price, expiryDate) {
        this.productName = productName
        this.quantity = quantity
        this.category = category
        this.price = price
        this.expiryDate = expiryDate
        this.inputDate = new Date()
        this.userName = 'Arham'
    }

    getDiscount(){
        this.finalPrice = this.price - (this.price * 0.10)
        return this.finalPrice
    }
}

// function getDiscount (productObject){
//     var {price} = productObject // destructing
//     var finalPrice = price - (price * 0.10)
//     return finalPrice
// }

function handleSubmit(event) {
    event.preventDefault()

    var productName = document.getElementById("productName")
    var quantity = document.getElementById("quantity")
    var category = document.getElementById("category")
    var price = document.getElementById("price")
    var expiryDate = document.getElementById("expiryDate")

    var product = new Product(productName.value , quantity.value , category.value , price.value , expiryDate.value)

    console.log(product)
    products.push(product)

    localStorage.setItem("products" , JSON.stringify(products))
    console.log(product)

}


function handleDiscount (){
    var getFinalProductPrice = getDiscount(products[0])
    console.log(getFinalProductPrice)
}