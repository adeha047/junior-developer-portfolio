const names = document.getElementById("names")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const message = document.getElementById("message")
const sendMessageButton = document.getElementById("sendMessageButton")
console.log(sendMessageButton)

function sendEmail(e) {
    e.preventDefault()
    console.log(names, email, phone, message)
}




sendMessageButton.addEventListener("click", sendEmail)





