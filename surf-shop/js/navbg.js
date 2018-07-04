let navbg = document.getElementById("navBg");
let navbar = document.getElementById("navbarID");
let scrollPos;

window.addEventListener("scroll", () => {
    scrollPos = window.scrollY;
    if(scrollPos > 499){
        navbg.classList.remove("show");
        navbg.classList.remove("hide");
        navbg.classList.add("show");
    }
});

window.addEventListener("scroll", () => {
    scrollPos = window.scrollY;
    if(scrollPos < 499){
        navbg.classList.remove("hide");
        navbg.classList.remove("show");
        navbg.classList.add("hide");
    }
});