const exploreWishlists = JSON.parse(localStorage.getItem("wishlists"))
exploreWishlists.forEach(wishlist => { const card =document.createElement("div")
   card.classList.add("wishlist-card")
   card.textContent = `${wishlist.wishlistName}
${wishlist.description}
${wishlist.occasion}
${wishlist.itemName}
${wishlist.itemLink}`;

const exploreContainer = document.getElementById("explore-container")
exploreContainer.appendChild(card);
});