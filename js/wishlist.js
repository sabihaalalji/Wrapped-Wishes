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
const giftContainer = document.querySelector(".gift-container")
addButton.addEventListener("click", function() {const newGift =  document.createElement("div") 
  
  const nameLabel = document.createElement("label");
nameLabel.textContent = "Gift name";

const giftName = document.createElement("input");
giftName.classList.add("gift-name");

const linkLabel = document.createElement("label");
linkLabel.textContent = "Gift link";

const giftLink = document.createElement("input");
giftLink.classList.add("gift-link");

newGift.appendChild(nameLabel);
newGift.appendChild(giftName);
newGift.appendChild(linkLabel);
newGift.appendChild(giftLink);
giftContainer.appendChild(newGift);


});