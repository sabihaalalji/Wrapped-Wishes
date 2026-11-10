const currentUser =JSON.parse(localStorage.getItem("currentUser"))
const wishlists = JSON.parse(localStorage.getItem("wishlists"))|| []
let correctEmail = wishlists.filter(wishlist => wishlist.creatorEmail === currentUser.email);
const wishlistContainer =document.getElementById("wishlist-container")
correctEmail.forEach(wishlist => { const card = document.createElement("div")
card.classList.add("wishlist-card");
card.textContent = `${wishlist.wishlistName} ${wishlist.description} ${wishlist.occasion} `;
const editButton = document.createElement("button")
editButton.textContent = "Edit"
const deleteButton =document.createElement("button")
deleteButton.textContent = "Delete"
editButton.addEventListener("click", function() 
{const wishlistIndex = wishlists.indexOf(wishlist);
    localStorage.setItem("editingWishlistIndex", wishlistIndex);
    window.location.href = "create-wishlist.html";
    





});


card.appendChild(editButton)
card.appendChild(deleteButton)
wishlistContainer.appendChild(card)
deleteButton.addEventListener("click", function() {
    const wishlistIndex = wishlists.indexOf(wishlist);

    const confirmDelete = confirm("Are you sure you want to delete this wishlist?");

    if (confirmDelete) {
        wishlists.splice(wishlistIndex, 1);
        localStorage.setItem("wishlists", JSON.stringify(wishlists));
        window.location.reload();
    }
});
});
