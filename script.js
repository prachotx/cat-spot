// sticky navbar
// add sticky class for header

window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 50)
}) 

// back to top

let mybutton = document.getElementById("mytop");

function topfunc(){
    document.documentElement.scrollTop = 0;
}

// navbar left

function showMenu(){
    document.getElementById("NavBar").style.left = "-15px";
}

function hideMenu(){
    document.getElementById("NavBar").style.left = "-300px";
}

 