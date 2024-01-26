// var navbar=document.querySelector('.hearder.navbar');
// document.querySelector('#menu-btn').onclick=() =>{
//     navbar.classList.add('active')
// }
// document.querySelector('#close').onclick=() =>{
//     navbar.classList.remove('active')
// }


function each(array,func)
    {
        for(i=0;i<array.length;i++ )
        {
            func(array[i])
        }
    }

coffees=
[
    {id:1,img:"./menu/p1.jpg",price:"3$",title:"Cinmmon Roll",},
    {id:2,img:"./menu/p2.jpg",price:"4$",title:"Iced Matcha ",},
    {id:3,img:"./menu/p6.jpg",price:"6$",title:"Pink Drink ",},
    {id:4,img:"./menu/p5.jpg",price:"4.25$",title:"Hot Chocolate",},
    {id:3,img:"./menu/p3.jpg",price:"5$",title:"Iced Coffee ",},
    // {id:3,img:"./menu/p4.jpg",price:"5.50$",title:"fluffy-cinnamon-rolls ",}

]

$(document).ready(function(){


    for(i=0;i<coffees.length;i++)
    {
    $("#coffeCardContainer").append(`<div style="display:flex;flex-wrap:wrap;flex-direction:column"="card"><div style="width:200px;height:200px;display:flex;flex-wrap:wrap;flex-direction:row;">
    <img style="width:150px;height:200px" src="${coffees[i].img}" alt="">
    </div>
    <div>
    <p> price: ${coffees[i].price }</p>
    <h1>${coffees[i].title}</h1>
    <div/>
    <button class="Buy"  onclick= "addtocart(${coffees.id})"> Buy </button>
    

   </div> `)
        
    } 
  

//    each(coffees, function(i,coffee){
//         var myCard= $("<div>").addClass("card").html(`
//         <img src="${coffee.img}">
       
//         `)
//         containerCofee.append(myCard)
//     })
})



// function addToCart(productId) {
//     var product = products.find(p => p.id === productId);
//     if (product) {
//         cart.push(product);
//         alert("Produit ajouté au panier !");
//     }
// }
// function viewCart() {
//     // var cartContents = cart.map(product => ${product.name} - $${product.price}).join('\n');
//     alert("Contenu du panier :\n" + cartContents);
// }







// function login(username, password) {
//     // Check if the username and password match your database records
//     if (username === "yourUsername" && password === "yourPassword") {
//       alert("Login successful!"); // Display success message
//     } else {
//       alert("Invalid credentials. Please try again."); // Display error message
//     }
//   }