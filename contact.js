document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("uOpM5VEJuvIqleKAB"); // Replace with your Public Key

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents form from refreshing the page

        emailjs.sendForm("service_yqkjot4", "template_ylws4gh", this)
            .then(function(response) {
                swal({
                    title: "success",
                    text: "Sent successfully",
                    icon: "success",
                });
                document.getElementById("contactForm").reset(); // Clears form fields
            }, function(error) {
                swal({
                    title: "Filed",
                    text: "oops",
                    icon: "error",
                });
            });
    });
});
