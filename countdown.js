// Set the date and time for Thanksgiving dinner
const countdownDate = new Date("Nov 30, 2024 12:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    if (distance <= 0) {
        document.getElementById("countdown").innerHTML = "DINNER TIME!";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        ${days}d ${hours}h ${minutes}m ${seconds}s
    `;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Message Board Functionality
// Select form elements
// Select form elements
const form = document.getElementById("message-form");
const nameInput = document.getElementById("name-input");
const messageInput = document.getElementById("message-input");
const messageList = document.getElementById("message-list");

// Handle form submission
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    const nameText = nameInput.value.trim(); // Get the name text
    const messageText = messageInput.value.trim(); // Get the message text

    if (nameText && messageText) {
        addMessageToBoard(nameText, messageText); // Add the name and message to the board
        nameInput.value = ""; // Clear the name input field
        messageInput.value = ""; // Clear the message input field
    }
});

// Function to add a message with a name to the board
function addMessageToBoard(name, message) {
    const listItem = document.createElement("li"); // Create a new list item
    listItem.innerHTML = `<strong>${name}:</strong> ${message}`; // Format name and message
    listItem.classList.add("message-item"); // Add a class for styling (optional)
    messageList.appendChild(listItem); // Add the list item to the message list
}



