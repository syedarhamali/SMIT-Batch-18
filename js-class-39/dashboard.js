function getAndSetUserDetail() {
    let { fullName, email, password } = JSON.parse(localStorage.getItem('user'))
    let con = document.getElementById('container')
    con.innerHTML = `<li>${fullName}</li><li>${password}</li><li>${email}</li>`

}

// getAndSetUserDetail()



function getUserDetail() {
    let { fullName, email, password } = JSON.parse(localStorage.getItem('user'))
    return { fullName, email, password }
}


async function getProductData() {
    const response = await fetch("https://dummyjson.com/products")
    const { products } = await response.json()
    return products
}


// export default getAndSetUserDetail

export {
    getAndSetUserDetail,
    getUserDetail,
    getProductData
}