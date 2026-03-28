document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("registrationForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();

        // Email Validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Phone Validation (10 digits only)
        if (!/^[0-9]{10}$/.test(phone)) {
            alert("Phone number must be exactly 10 digits.");
            return;
        }

        successMessage.innerText = "Registration Successful! 🎉";

        form.reset();
    });

});