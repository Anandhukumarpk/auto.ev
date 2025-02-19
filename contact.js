function emailSend(){

    let params = {

        name : document.getElementById("name").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value

       
    }
    emailjs.send("service_yqkjot4","template_ylws4gh",params).then(alert("Email is sent !! "))
   
}