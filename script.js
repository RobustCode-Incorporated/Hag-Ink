document.getElementById("reservation-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    alert(`Thank you, ${name}! Your ${service} appointment is booked for ${date} at ${time}.`);
});

document.getElementById('book-button').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default link behavior
    
    // Collect form values
    const name = document.getElementById('name').value;
    const service = document.getElementById('service').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    // Your WhatsApp number in international format (e.g., 123456789)
    const phoneNumber = "+243856374446"; 

    // Pre-filled message with the form data
    const message = `Hello, my name is ${name}. I would like to book a ${service} on ${date} at ${time}.`;

    // Construct the WhatsApp URL
    const whatsappURL = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
});
