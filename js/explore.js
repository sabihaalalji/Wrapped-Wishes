
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const exploreWishlists = JSON.parse(localStorage.getItem("wishlists")) || [];
const users = JSON.parse(localStorage.getItem("users")) || [];

const exploreContainer = document.getElementById("explore-container");

exploreWishlists.forEach((wishlist) => {
  const creator = users.find(
    (user) => user.email === wishlist.creatorEmail
  );

  
  const gifts = wishlist.items || (wishlist.itemName ? [wishlist] : []);

  gifts.forEach((gift) => {
    const card = document.createElement("div");
    card.classList.add("wishlist-card");

    card.textContent = `
      ${creator?.name || "Someone"}
      ${wishlist.wishlistName}
      ${wishlist.description}
      ${wishlist.occasion}
      ${gift.itemName}
    `;

    const button = document.createElement("button");

    
    if (gift.isReserved === true) {
      if (gift.reservedBy === currentUser.email) {
        button.textContent = "Unreserve";
      } else {
        button.textContent = "Already Reserved";
        button.disabled = true;
      }
    } else {
      button.textContent = "Reserve";
    }

    card.appendChild(button);
    exploreContainer.appendChild(card);

    button.addEventListener("click", function () {
      if (gift.isReserved !== true) {
        gift.isReserved = true;
        gift.reservedBy = currentUser.email;
        button.textContent = "Unreserve";
      } else if (gift.reservedBy === currentUser.email) {
        gift.isReserved = false;
        gift.reservedBy = null;
        button.textContent = "Reserve";
      }

      localStorage.setItem(
        "wishlists",
        JSON.stringify(exploreWishlists)
      );
    });
  });
});
