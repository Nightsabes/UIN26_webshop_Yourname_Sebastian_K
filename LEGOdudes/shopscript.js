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

 //Generer handlevogn :P

 function showCart(){
    //Unike produkter and stuffus
    let uniqueItems = new Set(cart)
    let uniqueArray = [...uniqueItems]
    //oversikt over antall per produkt XDDDDDDDDDDDDDDDD
    let cartItems = []
    uniqueArray.map(item => {
        cartItems.push({prodid: item, quantity: cart.filter(i => i === item).length})
    })
    //console.log(cartItems)
    //Gå gjennom cart items for å lage HTML til handelkurven og regne ut total priprprrssssssjijsfis:
    let cartHTML = ""
    let totalPrice = 0
    
    
    cartItems.map(ci => {
        //hente produktinformasjon
        let product = products.find(i => i.prodid === ci.prodid)
        //Skrive ut HTML
        cartHTML += `<tr>
                    <td class="title">${product.title}</td>
                    <td class="pris">${product.price}</td>
                    <td class="quantity">${ci.quantity}</td>
                    <td class="delete"><button>X</button></td>
                </tr>`
    })
    document.getElementById("cart-items").innerHTML = cartHTML
 }

 
 //Leg til i handle avang
function addToCart(prodid) {
    console.log("Legg til produkt med id: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("cart-quantity").innerHTML = cart.length

    //Oppdater handlevogn visning::::::::::::::
    showCart()
}