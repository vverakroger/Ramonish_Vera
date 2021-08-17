//Unshow login button when login
$("#nav1_LoginBtt").click(() => { 
    $("#nav1_LoginBtt").slideUp("slow");
});

//Show login button when close
$("#myForm_cancel").click(() => { 
    $("#nav1_LoginBtt").show("slow");
});
