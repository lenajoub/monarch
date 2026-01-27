// Initialize EmailJS
emailjs.init("eB7BQULxMEPxtU4NM"); // Replace with your public key

function sendEmail() {
    const params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
        subject: "New Website Inquiry"
    };

    // Validation
    if (!params.name || !params.email || !params.message) {
        showMessage("Please fill in all required fields.", "error");
        return;
    }

    // Send email
    emailjs.send("service_3tlv1zi", "template_j20oybi", params)
        .then(() => {
            showMessage("Message sent successfully!", "success");
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(error => {
            console.error("EmailJS Error:", error);
            showMessage("Failed to send message. Please try again.", "error");
        });
}

// Slide-down message function
function showMessage(message, type) {
    const formMessage = document.getElementById("formMessage");
    formMessage.textContent = message;

    // Set color
    formMessage.classList.remove("text-red-400", "text-green-400");
    formMessage.classList.add(type === "success" ? "text-green-400" : "text-red-400");

    // Animate in
    formMessage.classList.add("opacity-100", "translate-y-0");
    formMessage.classList.remove("translate-y-[-20px]");

    // Animate out after 4 seconds
    setTimeout(() => {
        formMessage.classList.add("translate-y-[-20px]");
        formMessage.classList.remove("opacity-100");
        setTimeout(() => formMessage.textContent = "", 500);
    }, 4000);
}
