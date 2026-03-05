// var userOne = {
//     firstName: 'Hello',
//     lastName: 'World',
//     age: 24
// }

// var userTwo = {
//     firstName: 'Hello 2',
//     lastName: 'World 2',
//     age: 23
// }

// console.log(userOne)
// console.log(userOne.firstName)
// console.log(userOne.nationality) //undefined
// console.log(userOne['lastName'])
// console.log(userOne['age'])

// var { firstName, lastName, age } = userOne //destructuring 

// console.log(firstName)
// console.log(lastName)
// console.log(age)


// var { firstName:secondName, lastName, age } = userTwo


// console.log(secondName)
// console.log(lastName)
// console.log(age)


var users = [
    { firstName: 'Hammad', lastName: 'Ashraf', age: 20 },
    { firstName: 'Wahaj', lastName: 'Amir', age: 17 },
    { firstName: 'Muhammad', lastName: 'Rehan', age: 18 }
]

var products = [
    { productName: 'Airpods', productPrice: 400, productDiscPercent: 50, productImage: 'https://img.drz.lazcdn.com/static/pk/p/e65cd132a61f03fed20a68d6b878fb5c.png_200x200q80.png_.avif' },
    { productName: 'Airpods Apple', productPrice: 500, productDiscPercent: 40, productImage: 'https://img.drz.lazcdn.com/static/pk/p/e65cd132a61f03fed20a68d6b878fb5c.png_200x200q80.png_.avif' },
    { productName: 'Macbook', productPrice: 1500, productDiscPercent: 30, productImage: 'https://img.drz.lazcdn.com/static/pk/p/e65cd132a61f03fed20a68d6b878fb5c.png_200x200q80.png_.avif' },
    { productName: 'New Data', productPrice: 2500, productDiscPercent: 50, productImage: 'https://img.drz.lazcdn.com/static/pk/p/e65cd132a61f03fed20a68d6b878fb5c.png_200x200q80.png_.avif' },

]

function showCards() {
    var cardsContainer = document.getElementById("cards")
    for (var i = 0; i < products.length; i++) {
        var {productImage , productName , productPrice , productDiscPercent} = products[i]
        cardsContainer.innerHTML += `
        <article class="card">
            <div class="card__img">
                <img src=${productImage} alt="">
            </div>
            <div class="card__name">
                <p>${productName}</p>
            </div>
            <div class="card__precis">
                <a href="" class="card__icon"><ion-icon name="heart-outline"></ion-icon></a>

                <div>
                    <span class="card__preci card__preci--before">$${productDiscPercent}.00</span>
                    <span class="card__preci card__preci--now">$${productPrice}.00</span>
                </div>
                <a href="" class="card__icon"><ion-icon name="cart-outline"></ion-icon></a>
            </div>
        </article>`
    }
}
