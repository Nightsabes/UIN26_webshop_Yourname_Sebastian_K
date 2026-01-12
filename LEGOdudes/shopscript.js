document.getElementById("cart-button").addEventListener("click", function(){
    document.getElementById("cart").classList.toggle("hidden")
})

//FUNKSJON FOR PRODUKTOPPLISTNING ING ING ING ING ING ING

function fetchProducts() {
    let productHTML = ""
    products.map(p  => productHTML += `<article class="product-card">
                <img src="website_images/PROD_${p.imagefile}" alt="${p.title}">
                <a href="#">${p.category}</a>
                <h3>${p.title}</h3>
                <p>kr.${p.price},-</p>
                <button onClick="addToCart(${p.prodid})">Legg i hanglekruv</button>
            </article>`) /*Nå ble det pent :/ */
    document.getElementById("product-list").innerHTML = productHTML
}


 fetchProducts()

 //Leg til i handle avang
function addToCart(prodid) {
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("cart-quantity").innerHTML = cart.length
}