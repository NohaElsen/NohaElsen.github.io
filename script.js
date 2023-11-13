var email = document.getElementById("email");
var button = document.getElementById("button");
var successP = document.getElementById("success-p");
var dismiss = document.getElementById("dismiss");


var x;
function success(){
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    if (!filter.test(email.value)) {
        email.focus();
        var invalid = document.getElementById("invalid");
        invalid.style.visibility = "visible";
    return false;
}
    localStorage.setItem("mail", email.value);
    location.href = "success.html";
}

function confirm(){
    successP.innerHTML = "A confirmation email has been sent to " + "<b>" + localStorage.getItem("mail") + "</b>" + "." + " Please open it and click the button inside to confirm your subscription.";
}

function goBack(){
    location.href = "index.html";
}
