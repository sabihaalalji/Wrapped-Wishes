const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const wishlists = JSON.parse(localStorage.getItem("wishlists")) || [];

const reservationsContainer = document.querySelector(".your-reservations");

wishlists.forEach((wishlist) => {

  const gifts = wishlist.items || (wishlist.itemName ? [wishlist] : []);

  gifts.forEach((gift) => {

    if (
      gift.isReserved === true &&
      gift.reservedBy === currentUser.email &&
      gift.itemName
    ) {
      const card = document.createElement("div");
      card.classList.add("reservation-card");

      card.textContent = `
        Gift: ${gift.itemName}
        Wishlist: ${wishlist.wishlistName}
        Occasion: ${wishlist.occasion}
      `;

      reservationsContainer.appendChild(card);
    }

  });

});