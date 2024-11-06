function validateForm() {
    // Add your validation logic here
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Example of simple validation
    if (username === "user" && password === "password123") {
        // If validation passes, redirect to user.html
        window.location.href = "user/user.html";
        return false; // Prevent form submission (handled by redirect)
    } else {
        // If validation fails, show error message
        document.getElementById("error-message").textContent = "Нэр эсвэл нууц үг буруу байна";
        return false; // Prevent form submission
    }
}