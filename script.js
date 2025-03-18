function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// Function to validate form input
function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    let isValid = true;
    const inputs = document.querySelectorAll("input[required], textarea[required]");

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            isValid = false;
            input.classList.add("error"); // Add red border to empty fields
        } else {
            input.classList.remove("error"); // Remove red border if filled
        }
    });

    if (isValid) {
        alert("Form submitted successfully!");
        event.target.submit(); // Submit the form if valid
    } else {
        alert("Please fill in all required fields.");
    }
}

// Attach validation to form submission
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", validateForm);
    }
});
