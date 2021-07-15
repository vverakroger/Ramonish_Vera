function validateForm() {
    var x = document.forms["contactForm"]["cf_name"].value;
    var y = document.forms["contactForm"]["cf_email"].value;
    var z = document.forms["contactForm"]["cf_message"].value;
    if (x == "" || y == "" || z == "") {
        document.getElementById("contact_content_msg").innerHTML ="Upss! No field can be empty";
    }else{
        document.getElementById("contact_content_msg").innerHTML ="Congrats! Sent your message successfully!";
        document.forms["contactForm"]["cf_name"].value='';
        document.forms["contactForm"]["cf_email"].value='';
        document.forms["contactForm"]["cf_message"].value='';
    }
}