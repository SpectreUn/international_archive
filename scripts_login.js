// scripts.js
document.getElementById("loginButton").addEventListener("click", function() {
    const username = document.getElementById("usernameInput").value;
    const password = document.getElementById("passwordInput").value;
    const messageElement = document.getElementById("loginMessage");

    // Predefined username and password
    const validUsername = "DoctorPayne";
    const validPassword = "jackBox@1946";

    // Validate username and password
   if (username === validUsername && password === validPassword) {
        messageElement.textContent = "Login successful!";
        messageElement.style.color = "green";
        
        // Redirect to new page after 2 seconds
        setTimeout(() => {
            window.location.href = "home_page.html";
        }, 2000); // 2000 milliseconds = 2 seconds
    } else {
        messageElement.textContent = "Invalid username or password.";
        messageElement.style.color = "red";
    }
});
