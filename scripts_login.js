document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById("loginButton");
    const usernameInput = document.getElementById("usernameInput");
    const passwordInput = document.getElementById("passwordInput");
    const loginMessage = document.getElementById("loginMessage");
    

    // Predefined credentials (Note: Hardcoding passwords is insecure for production!)
    const validCredentials = {
        username: "DoctorPayne",
        password: "jackBox@1946",
    };

    // Login function
    function handleLogin() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        const clearence = CLearenceut.velvalue.trim();

        // Validate inputs
        if (!username || !password) {
            showMessage("Please enter both username and password.", "red");
            return;
        }

        // Check credentials
        if (username === validCredentials.username && password === validCredentials.password) {
            showMessage("Login successful! Redirecting...", "green");
            redirectAfterDelay("home.html", 1000); // Redirect after 1 second
        } else {
            showMessage("Invalid username or password.", "red");
            shakeForm(); // Add visual feedback for errors
        }
    }

    // Helper: Display messages
    function showMessage(text, color) {
        loginMessage.textContent = text;
        loginMessage.style.color = color;
    }

    // Helper: Redirect after delay
    function redirectAfterDelay(url, delay) {
        setTimeout(() => window.location.href = url, delay);
    }

    // Helper: Shake form on error (UX improvement)
    function shakeForm() {
        const form = document.querySelector("form");
        form.classList.add("shake");
        setTimeout(() => form.classList.remove("shake"), 500);
    }

    // Event listeners
    loginButton.addEventListener("click", handleLogin);

    // Allow login on "Enter" key
    passwordInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleLogin();
    });
});
