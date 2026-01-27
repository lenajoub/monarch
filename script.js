function sendEmail() {
    const params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
        subject: "New Website Inquiry"
    };

    // Validation first
    if (!params.name || !params.email || !params.message) {
        alert("Please fill in all required fields.");
        return;
    }

    // Send email
    emailjs.send("service_60l08mu", "template_l1bvw3s", params)
        .then(() => {
            alert("Message sent successfully!");
            // Reset form
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(error => {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again.");
        });
}



// Note: Make sure to include the EmailJS SDK in your HTML file for this to work.
