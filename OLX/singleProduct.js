function getURL (){
    const url = new URLSearchParams(window.location.search)
    const id = url.get("id")
    const name = url.get("name")
    getSingleProduct(id)
    console.log(id , name, )
}
getURL()


async function getSingleProduct(id) {
    const response = await fetch(`https://dummyjson.com/products/${id}`)
    const data = await response.json()
    console.log(data)
}

getAllProductData()