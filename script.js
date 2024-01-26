var navbar=document.querySelector('.hearder.navbar');
document.querySelector('#menu-btn').onclick=() =>{
    navbar.classList.add('active')
}
document.querySelector('#close-navbar').onclick=() =>{
    navbar.classList.remove('active')
}





coffees=
[
    {id:1,img:"photos/LattePhoto.jpg",price:"3$",title:"Latte Drink",},
    {id:2,img:"Iced-MatchaPhoto.jpg",price:"4$",title:"Iced Matcha ",},
    {id:3,img:"pinkDrinkPhoto.jpg",price:"6$",title:"Pink Drink ",},
    {id:4,img:"photos/latteDrink With Cinnamon.jpg",price:"4.25$",title:"Hot Chocolate With cinnamon",}
    {id:3,img:"photos/icedCoffeePhoto.jpg",price:"5$",title:"Iced Coffee ",},
    {id:3,img:"photos/fluffy-cinnamon-rolls.jpg",price:"5.50$",title:"fluffy-cinnamon-rolls ",}

]

$(document).ready(function(){
    var containerCofee= $("#coffeCardContainer");
    $.each(coffees, function(i,coffee){
        var myCard= $("<div>").addClass("card").html(`
        <img src=${coffee.img}/ >
        <p> price: ${coffee.price }</p>
        <h1>${coffee.title}</h1>
        <button class="Buy"  onclick= "addtocart(${coffee.id})"> Buy </button>
        
        `)
        containerCofee.append(myCard)
    })
})



function addToCart(productId) {
    var product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        alert("Produit ajouté au panier !");
    }
}
function viewCart() {
    var cartContents = cart.map(product => ${product.name} - $${product.price}).join('\n');
    alert("Contenu du panier :\n" + cartContents);
}







function login(username, password) {
    // Check if the username and password match your database records
    if (username === "yourUsername" && password === "yourPassword") {
      alert("Login successful!"); // Display success message
    } else {
      alert("Invalid credentials. Please try again."); // Display error message
    }
  }