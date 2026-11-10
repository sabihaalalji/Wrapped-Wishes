const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const wishlists = JSON.parse(localStorage.getItem("wishlists")) || [];

const myReservations = wishlists.filter((wishlist) => {
  return wishlist.isReserved === true && wishlist.reservedBy === currentUser.email;
});

const reservationsContainer = document.querySelector(".your-reservations");

myReservations.forEach((wishlist) => {
  const card = document.createElement("div");
  card.classList.add("reservation-card");

  card.textContent = `
    ${wishlist.itemName}
    ${wishlist.wishlistName}
    ${wishlist.occasion}
  `;

  reservationsContainer.appendChild(card);
});