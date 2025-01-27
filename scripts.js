// Function to open the password modal
function openPasswordModal() {
    document.getElementById("passwordModal").style.display = "flex"; // Display modal
}

// Function to close the password modal
function closePasswordModal() {
    document.getElementById("passwordModal").style.display = "none";
}

// Function to check the password
function checkPassword() {
    const passwordInput = document.getElementById("passwordInput").value;
    const validPasswords = ["$Hidden", "hidden", "Hidden", "$hidden", "Unlock", "unlock"]; // Array of valid passwords
    const errorMessage = document.getElementById("errorMessage");

    // Check if the entered password is in the validPasswords array
    if (validPasswords.includes(passwordInput)) {
        document.getElementById("content").classList.remove("hidden");
        document.body.style.overflowY = 'scroll'; // Enable scrolling
        closePasswordModal();
        errorMessage.style.display = "none";
    } else {
        errorMessage.style.display = "block";
    }
}


// Function to toggle the password visibility
function togglePasswordVisibility() {
    const passwordInput = document.getElementById("passwordInput");
    const button = document.querySelector("button");

    if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Show password
        button.textContent = "Hide";
    } else {
        passwordInput.type = "password"; // Hide password
        button.textContent = "Show";
    }
}

// Add event listener for 'Enter' key to submit password
document.getElementById("passwordInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPassword();
    }
});
