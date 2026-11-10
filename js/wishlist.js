
const editingIndex = localStorage.getItem("editingWishlistIndex");
const wishlists = JSON.parse(localStorage.getItem("wishlists")) || [];

const wishlist = document.getElementById("wishlist-form");
const addButton = document.getElementById("add-button");
const giftContainer = document.querySelector(".gift-container");

addButton.addEventListener("click", function() {
    const newGift = document.createElement("div");

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

if (editingIndex !== null) {
    const selectedWishlist = wishlists[Number(editingIndex)];

    document.getElementById("wishlist-name").value = selectedWishlist.wishlistName;
    document.getElementById("wishlist-description").value = selectedWishlist.description;
    document.getElementById("occasion").value = selectedWishlist.occasion;

    selectedWishlist.items.forEach((gift, index) => {
        if (index > 0) {
            addButton.click();
        }

        const giftNames = document.querySelectorAll(".gift-name");
        const giftLinks = document.querySelectorAll(".gift-link");

        giftNames[index].value = gift.itemName;
        giftLinks[index].value = gift.itemLink;
    });
}

wishlist.addEventListener("submit", function(event) {
    event.preventDefault();

    const wishlistName = document.getElementById("wishlist-name").value;
    const description = document.getElementById("wishlist-description").value;
    const occasion = document.getElementById("occasion").value;

    const giftNames = document.querySelectorAll(".gift-name");
    const giftLinks = document.querySelectorAll(".gift-link");

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    const oldItems = editingIndex !== null
        ? wishlists[Number(editingIndex)].items
        : [];

    const items = [];

    giftNames.forEach((gift, index) => {
        const oldGift = oldItems[index];

        const newGift = {
            itemName: gift.value,
            itemLink: giftLinks[index].value,
            isReserved: oldGift ? oldGift.isReserved : false,
            reservedBy: oldGift ? oldGift.reservedBy : null
        };

        items.push(newGift);
    });

    const newWishlist = {
        creatorEmail: currentUser.email,
        wishlistName,
        description,
        occasion,
        items
    };

    if (editingIndex !== null) {
        wishlists[Number(editingIndex)] = newWishlist;
    } else {
        wishlists.push(newWishlist);
    }

    localStorage.setItem("wishlists", JSON.stringify(wishlists));
    localStorage.removeItem("editingWishlistIndex");

    alert("Wishlist saved!");
    window.location.href = "dashboard.html";
});
