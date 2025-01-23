
// Toggle Background Color
const toggleButton = document.getElementById("toggleButton");
toggleButton.addEventListener("click", function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// Slider for Text Size
const textSizeSlider = document.getElementById("textSizeSlider");
const text = document.getElementById("text");
textSizeSlider.addEventListener("input", function() {
    text.style.fontSize = textSizeSlider.value + "px";
});

// Modal Show and Hide
const openModalButton = document.getElementById("openModalButton");
const closeModalButton = document.getElementById("closeModalButton");
const modal = document.getElementById("myModal");

openModalButton.addEventListener("click", function() {
    modal.style.display = "block";
});

closeModalButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Form Validation
const form = document.getElementById("myForm");
const nameField = document.getElementById("name");
const emailField = document.getElementById("email");
const passwordField = document.getElementById("password");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

form.addEventListener("submit", function(event) {
    let valid = true;

    // Name validation
    if (nameField.value.length < 3) {
        nameError.textContent = "Name must be at least 3 characters long.";
        valid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(emailField.value)) {
        emailError.textContent = "Please enter a valid email address.";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(passwordField.value)) {
        passwordError.textContent = "Password must be at least 8 characters, with at least one uppercase letter and one number.";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});

// Bonus: Dropdown Change Event
const dropdown = document.getElementById("dropdown");
const dropdownMessage = document.getElementById("dropdownMessage");

dropdown.addEventListener("change", function() {
    if (dropdown.value === "option1") {
        dropdownMessage.textContent = "You selected Option 1!";
    } else if (dropdown.value === "option2") {
        dropdownMessage.textContent = "You selected Option 2!";
    } else {
        dropdownMessage.textContent = "";
    }
});
