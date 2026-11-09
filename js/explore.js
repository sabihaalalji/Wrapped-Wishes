const exploreWishlists = JSON.parse(localStorage.getItem("wishlists"))|| [];
const users = JSON.parse(localStorage.getItem("users")) || [];


exploreWishlists.forEach((wishlist) => {const creator = users.find((user) => user.email === wishlist.creatorEmail);
  const card = document.createElement("div");
  card.classList.add("wishlist-card");
  card.textContent = `
   
 ${creator?.name || "Someone"}
   ${wishlist.wishlistName}
${wishlist.description}
${wishlist.occasion}
${wishlist.itemName}
${wishlist.itemLink}`;

  const exploreContainer = document.getElementById("explore-container");
  exploreContainer.appendChild(card);
  const button = document.createElement("button");
  document.createElement("button")
  button.textContent = "Reserve";
  card.appendChild(button)
  button.addEventListener("click", function() {
  wishlist.isReserved = true;
});
  });

