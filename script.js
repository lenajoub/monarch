// Initialize EmailJS
emailjs.init("eB7BQULxMEPxtU4NM"); // Replace with your public key

function sendEmail() {
    const params = {
        name: document.getElementById("name").value.trim(),
        email: document.getElementById("email").value.trim(),
        message: document.getElementById("message").value.trim(),
        subject: "New Website Inquiry"
    };

    // Validate form
    if (!params.name || !params.email || !params.message) {
        alert("Please fill in all required fields.");
        return;
    }

    // 1️⃣ Send message to your inbox
    emailjs.send("service_3tlv1zi","template_tpt5jlw", params)
        .then(() => {
            console.log("Your message sent successfully!");
        })
        .catch(err => {
            console.error("Failed to send your message:", err);
            alert("Failed to send your message. Please try again.");
        });

    // 2️⃣ Send auto-response to user
    emailjs.send("service_3tlv1zi", "template_l1bvw3s", {
        name: params.name,
        email: params.email,
        message: params.message
    })
    .then(() => {
        console.log("Auto-response sent to user!");
        alert("Message sent successfully! A confirmation email has been sent to you.");
        
        // Clear form fields
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
    })
    .catch(err => {
        console.error("Failed to send auto-response:", err);
    });
}
