// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent default form submission
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for your message!");
        // Clear the form
        this.reset();
    } else {
        alert("Please fill out all fields.");
    }
});

