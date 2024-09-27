const hamburger = document.querySelector('.hamburger-menu');
const navbarMenu = document.querySelector('.navbar-menu');

hamburger.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});

// Open the form and populate the product name
function openForm(productName) {
    document.getElementById("orderForm").style.display = "flex";
    document.getElementById("product").value = productName;
}

// Close the form
function closeForm() {
    document.getElementById("orderForm").style.display = "none";
}

// When the form is submitted
document.getElementById("orderFormDetails").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const fullName = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value; 
    const city = document.getElementById("city").value;
    const address = document.getElementById("address").value;
    const product = document.getElementById("product").value;

    // Create the WhatsApp message with the order details
    const message = `Order Details:%0A
    Full Name: ${fullName}%0A
    Email: ${email}%0A
    Phone: ${phone}%0A
    City: ${city}%0A
    Full Address: ${address}%0A
    Product: ${product}%0A`;

    // Send the message to WhatsApp
    const whatsappNumber = "03148512768"; // Your WhatsApp number
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${message}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappURL, "_blank");

    // Close the form
    closeForm();
});
