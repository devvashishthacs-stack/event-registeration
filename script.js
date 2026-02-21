document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("registrationForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Registration Successful!");
    });

});