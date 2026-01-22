// script.js
// Replace the publicKey below if you want to hide it; public keys are safe to use in client code.
// Initialize EmailJS
(function () {
  // Use the public key you have in EmailJS dashboard
  emailjs.init("p0hchlZg9CabC11il");
})();

// Utility: simple email regex for basic validation
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");
  const sendButton = document.getElementById("send-button");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    sendButton.disabled = true;
    sendButton.textContent = "Sending...";

    const params = {
      name: document.getElementById("name").value.trim(),
      email: document.getElementById("email").value.trim(),
      subject: document.getElementById("subject").value.trim(),
      message: document.getElementById("message").value.trim(),
    };

    // Basic validation
    if (!params.name || !params.email || !params.message) {
      alert("Please fill in your name, email, and message.");
      sendButton.disabled = false;
      sendButton.textContent = "Send Inquiry";
      return;
    }
    if (!isValidEmail(params.email)) {
      alert("Please enter a valid email address.");
      sendButton.disabled = false;
      sendButton.textContent = "Send Inquiry";
      return;
    }

    // Replace these with your EmailJS service and template IDs
    const serviceID = "service_60l08mu";
    const templateID = "template_l1bvw3s";

    emailjs.send(serviceID, templateID, params)
      .then(function (response) {
        console.log("EmailJS success", response.status, response.text);
        alert("Message sent successfully!");
        form.reset();
      })
      .catch(function (error) {
        console.error("EmailJS error", error);
        alert("Failed to send message. Please try again later.");
      })
      .finally(function () {
        sendButton.disabled = false;
        sendButton.textContent = "Send Inquiry";
      });
  });
});
