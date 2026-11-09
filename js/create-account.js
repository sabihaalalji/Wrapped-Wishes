const form = document.getElementById("create-account-form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }


const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
const emailExists = existingUsers.some(user => user.email === email);

if (emailExists) {
    alert("This email is already registered!");
    return;
}
const newUser = { name, email, password };

existingUsers.push(newUser);

localStorage.setItem("users", JSON.stringify(existingUsers));

alert("Account created successfully!");

});