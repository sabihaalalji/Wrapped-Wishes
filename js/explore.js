
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

  // Show the correct button text when the page loads
  if (wishlist.isReserved === true) {
    button.textContent = "Unreserve";
  } else {
    button.textContent = "Reserve";
  }

  card.appendChild(button);

  button.addEventListener("click", function () {
    if (wishlist.isReserved === false) {
      wishlist.isReserved = true;
      button.textContent = "Unreserve";
    } else {
      wishlist.isReserved = false;
      button.textContent = "Reserve";
    }

    localStorage.setItem(
      "wishlists",
      JSON.stringify(exploreWishlists)
    );
  });
});
