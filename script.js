function sendmail() {
    let parms = {
        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        message : document.getElementById("message").value,
        subject : document.getElementById("subject").value,

    };

    emailjs.send("service_60l08mu","template_l1bvw3s",parms)
    .then(function(res){
        console.log("success", res.status);
        alert("Message sent successfully!");
    })
    .catch(function(err){
        console.log("failed", err);
        alert("Failed to send message. Please try again.");
    })
}