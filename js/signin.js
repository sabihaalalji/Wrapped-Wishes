const form= document.getElementById("login-form")
form.addEventListener("submit", function(event) {event.preventDefault()
const email = document.getElementById ("email").value
const password = document.getElementById ("password").value
const users = JSON.parse(localStorage.getItem("users")) || []
const foundUser = users.find(user => user.email === email);
if (!foundUser) {
    alert("Account does not exist");
    return;
} else {
    if (foundUser.password !== password) {
    alert("Wrong password");
    return;
}window.location.href = "dashboard.html";
}})