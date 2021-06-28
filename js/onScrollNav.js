//Esconder NavBar superior al scrollear
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
    document.getElementById("nav1").style.top = "0";
    document.getElementById("nav2").style.top = "0";
    } else {
    document.getElementById("nav1").style.top = "-10vh";
    document.getElementById("nav2").style.top = "-10vh";
    }
    prevScrollpos = currentScrollPos;
}