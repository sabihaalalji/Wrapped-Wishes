const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const exploreWishlists = JSON.parse(localStorage.getItem("wishlists")) || [];
const users = JSON.parse(localStorage.getItem("users")) || [];

exploreWishlists.forEach((wishlist) => {
  const creator = users.find(
    (user) => user.email === wishlist.creatorEmail
  );

  const card = document.createElement("div");
  card.classList.add("wishlist-card");

  card.textContent = `
    ${creator?.name || "Someone"}
    ${wishlist.wishlistName}
    ${wishlist.description}
    ${wishlist.occasion}
    ${wishlist.itemName}
    ${wishlist.itemLink}
  `;

  const exploreContainer = document.getElementById("explore-container");
  exploreContainer.appendChild(card);

  const button = document.createElement("button");

 
  if (wishlist.isReserved === true) {
    button.textContent = "Unreserve";
  } else {
    button.textContent = "Reserve";
  }

  card.appendChild(button);

  button.addEventListener("click", function () {
   if (wishlist.isReserved !== true) {
      wishlist.isReserved = true;
      wishlist.reservedBy=currentUser.email
      button.textContent = "Unreserve";
    } else {
      wishlist.isReserved = false;
      wishlist.reservedBy = null;
      button.textContent = "Reserve";
    }
   

    localStorage.setItem(
      "wishlists",
      JSON.stringify(exploreWishlists)
    );
  });
});
