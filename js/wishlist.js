console.log("Wishlist JS is running");const wishlist = document.getElementById("wishlist-form");
wishlist.addEventListener("submit", function (event) {
  
  event.preventDefault();

const wishlistName = document.getElementById("wishlist-name").value;
const description = document.getElementById("wishlist-description").value;
const occasion = document.getElementById("occasion").value;
const itemName = document.getElementById("item-name").value;
const itemLink = document.getElementById("item-link").value;
const newWishlist = {creatorEmail: JSON.parse(localStorage.getItem("currentUser")).email,
  isReserved: false,
  wishlistName,
  description,
  occasion,
  itemName,
  itemLink,
};
const wishlists = JSON.parse(localStorage.getItem("wishlists")) || [];
wishlists.push(newWishlist);
localStorage.setItem ("wishlists", JSON.stringify(wishlists));alert("Wishlist saved!");
window.location.href = "dashboard.html";
});
const addButton = document.getElementById("add-button")
addButton.addEventListener("click", function() {const newGift =  document.createElement("div") 
  const giftName = document.createElement("input")
  const giftLink =  document.createElement("input")

  newGift.appendChild(giftName)
  newGift.appendChild(giftLink)
});